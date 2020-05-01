import {Swipe} from "./swipe";

export default class {

    constructor(selector, {mode, width, hookWidth}) {
        this.mode = mode || 'right';
        this.width = width || 0;
        this.hookWidth = hookWidth || 30;
        this.windowWidth = 0;
        this._scrollWidth = false;
        this.isOpened = false;
        this.connectElement(selector);
        this.createHook();
        this.init(selector);
    }

    connectElement(selector) {
        this.element = document.querySelector(selector);
        this.element.style.height = '100%';
        this.element.style.top = '0';
        this.element.style.zIndex = '1000';
        this.element.style.position = 'fixed';
        this.windowWidth = window.innerWidth - this.scrollWidth();
        this.width = this.width || this.windowWidth;
        this.element.style.width = this.width+'px';
        this.element.style[this.mode] = -this.width+'px';
    }

    createHook() {
        const hook = document.createElement('div');
        hook.style.width = this.hookWidth + 'px';
        hook.style.height = '100%';
        hook.style.top = '0';
        hook.style.position = 'absolute';
        if (this.mode === 'right') {
            hook.style.left = `-${this.hookWidth}px`;
        } else {
            hook.style.right = `-${this.hookWidth}px`;
        }
        hook.style.cursor = 'pointer';
        this.element.append(hook);
    }

    openRightMenu() {
        let variable = this.width - Math.floor(this.element.getBoundingClientRect().left);
        const animate = setInterval(() => {
            variable = variable + 7;
            if (variable >= this.width) clearInterval(animate);
            variable = variable > this.width ? this.width : variable;
            this.element.style.transform = `translateX(-${variable}px)`;
        }, 1);
        this.isOpened = true;
    }
    closeRightMenu() {
        let variable = this.width - Math.floor(this.element.getBoundingClientRect().left);
        const animate = setInterval(() => {
            variable = variable - 7;
            if (variable <= 0) clearInterval(animate);
            variable = variable < 0 ? 0 : variable;
            this.element.style.transform = `translateX(-${variable}px)`;
        }, 1);
        this.isOpened = false;
    }
    openLeftMenu() {
        let variable = this.width + Math.floor(this.element.getBoundingClientRect().left);
        const animate = setInterval(() => {
            variable = variable + 7;
            if (variable >= this.width) clearInterval(animate);
            variable = variable > this.width ? this.width : variable;
            this.element.style.transform = `translateX(${variable}px)`;
        }, 1);
        this.isOpened = true;
    }
    closeLeftMenu() {
        let variable = this.width + Math.floor(this.element.getBoundingClientRect().left);
        const animate = setInterval(() => {
            variable = variable - 7;
            if (variable <= 0) clearInterval(animate);
            variable = variable < 0 ? 0 : variable;
            this.element.style.transform = `translateX(${variable}px)`;
        }, 1);
        this.isOpened = false;
    }

    init() {
        const self = this;
        const target = this.element;
        const swipe = new Swipe(target);
        swipe.start = function(e) {
            const matrix = new WebKitCSSMatrix(getComputedStyle(target).transform).m41,
                toucheX = this.getTouches(e).offsetX;
            if (matrix) this.set('xStart', toucheX - matrix);
        };
        swipe.drag = function (e) {
            this.preventDefault(e);

            let xCurrent = this.get('xCurrent');
            let boxLeft = Math.floor(target.getBoundingClientRect().left) - (self.windowWidth - self.width);

            if (self.mode === 'right') {
                switch (this.currentDirection) {
                    case 'left': {
                        if (boxLeft > 0 && self.width >= boxLeft) {
                            this.preventDefault(e);
                            if (-xCurrent > self.width) {
                                xCurrent = -self.width;
                            } else if (xCurrent > 0) {
                                xCurrent = 0;
                            }
                            target.style.transform = 'translateX(' + xCurrent + 'px)';
                        }
                        break;
                    }
                    case 'right': {
                        if (self.windowWidth > boxLeft) {
                            this.preventDefault(e);
                            if (-xCurrent < 0) {
                                xCurrent = 0;
                            } else if (-xCurrent > self.width) {
                                xCurrent = -self.width;
                            }
                            target.style.transform = 'translateX(' + xCurrent + 'px)';
                        }
                        break;
                    }
                }
            } else if (self.mode === 'left') {
                switch (this.currentDirection) {
                    case 'right': {
                        if (boxLeft < 0) {
                            if (xCurrent > self.width) {
                                xCurrent = self.width;
                            } else if (xCurrent <= 0) {
                                xCurrent = 0;
                            }
                            target.style.transform = 'translateX(' + xCurrent + 'px)';
                        }
                        break;
                    }
                    case 'left': {
                        if (-boxLeft < self.windowWidth) {
                            if (xCurrent > self.width) {
                                xCurrent = self.width;
                            } else if (xCurrent < 0) {
                                xCurrent = 0;
                            }
                            target.style.transform = 'translateX(' + xCurrent + 'px)';
                        }
                        break;
                    }
                }
            }
        };
        swipe.stop = function () {
            let boxLeft = Math.floor(target.getBoundingClientRect().left);
            if (self.mode === 'right') {
                boxLeft = boxLeft - (self.windowWidth - self.width);
                switch (this.currentDirection) {
                    case 'left': {
                        if (boxLeft < self.width) {
                            self.openRightMenu();
                        } else {
                            target.style.transform = 'translateX(0px)';
                        }
                        break;
                    }
                    case 'right': {
                        if (boxLeft > 0) {
                            self.closeRightMenu();
                        } else {
                            target.style.transform = `translateX(-${self.width}px)`;
                        }
                        break;
                    }
                }
            } else if (self.mode === 'left') {
                switch (this.currentDirection) {
                    case 'right': {
                        if (-boxLeft < self.width) {
                            self.openLeftMenu();
                        } else {
                            target.style.transform = 'translateX(0px)';
                        }
                        break;
                    }
                    case 'left': {
                        if (boxLeft < 0) {
                            self.closeLeftMenu();
                        } else {
                            target.style.transform = `'translateX(${self.width}px)'`;
                        }
                        break;
                    }
                }
            }
        }
    }

    scrollWidth() {
        const result = this._scrollWidth;
        if (result === false) {
            const div = document.createElement('div');
            div.style.overflowY = 'scroll';
            div.style.width = '50px';
            div.style.height = '50px';
            document.body.append(div);
            this._scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();
        }
        return result;
    }

    open() {
        if (this.mode === 'right') {
            this.openRightMenu();
        } else {
            this.openLeftMenu();
        }
    }
    close() {
        if (this.mode === 'right') {
            this.closeRightMenu();
        } else {
            this.closeLeftMenu();
        }
    }
    toggle() {
        if (this.isOpened) {
            this.close();
        } else {
            this.open();
        }
    }
}
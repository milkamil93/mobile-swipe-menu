import {Swipe} from "./swipe";

export class Menu {

    constructor(selector, mode) {
        this.mode = mode || 'right';
        this.boxWidth = 0;
        this.hookWidth = 30;
        this.windowWidth = 0;
        this._scrollWidth = false;
        this.connectElement(selector);
        this.createHook();
        this.swipe(selector);
    }

    connectElement(selector) {
        this.element = document.querySelector(selector);
        this.element.style.willChange = 'transform';
        this.element.style.top = '0';
        this.element.style.zIndex = '9999';
        this.element.style.position = 'fixed';
        this.boxWidth = Number(this.element.style.width.replace(/[^\d]+/g, ""));
        this.windowWidth = window.innerWidth - this.scrollWidth();
        if (this.boxWidth === 0) {
            this.boxWidth = this.boxWidth || this.windowWidth;
            this.element.style.width = this.boxWidth+'px';
        }
        this.element.style[this.mode] = -this.boxWidth+'px';
    }

    createHook() {
        const hook = document.createElement('div');
        hook.style.width = this.hookWidth + 'px';
        hook.style.height = '100%';
        hook.style.top = '0';
        hook.style.position = 'absolute';
        if (this.mode === 'right') {
            hook.style.left = '-30px';
        } else {
            hook.style.right = '-30px';
        }
        hook.style.cursor = 'pointer';
        this.element.append(hook);
    }

    open() {
        this.element.style.transition = 'transform .15s ease-in-out';

        setTimeout(function () {
            this.element.style.transition = '';
        }, 200);
    }

    swipe() {
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
            target.style.transition = 'none';

            let xCurrent = this.get('xCurrent');
            const boxLeft = Math.floor(target.getBoundingClientRect().left);

            if (self.mode === 'right') {
                switch (this.currentDirection) {
                    case 'left': {
                        if (
                            boxLeft > self.windowWidth - self.boxWidth &&
                            self.windowWidth >= boxLeft
                        ) {
                            this.preventDefault(e);
                            target.style.transition = 'none';
                            if (-xCurrent > self.boxWidth) {
                                xCurrent = -self.boxWidth;
                            } else if (xCurrent > 0) {
                                xCurrent = 0;
                            }
                            target.style.transform = 'translateX(' + xCurrent + 'px)';
                        }
                        break;
                    }
                    case 'right': {
                        if (
                            boxLeft >= self.windowWidth - self.boxWidth &&
                            self.windowWidth > boxLeft
                        ) {
                            this.preventDefault(e);
                            target.style.transition = 'none';
                            if (-xCurrent < 0) {
                                xCurrent = 0;
                            } else if (-xCurrent > self.boxWidth) {
                                xCurrent = -self.boxWidth;
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
                            if (xCurrent > self.boxWidth) {
                                xCurrent = self.boxWidth;
                            } else if (xCurrent <= 0) {
                                xCurrent = 0;
                            }
                            target.style.transform = 'translateX(' + xCurrent + 'px)';
                        }
                        break;
                    }
                    case 'left': {
                        if (-boxLeft < self.boxWidth) {
                            if (xCurrent > self.boxWidth) {
                                xCurrent = self.boxWidth;
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
            const boxLeft = Math.floor(target.getBoundingClientRect().left);
            target.style.transition = 'transform .15s ease-in-out';
            if (self.mode === 'right') {
                switch (this.currentDirection) {
                    case 'left': {
                        if (boxLeft < self.boxWidth) {
                            target.style.transform = 'translateX(-' + self.boxWidth + 'px)';
                        } else {
                            target.style.transform = 'translateX(0px)';
                        }
                        break;
                    }
                    case 'right': {
                        if (boxLeft > (self.windowWidth - self.boxWidth) * 2) {
                            target.style.transform = 'translateX(0px)';
                        } else {
                            target.style.transform = 'translateX(-' + self.boxWidth + 'px)';
                        }
                        break;
                    }
                }
            } else if (self.mode === 'left') {
                switch (this.currentDirection) {
                    case 'right': {
                        if (boxLeft > self.windowWidth - self.boxWidth * 2) {
                            target.style.transform = 'translateX(' + self.boxWidth + 'px)';
                        } else {
                            target.style.transform = 'translateX(0px)';
                        }
                        break;
                    }
                    case 'left': {
                        if (boxLeft < self.boxWidth - self.windowWidth) {
                            target.style.transform = 'translateX(0px)';
                        } else {
                            target.style.transform = 'translateX(' + self.boxWidth + 'px)';
                        }
                        break;
                    }
                }
            }
            setTimeout(function () {
                target.style.transition = '';
            }, 200);
        }
    }

    scrollWidth() {
        const result = this._scrollWidth;
        if (result === false) {
            var div = document.createElement('div');
            div.style.overflowY = 'scroll';
            div.style.width = '50px';
            div.style.height = '50px';
            document.body.append(div);
            this._scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();
        }
        return result;
    };
}
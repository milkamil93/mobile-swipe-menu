import { Swipe } from './swipe'

export default class
{
    /**
     * @description Operating mode. Possible values: `right`, `left`
     * @type string
     */
    _mode

    /**
     * @deprecated Will be deleted in version 3.0. Use `disableSwipe` or `enableSwipe` methods instead.
     * @description The status of whether the swipe will run.
     * @type boolean
     */
    lock = false

    /**
     * @description Menu width.
     * @type number
     * */
    _width

    /**
     * @description Side grip width. Does not work if `enableBodyHook` is enabled.
     * @type number
     * */
    _hookWidth

    /**
     * @description Use percentage of your window as hookWidth.
     * @type boolean
     * */
    _useHookWidthPercentage

    /**
     * @description Capture mode. If enabled, the entire screen is taken into account.
     * @type boolean
     * */
    _enableBodyHook

    /**
     * @description Scrolling bar width.
     * @types number, boolean
     * */
    _scrollWidth = false

    /**
     * @description Menu open status.
     * @type boolean
     * */
    _isOpened = false

    /**
     * @description Event set.
     * @type object
     * */
    _events

    /**
     * @description Menu element in document.
     * @type object
     * */
    _element

    /**
     * @description Window width.
     * @type number
     * */
    _windowWidth

    /**
     * @constructor
     * @param {string, object} selector - Menu element or selector in document.
     * @param {object} options - Customization options.
     * @param {string} options.mode - Operating mode. Possible values: right, left
     * @param {number} options.width - Menu width.
     * @param {number} options.hookWidth - Side grip width. Does not work if `enableBodyHook` is enabled.
     * @param {boolean} options.useHookWidthPercentage - Use percentage of your window as hookWidth.
     * @param {boolean} options.enableBodyHook - Capture mode. If enabled, the entire screen is taken into account.
     * @param {object} options.events - Event set.
     * @param {function} options.events.start - Event starting swiping menu.
     * @param {function} options.events.stop - Event stopping swiping menu.
     * @param {function} options.events.opened - Event menu is opened.
     * @param {function} options.events.closed - Event menu is closed.
     * @param {function} options.events.drag - Event menu is swiping.
     * */
    constructor(selector, options = {})
    {
        const {
            mode = 'right',
            width = 0,
            hookWidth = 30,
            useHookWidthPercentage = false,
            enableBodyHook = false,
            events = {}
        } = options

        this._mode = mode
        this._width = width
        this._hookWidth = hookWidth
        this._useHookWidthPercentage = useHookWidthPercentage;
        this._enableBodyHook = enableBodyHook
        this._events = Object.assign({
            start:  () => {},
            stop:   () => {},
            opened: () => {},
            closed: () => {},
            drag:   () => {}
        }, events)

        this._connectElement(selector)

        if (!enableBodyHook) {
            this._createHook()
        }

        this._init()
    }

    /**
     * @description Creating a menu element in a document.
     * @param {string, object} selector - Menu element or selector in document.
     * */
    _connectElement(selector)
    {
        this._element = typeof selector === 'string' ? document.querySelector(selector) : selector
        this._element.style.height = '100%'
        this._element.style.top = '0'
        this._element.style.zIndex = '1000'
        this._element.style.position = 'fixed'
        this._element.style.willChange = 'transform'
        this._windowWidth = window.innerWidth - this._getScrollWidth()
        this.setWidth(this._width || this._windowWidth)
    }

    /**
     * @description Side grip creation.
     * */
    _createHook()
    {
        const hook = document.createElement('div')
        const hookWidthValue = this._useHookWidthPercentage
            ? this._windowWidth * this._hookWidth / 100
            : this._hookWidth

        hook.style.width = hookWidthValue + 'px'
        hook.style.height = '100%'
        hook.style.top = '0'
        hook.style.position = 'absolute'
        hook.style.cursor = 'pointer'

        if (this._mode === 'right') {
            hook.style.left = `-${hookWidthValue}px`
        } else {
            hook.style.right = `-${hookWidthValue}px`
        }

        this._element.append(hook)
    }

    /**
     * @description Opening the menu with mode `right`.
     * */
    _openRightMenu()
    {
        this._transition()
        this._element.style.transform = `translateX(-${this._width}px)`
        this._isOpened = true
        this._events.opened.bind(this)()
    }

    /**
     * @description Closing the menu with mode `right`.
     * */
    _closeRightMenu()
    {
        this._transition()
        this._element.style.transform = 'translateX(0px)'
        this._isOpened = false
        this._events.closed.bind(this)()
    }

    /**
     * @description Opening the menu with mode `left`.
     * */
    _openLeftMenu()
    {
        this._transition()
        this._element.style.transform = `translateX(${this._width}px)`
        this._isOpened = true
        this._events.opened.bind(this)()
    }

    /**
     * @description Closing the menu with mode `left`.
     * */
    _closeLeftMenu()
    {
        this._transition()
        this._element.style.transform = 'translateX(0px)'
        this._isOpened = false
        this._events.closed.bind(this)()
    }

    /**
     * @description Smooth movement.
     * */
    _transition()
    {
        this._element.style.transitionDuration = '300ms'
        setTimeout(() => {
            this._element.style.transitionDuration = '0ms'
        }, 200)
    }

    /**
     * @description Initialization.
     * */
    _init()
    {
        const self = this
        const target = this._element
        const hookTarget = this._enableBodyHook ? document.body : this._element

        hookTarget.style['cursor'] = 'auto'
        hookTarget.style['touch-action'] = 'pan-y'
        hookTarget.style['-ms-touch-action'] = 'pan-y'

        const swipe = new Swipe(hookTarget)

        swipe.start = function (e)
        {
            if (self.lock && !self._isOpened) {
                return false
            }

            const matrix = new WebKitCSSMatrix(getComputedStyle(target).transform).m41
            const toucheX = this.getTouches(e).offsetX

            if (matrix) {
                this.set('xStart', toucheX - matrix)
            }

            self._events.start.bind(self)(this)
        }

        swipe.drag = function (e)
        {
            if (self.lock && !self._isOpened) {
                return false
            }

            if (['left', 'right'].indexOf(this.currentDirection) >= 0 && e.type === 'touchmove') {
                e.stopImmediatePropagation()
                e.stopPropagation()
                if (e.cancelable) {
                    e.preventDefault()
                }
            }

            self._events.drag.bind(self)(this)

            let xCurrent = this.get('xCurrent')
            let boxLeft = Math.floor(target.getBoundingClientRect().left) - (self._windowWidth - self._width)

            if (self._mode === 'right') {
                switch (this.currentDirection) {
                    case 'left': {
                        if (self._width >= boxLeft) {
                            if (-xCurrent > self._width) {
                                xCurrent = -self._width
                            } else if (xCurrent > 0) {
                                xCurrent = 0
                            }
                            target.style.transform = `translateX(${xCurrent}px)`
                        }
                        break
                    }
                    case 'right': {
                        if (self._windowWidth > boxLeft) {
                            if (-xCurrent < 0) {
                                xCurrent = 0
                            } else if (-xCurrent > self._width) {
                                xCurrent = -self._width
                            }
                            target.style.transform = `translateX(${xCurrent}px)`
                        }
                        break
                    }
                }
            } else if (self._mode === 'left') {
                switch (this.currentDirection) {
                    case 'right': {
                        if (boxLeft < 0) {
                            if (xCurrent > self._width) {
                                xCurrent = self._width
                            } else if (xCurrent <= 0) {
                                xCurrent = 0
                            }
                            target.style.transform = `translateX(${xCurrent}px)`
                        }
                        break
                    }
                    case 'left': {
                        if (xCurrent >= self._width) {
                            xCurrent = self._width
                        } else if (xCurrent < 0) {
                            xCurrent = 0
                        }
                        target.style.transform = `translateX(${xCurrent}px)`
                        break
                    }
                }
            }
        }

        swipe.stop = function ()
        {
            if (self.lock && !self._isOpened) {
                return false
            }

            let boxLeft = Math.floor(target.getBoundingClientRect().left)

            if (self._mode === 'right') {
                boxLeft = boxLeft - (self._windowWidth - self._width)
                switch (this.currentDirection) {
                    case 'left': {
                        if (boxLeft < self._width) {
                            if (boxLeft < self._width - 30) {
                                self._openRightMenu()
                            } else {
                                self._closeRightMenu()
                            }
                        } else {
                            target.style.transform = 'translateX(0px)'
                        }
                        break
                    }
                    case 'right': {
                        if (boxLeft > 0) {
                            if (boxLeft > 30) {
                                self._closeRightMenu()
                            } else {
                                self._openRightMenu()
                            }
                        } else {
                            target.style.transform = `translateX(-${self._width}px)`
                        }
                        break
                    }
                }
            } else if (self._mode === 'left') {
                switch (this.currentDirection) {
                    case 'right': {
                        if (-boxLeft < self._width) {
                            if (-boxLeft < self._width - 30) {
                                self._openLeftMenu()
                            } else {
                                self._closeLeftMenu()
                            }
                        } else {
                            target.style.transform = 'translateX(0px)'
                        }
                        break
                    }
                    case 'left': {
                        if (boxLeft < 0) {
                            if (boxLeft < -30) {
                                self._closeLeftMenu()
                            } else {
                                self._openLeftMenu()
                            }
                        } else {
                            target.style.transform = `translateX(${self._width}px)`
                        }
                        break
                    }
                }
            }

            self._events.stop.bind(self)(this)
        }
    }

    /**
     * @description Getting the width of the scrollbar.
     * */
    _getScrollWidth()
    {
        const result = this._scrollWidth

        if (result === false) {
            const div = document.createElement('div')
            div.style.overflowY = 'scroll'
            div.style.width = '50px'
            div.style.height = '50px'
            document.body.append(div)
            this._scrollWidth = div.offsetWidth - div.clientWidth
            div.remove()
        }

        return result
    }

    /**
     * @deprecated Since version 2.1 Will be deleted in version 3.0. Use openMenu instead.
     */
    open()
    {
        this.openMenu()
    }

    /**
     * @description Opens the menu.
     * */
    openMenu()
    {
        if (this._mode === 'right') {
            this._openRightMenu()
        } else {
            this._openLeftMenu()
        }
    }

    /**
     * @deprecated Since version 2.1 Will be deleted in version 3.0. Use closeMenu instead.
     */
    close()
    {
        this.closeMenu()
    }

    /**
     * @description Closes the menu.
     * */
    closeMenu()
    {
        if (this._mode === 'right') {
            this._closeRightMenu()
        } else {
            this._closeLeftMenu()
        }
    }

    /**
     * @deprecated Since version 2.1 Will be deleted in version 3.0. Use toggleMenu instead.
     */
    toggle()
    {
        this.toggleMenu()
    }

    /**
     * @description Opens or closes the menu.
     * */
    toggleMenu()
    {
        if (this._isOpened) {
            this.closeMenu()
        } else {
            this.openMenu()
        }
    }

    /**
     * @description Disables menu swiping.
     * */
    disableSwipe()
    {
        this.lock = true
    }

    /**
     * @description Enables menu swiping.
     * */
    enableSwipe()
    {
        this.lock = false
    }

    /**
     * @description Set width menu
     * @param width float Numeric floating point value
     * */
    setWidth(width = 0)
    {
        this._width = width
        this._element.style.width = this._width + 'px'
        this._element.style[this._mode] = -this._width + 'px'
    }
}

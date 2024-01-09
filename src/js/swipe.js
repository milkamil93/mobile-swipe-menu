export class Swipe
{
    /**
     * @description Whether the movement is initiated
     * @type boolean
     */
    inWork

    /**
     * @type float
     */
    xDown

    /**
     * @type float
     */
    yDown

    /**
     * @type float
     */
    xStart

    /**
     * @type float
     */
    yStart

    /**
     * @type float
     */
    xCurrent

    /**
     * @type float
     */
    yCurrent

    /**
     * @type string|null
     * @description Current swiping side
     */
    currentDirection

    /**
     * @constructor
     * @param selector {string, object}
     * */
    constructor(selector)
    {
        this.inWork = false
        this.xDown = null
        this.yDown = null
        this.xStart = null
        this.yStart = null
        this.xCurrent = null
        this.yCurrent = null
        this.currentDirection = null

        if (typeof selector === 'string') {
            document.querySelectorAll(selector).forEach(this.eventListener.bind(this))
        } else {
            this.eventListener(selector)
        }
    }

    /**
     * @description Setter this context
     * @param field string
     * @param value
     * */
    set(field, value)
    {
        this[field] = value
    }

    /**
     * @description Getter this context
     * @param field string
     * */
    get(field)
    {
        return this[field]
    }

    /**
     * @description Add listener
     * @param element object
     * */
    eventListener(element)
    {
        element.addEventListener('mousedown', this.handleTouchStart.bind(this))
        element.addEventListener('touchstart', this.handleTouchStart.bind(this))
        element.addEventListener('mousemove', this.handleTouchMove.bind(this))
        element.addEventListener('touchmove', this.handleTouchMove.bind(this), {passive: false})
        element.addEventListener('mouseup', this.handleTouchEnd.bind(this))
        element.addEventListener('touchend', this.handleTouchEnd.bind(this))
    }

    /**
     * @description Get coordinates
     * @param event object
     * */
    getTouches(event)
    {
        const result = { offsetX: 0, offsetY: 0 }
        const touch = event.touches
            ? event.touches[0]
            : event.originalEvent
                ? event.originalEvent.touches[0]
                : false

        if (touch) {
            result.offsetX = Math.round(touch.clientX)
            result.offsetY = Math.round(touch.clientY)
        } else {
            result.offsetX = Math.round(event.clientX)
            result.offsetY = Math.round(event.clientY)
        }

        return result
    }

    /**
     * @description Set init coordinates
     * @param event object
     * */
    handleTouchStart(event)
    {
        const touche = this.getTouches(event)

        this.set('inWork', true)
        this.set('xDown', touche.offsetX)
        this.set('yDown', touche.offsetY)
        this.set('xStart', touche.offsetX)
        this.set('yStart', touche.offsetY)

        this.start(event)
    }

    /**
     * @description Method for move event
     * @param event object
     * */
    handleTouchMove(event)
    {
        if (!this.get('inWork')) {
            return false
        }

        const touche = this.getTouches(event)

        this.set('xCurrent', touche.offsetX - this.get('xStart'))
        this.set('yCurrent', touche.offsetY - this.get('yStart'))

        const xDiff = this.get('xDown') - touche.offsetX
        const yDiff = this.get('yDown') - touche.offsetY

        if (!this.get('currentDirection')) {
            this.setDirection(event, xDiff, yDiff)
        }

        this.drag(event)

        if (!this.get('xDown') || !this.get('yDown')) {
            return false
        }

        this.setDirection(event, xDiff, yDiff)

        this.set('xDown', null)
        this.set('yDown', null)
    }

    /**
     * @description Set current direction
     * @param event object
     * @param xDiff float
     * @param yDiff float
     * */
    setDirection(event, xDiff, yDiff)
    {
        if (Math.abs(xDiff) >= Math.abs(yDiff)) {
            if (xDiff > 0) {
                this.set('currentDirection', 'left')
                this.left(event)
            } else {
                this.set('currentDirection', 'right')
                this.right(event)
            }
        } else {
            if (yDiff > 0) {
                this.set('currentDirection', 'up')
                this.up(event)
            } else {
                this.set('currentDirection', 'down')
                this.down(event)
            }
        }
    }

    /**
     * @description Method for touch end
     * @param event object
     * */
    handleTouchEnd(event)
    {
        this.set('inWork', false)
        this.stop(event)
    }

    /**
     * @description Method for drag event
     * @param event object
     * */
    drag(event)
    {
        event.target.style.transition = 'none'
        event.target.style.transform = `translate(${this.get('xCurrent')}px, ${this.get('yCurrent')}px)`
    }

    left  (event) {}
    right (event) {}
    up    (event) {}
    down  (event) {}
    start (event) {}
    stop  (event) {}
}

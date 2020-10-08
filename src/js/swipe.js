export class Swipe {

    constructor (selector) {
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

    set(field, value) {
        this[field] = value
    }

    get (field) {
        return this[field]
    }

    eventListener (element) {
        element.addEventListener('mousedown', this.handleTouchStart.bind(this))
        element.addEventListener('touchstart', this.handleTouchStart.bind(this))
        element.addEventListener('mousemove', this.handleTouchMove.bind(this))
        element.addEventListener('touchmove', this.handleTouchMove.bind(this), {passive: false})
        element.addEventListener('mouseup', this.handleTouchEnd.bind(this))
        element.addEventListener('touchend', this.handleTouchEnd.bind(this))
    }

    getTouches (e) {
        const result = {offsetX: 0, offsetY: 0}
        const touch = e.touches
            ? e.touches[0]
            : e.originalEvent
                ? e.originalEvent.touches[0]
                : false
        if (touch) {
            result.offsetX = Math.round(touch.clientX)
            result.offsetY = Math.round(touch.clientY)
        } else {
            result.offsetX = Math.round(e.clientX)
            result.offsetY = Math.round(e.clientY)
        }
        return result
    }

    handleTouchStart (e) {
        const touche = this.getTouches(e)
        this.set('inWork', true)
        this.set('xDown', touche.offsetX)
        this.set('yDown', touche.offsetY)
        this.set('xStart', touche.offsetX)
        this.set('yStart', touche.offsetY)
        this.start(e)
    }

    handleTouchMove (e) {
        if (!this.get('inWork')) {
            return false
        }

        const touche = this.getTouches(e)

        this.set('xCurrent', touche.offsetX - this.get('xStart'))
        this.set('yCurrent', touche.offsetY - this.get('yStart'))

        const xDiff = this.get('xDown') - touche.offsetX
        const yDiff = this.get('yDown') - touche.offsetY

        if (!this.get('currentDirection')) {
            this.setDirection(e, xDiff, yDiff)
        }

        this.drag(e)

        if (!this.get('xDown') || !this.get('yDown')) {
            return false
        }

        this.setDirection(e, xDiff, yDiff)

        this.set('xDown', null)
        this.set('yDown', null)
    }

    setDirection (e, xDiff, yDiff) {
        if (Math.abs(xDiff) >= Math.abs(yDiff)) {
            if (xDiff > 0) {
                this.set('currentDirection', 'left')
                this.left(e)
            } else {
                this.set('currentDirection', 'right')
                this.right(e)
            }
        } else {
            if (yDiff > 0) {
                this.set('currentDirection', 'up')
                this.up(e)
            } else {
                this.set('currentDirection', 'down')
                this.down(e)
            }
        }
    }

    handleTouchEnd (e) {
        this.set('inWork', false)
        this.stop(e)
    }

    drag (e) {
        e.target.style.transition = 'none'
        e.target.style.transform = `translate(${this.get('xCurrent')}px, ${this.get('yCurrent')}px)`
    }

    left (e) {
    }

    right (e) {
    }

    up (e) {
    }

    down (e) {
    }

    start (e) {
    }

    stop (e) {
    }
}

# Mobile Swipe Menu
Swipe Menu with Vanilla JS for mobile
###### Demo: https://milkamil93.github.io/

## Instruction
### Installation
```
npm i mobile-swipe-menu --save
```
### Using
```
new MobileSwipeMenu(selector, options)
```
### Options
```
mode - operating mode (right, left)
width - menu width
hookWidth - protrusion width
enableWindowHook - react to the whole window
parentWidth
```
### Methods
```
open, close, toggle
```
### Events
```
events: {
    opening: function () {},
    closing: function () {},
    drag: function (swipe) {}
}
```
### Example
#### ES6
```
import MobileSwipeMenu from 'mobile-swipe-menu';
new MobileSwipeMenu('#menu', {
    mode: 'right',
    width: window.innerWidth / 1.15
});
```
#### OR
```
<script src="js/mobile-swipe-menu.min.js"></script>
<script>
    var mobileMenu = new MobileSwipeMenu('#menu', {
        mode: 'right',
        width: window.innerWidth / 1.15,
        hookWidth: 15,
        events: {
            opening: function () {
                console.log(this, 'Opened');
            },
            closing: function () {
                console.log(this, 'Closed');
            },
            drag: function (swipe) {
                console.log(this, swipe);
            }
        }
    });
    document.getElementById('openMenu').addEventListener('click', function () {
        mobileMenu.open();
    });
    document.getElementById('closeMenu').addEventListener('click', function () {
        mobileMenu.close();
    });
    document.getElementById('toggleMenu').addEventListener('click', function () {
        mobileMenu.toggle();
    });
</script>
```
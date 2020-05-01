# Mobile Swipe Menu
Swipe Menu with Vanilla JS for mobile
###### Demo: https://mobileswipemenu.todowell.ru

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
```
### Methods
```
open, close, toggle
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
        width: 300,
        hookWidth: 15
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
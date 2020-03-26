# Mobile Swipe Menu
Swipe Menu with Vanilla JS for mobile

## Instruction
### Installation
```
npm i mobile-swipe-menu --save
```
### Using
```
new MobileSwipeMenu(selector, mode)
```
### Options
```
selector - selector to DOM element
mode - operating mode
`right` - from right to left
`left` - from left to right
```
### Example
#### ES6
```
import MobileSwipeMenu from 'mobile-swipe-menu';
new MobileSwipeMenu('#menu', 'right);
```
#### OR
```
<script src="js/mobile-swipe-menu.min.js"></script>
<script>new MobileSwipeMenu('#menu', 'right);</script>
```
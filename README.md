# Mobile Swipe Menu
Swipe Menu with Vanilla JS for mobile
###### Demo: https://milkamil93.github.io/


## Instruction

### Installation
```
npm install mobile-swipe-menu --save
```

### Using
```
new MobileSwipeMenu(selector, options)
```

### Options
| Name                     | Type      | Default   | Description                   |
| ---                      | ---       | ---       | ---                           |
| `mode`                   | string    | right     | operating mode (right, left)  |
| `width`                  | number    | 0         | menu width                    |
| `hookWidth`              | number    | 30        | protrusion width              |
| `useHookWidthPercentage` | boolean   | false     | use percentage as hookWidth   |
| `enableBodyHook`         | boolean   | false     | react to the whole window     |
| `events`                 | object    | {}        | event set object              |

### Methods
| Name              | Description           |
| ---               | ---                   |
| `openMenu`        | open the menu         |
| `closeMenu`       | close the menu        |
| `toggleMenu`      | open or close a menu  |
| `disableSwipe`    | disable menu swipe    |
| `enableSwipe`     | enable menu swipe     |

### Events
| Name              | Description           |
| ---               | ---                   |
| `start`           | starting swiping menu |
| `stop`            | stopping swiping menu  |
| `opened`          | menu is opened        |
| `closed`          | menu is closed        |
| `drag`            | the menu is swiping   |


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
        enableBodyHook: true,
        events: {
            opened: function () {
            },
            closed: function () {
            },
            drag: function (swipe) {
            }
        }
    });
    document.getElementById('openMenu').addEventListener('click', function () {
        mobileMenu.openMenu();
    });
    document.getElementById('closeMenu').addEventListener('click', function () {
        mobileMenu.closeMenu();
    });
    document.getElementById('toggleMenu').addEventListener('click', function () {
        mobileMenu.toggleMenu();
    });
</script>
```

'use strict';
const
    gulp = require('gulp'),
    path = require('path'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    stylus = require('gulp-stylus'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    cssnano = require('gulp-cssnano'),
    webpackStream = require('webpack-stream'),
    pkg = require("./package.json"),
    path = 'dist/',
    banner = [
        '/**',
        ' * NOTICE OF LICENSE',
        ' *',
        ' * This source file is subject to the MIT License (MIT)',
        ' * that is bundled with this package in the file LICENSE.txt.',
        ' * It is also available through the world-wide-web at this URL:',
        ' * http://www.gnu.org/copyleft/lesser.html',
        ' *',
        ' * @package        mk93-swipe-menu',
        ' * @description    Swipe Menu with Vanilla JS',
        ' * @author         milkamil93',
        ' * @copyright      ${new Date().getFullYear()} FormAjax',
        ' * @license        http://www.gnu.org/copyleft/lesser.html GNU Lesser General Public License',
        ' * @link           https://github.com/milkamil93/mk93-swipe-menu',
        '*/'
    ].join('\n')
;
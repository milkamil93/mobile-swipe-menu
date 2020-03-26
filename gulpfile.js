'use strict';

const
    pkg = require("./package.json"),
    banner = [
        '/**',
        ' * @package        ${pkg.name}',
        ' * @version        ${pkg.version}',
        ' * @description    ${pkg.description}',
        ' * @author         ${pkg.author}',
        ' * @copyright      ${new Date().getFullYear()} ${pkg.name}',
        ' * @license        ${pkg.license}',
        ' * @link           ${pkg.homepage}',
        '*/'
    ].join('\n'),
    nib = require('nib'),
    gulp = require('gulp'),
    gulpif = require('gulp-if'),
    rupture = require('rupture'),
    through = require('through2'),
    header = require('gulp-header'),
    concat = require('gulp-concat'),
    stylus = require('gulp-stylus'),
    uglify = require('gulp-uglify'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    webpackStream = require('webpack-stream'),
    browserSync = require('browser-sync').create()
;

function css(release) {
    release = release === true;
    return gulp.src('./src/css/*.styl')
        .pipe(gulpif(!release, sourcemaps.init()))
        .pipe(stylus({
            compress: release,
            use:[nib(), rupture()]
        }))
        .pipe(postcss())
        .pipe(concat(release ? 'mobile-swipe-menu.min.css' : 'mobile-swipe-menu.css'))
        .pipe(gulpif(!release, sourcemaps.write('.')))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
}

function js(release = false) {
    release = release === true;
    return gulp.src('./src/js/app.js')
        .pipe(webpackStream({
            devtool: release ? false : 'source-map',
            mode: release ? 'production' : 'development',
            output: {
                filename: release
                    ? 'mobile-swipe-menu.min.js'
                    : 'mobile-swipe-menu.js',
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /\.node_modules$/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env'],
                                plugins: ['@babel/plugin-transform-runtime']
                            }
                        }
                    }
                ]
            },

        }))
        .pipe(gulpif(!release, sourcemaps.init({loadMaps: true})))
        .pipe(through.obj(function (file, enc, cb) {
            const isSourceMap = /\.map$/.test(file.path);
            if (!isSourceMap) this.push(file);
            cb();
        }))
        .pipe(gulpif(release, uglify()))
        .pipe(header(banner, {pkg: pkg}))
        .pipe(gulpif(!release, sourcemaps.write('.')))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
}

function serve() {
    browserSync.init({server:'./dist'});
    gulp.watch('./src/css/*.styl', gulp.series('css'));
    gulp.watch('./src/js/*.js', gulp.series('js'));
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
}

exports.js = js;
exports.css = css;
exports.serve = serve;

gulp.task('default', gulp.series(
    gulp.parallel(js, css, serve)
));

gulp.task('release', async function () {
    css(true);
    js(true);
});
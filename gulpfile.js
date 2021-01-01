var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', function () {
    return tsProject.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'output.js'
        }))
        .pipe(tsProject.dest('dist'));
});

gulp.task('scripts', function() {
    var tsResult = tsProject.src('lib/**/*.ts')
        .pipe(ts({
            declaration: true
        }));
 
    return merge([
        tsResult.dts.pipe(tsProject.dest('dist')),
        tsResult.js.pipe(tsProject.dest('dist-js'))
    ]);
});

gulp.task('libs', function() {
    return gulp.src('lib/*.ts')
        .pipe(sourcemaps.init()) 
        .pipe(tsProject())
        .pipe(sourcemaps.write()) 
        .pipe(tsProject.dest('lib'));
});
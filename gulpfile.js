const {src, dest, task} = require('gulp');
const autoprefixer      = require('gulp-autoprefixer');
const sass              = require('gulp-sass')(require('sass'));
const rename            = require('gulp-rename');
const sourcemaps        = require('gulp-sourcemaps');

task('build', () => {
	const s = './scss/**/*';
	const d = './dist/css';
	return src(s)
		.pipe(sourcemaps.init())
		.pipe(
			sass({
				outputStyle:    'expanded',
				sourceComments: true,
			}),
		)
		.pipe(
			autoprefixer({
				cascade: true,
				remove:  true,
			}),
		)
		.pipe(sourcemaps.write())
		.pipe(dest(d))
		.pipe(
			rename({
				suffix: '.min',
			}),
		)
		.pipe(
			sass({
				outputStyle: 'compressed',
			}),
		)
		.pipe(dest(d));
});
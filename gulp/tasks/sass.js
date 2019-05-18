module.exports = function (){
	$.gulp.task('sass', function() {
	return $.gulp.src('sourse/sass/main.scss')
	 
	.pipe($.gp.sass({
		includePaths: $.bourbon.includePaths
	}).on("error", $.gp.notify.onError()))
	//.pipe(gulpif(envDev, sourcemaps.write({includeContent: false, sourceRoot: '/public'})))
	.pipe($.gulpif(!$.envDev, $.gp.combineMq()))
	.pipe($.gp.rename({suffix: '.min', prefix : ''}))
	.pipe($.gp.autoprefixer(['last 10 versions']))
	.pipe($.cleanCSS())
	.pipe($.gulp.dest('public/css'))
	//.on('end', browserSync.stream());
	.pipe($.browserSync.stream());
}); 
  
}
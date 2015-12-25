var gulp = require('gulp');
var browserSync = require('browser-sync');



  gulp.task('watch', ['browserSync'], function(){
  gulp.watch('css/*.css', browserSync.reload);
  gulp.watch('*.html', browserSync.reload); 
  gulp.watch('*.js', browserSync.reload);
  });

  gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: '../gym_project/'
    },
  })
})
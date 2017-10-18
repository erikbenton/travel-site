var gulp          = require("gulp"),
    watch         = require("gulp-watch"),
    browserSync   = require("browser-sync").create();

//########################################################
//    WATCH TASK
// 
// Watches for any change in our HTML/CSS and updates
// the files
//    Uses Browser-Sync to host our webpage, reload HTML,
//     and autoinject our CSS when we save
//########################################################
gulp.task("watch", function(){

  // Initialize browser sync and turn off notifications
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  // Reloads the webpage when html changes
  watch("./app/index.html", function(){
    browserSync.reload();
  });

  // Injects CSS when we save any CSS file
  watch("./app/assets/styles/**/*.css", function(){
    gulp.start("cssInject");
  });

  watch("./app/assets/scripts/**/*.js", function(){
    gulp.start("scriptsRefresh");
  })

});

//########################################################
//    CSSINJECT TASK
// 
// Responsible for injecting our CSS into our page when
// When any changes are made to the files
//    Runs after piping our CSS thru STYLES task
//########################################################
gulp.task("cssInject", ['styles'], function(){

  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());

});

gulp.task("scriptsRefresh", ['scripts'], function(){

  browserSync.reload();

});
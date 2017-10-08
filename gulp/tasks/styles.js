var gulp          = require("gulp"),
		postcss       = require('gulp-postcss'),
		autoprefixer  = require('autoprefixer'),
    cssvars       = require('postcss-simple-vars'),
    nested        = require('postcss-nested'),
    cssImport     = require('postcss-import'),
    mixins 				= require('postcss-mixins');

//########################################################
//    STYLES TASK
// 
// Takes our "fake CSS" and pipes it into "real CSS"
//    Allows for writing nested CSS and creating modular
//    CSS files
//########################################################
gulp.task("styles", function(){
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, mixins, nested, cssvars, autoprefixer]))
    .on('error', function(errorInfo){
    	console.log(errorInfo.toString());
    	this.emit('end');
    })
    .pipe(gulp.dest("./app/temp/styles"));
});
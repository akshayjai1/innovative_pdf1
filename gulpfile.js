// https://goede.site/setting-up-gulp-4-for-automatic-sass-compilation-and-css-injection
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps");
var browserSync = require("browser-sync").create();

var paths = {
  styles: {
      // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
      src: "./styles/**/*.scss",
      // Compiled files will end up in whichever folder it's found in (partials are not compiled)
      dest: "./styles"
  }
};

function style() {
  return (
      gulp
          .src(paths.styles.src)
          // Initialize sourcemaps before compilation starts
          .pipe(sourcemaps.init())
          .pipe(sass())
          .on("error", sass.logError)
          // Use postcss with autoprefixer and compress the compiled file using cssnano
          .pipe(postcss([autoprefixer(), cssnano()]))
          // Now add/write the sourcemaps
          .pipe(sourcemaps.write())
          .pipe(gulp.dest(paths.styles.dest))
  );
}



function reload() {
  browserSync.reload();
}
// Add browsersync initialization at the start of the watch task
function watch() {
      // You can tell browserSync to use this directory and serve it as a mini-server
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch(paths.styles.src, style);
  // We should tell gulp which files to watch to trigger the reload
  // This can be html or whatever you're using to develop your website
  // Note -- you can obviously add the path to the Paths object
  gulp.watch("./index.html", reload);
}

exports.style = style;
exports.watch = watch;

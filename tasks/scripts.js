import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log,colors} from 'gulp-util';
import args from './util/args.js';

//cnpm i gulp gulp-if gulp-concat webpack webpack-stream vinyl-named gulp-livereload gulp-plumber gulp-rename gulp-uglify gulp-util yargs --save-dev 

gulp.task('scripts',() => {
	return gulp.src(['app/js/index.js'])
	 	.pipe(plumber({ //检查js语法 错误输出
	 		errorHandel:function() {

	 		}
	 	}))
	 	.pipe(named())
	 	// .pipe(gulpWebpack({
	 	// 	moudle: {
	 	// 		loaders:[{
	 	// 			test:/\.js$/,
	 	// 			loader:'babel'
	 	// 		}]
	 	// 	}
	 	// }),null,(err,stats) => {
	 	// 	log(`Finishd'${colors.cyan('scripts')}'`,stats.toString({
	 	// 		chunks: false
	 	// 	}))
         // })
         .pipe(gulpWebpack({
            module:{
              loaders:[{
                test:/\.js$/,
                loader:'babel'
              }]
            }
          }),null,(err,stats)=>{
            log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
              chunks:false
            }))
          })
	 	.pipe(gulp.dest('server/public/js')) //server 需要拿到最新的编译好的js进行编译
	 	.pipe(rename({ //再搞一个压缩的文件
	 		basename: 'cp',
	 		extname: '.min.js' //cp.min.js
	 	}))
	 	.pipe(uglify({
	 		compress: {properties: false},output: {'quote_keys': true}
	 	}))
	 	.pipe(gulp.dest('server/public/js'))
	 	.pipe(gulpif(args.watch,livereload())) //用gulpif判断是否更新 有更新用livereload
})


























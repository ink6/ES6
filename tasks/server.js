import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args.js';

gulp.task('serve',(cb) => {
	if(!args.watch) return cb();
	var server = liveserver.new(['--harmony','server/bin/www']); //harmony表示在当前命令行下创建脚本
	server.start();
	gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){ //监听改动通知服务器做了改动，以便做相应的处理
		server.notify.apply(server,[file]);
	})
	gulp.watch(['server/routes/**/*.js','server/app.js'],function() { //以下文件修改时需要重启服务（路由 接口发生变化，刷新浏览器没法更新 需要重启）
		server.start.bind(server)()
	})
})
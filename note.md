
express -e .  //express是启动命令 表示需要使用.esj模板引擎 .表示当前目录

搭建项目步骤
1. 建立 es6（mkdir ES6）
2. 创建三个文件夹 APP server tasks（脚本）
3. app 里面建立 css js views server建立views/error.js views/index.js 
4. server 执行express -e . (前提是装了node)
5. cnpm init 得到 package.json 等
6. touch .babelrc
7. touch gulpfile.babel.js
8. 手动编写utils/args.js
	`import yargs from 'yargs'; //处理命令行参数
	const args = yargs
	.options('production'，{
		boolean: true,
		default: false, //默认开发环境
		describe: 'min all scripts'
	}) //gulp -production  production即为选项部分 根据命令行是否有 production参数来判定是线上还是开发环境
	//是否需要自动编译 watch参数控制
	.option('watch',{
		boolean: true,
		default: false,
		describe: 'watch all files'
	})
	.option('verbose',{ //详细的命令行输出
		boolean: true,
		default: false,
		describe: 'log'
	})
	.option('sourcemaps',{ //内容映射boolean: true,
		describe: 'force the creation of sourcemaps'
	})
	.option('port',{ //服务器 启动 端口
		string: true,
		default: 8080,
		describe: 'server port'
	})
	.argv //输出的命令行以字符串进行解析`
9.  touch tasks/scripts.js
10. 编写scripts.js pages.js css.js (gulpfile.js编写)
`gulp.task('scripts',() => {
	return gulp.src(['app/js/index.js'])
	 	.pipe(plumber({ //检查js语法 错误输出
	 		errorHandel:function() {
	 		}
	 	}))
	 	.pipe(named())
	 	.pipe(gulpWebpack({
	 		moudle: {
	 			loaders:[{
	 				test:/\.js$/,
	 				loader:'babel'
	 			}]
	 		}
	 	}),null,(err,stats) => {
	 		log(`Finishd'${colors.cyan('scripts')}'`,stats.toString({
	 			chunks: false
	 		}))
	 	})
	 	.pipe(gulp.deat('server/public/js')) //server 需要拿到最新的编译好的js进行编译
	 	.pipe(rename({ //再搞一个压缩的文件
	 		basename: 'cp',
	 		extname: '.min.js' //cp.min.js
	 	}))
	 	.pipe(uglify({
	 		compress: {properties: false},output: {'quote_keys': true}
	 	}))
	 	.pipe(gulp.dest('server/public/js'))
	 	.pipe(gulpif(args.watch,livereload())) //用gulpif判断是否更新 有更新用livereload
})`
11. 编写 server.js 
12. 编写 browser.js 
cnpm i del gulp-util gulp-live-server --save-dev

ES6笔记
1. let和const
  a.let声明的变量只在自己的块作用域里面有效
  b.let不可重复声明
  c.const声明的时候必须赋值
  d.const 声明的常量不可修改 但是如果是对象的情况下可以修改（修改的是属性值）（引用类型，修改的是指针）

2.解构赋值

3.正则扩展

4.字符串扩展

5.数值扩展

6.数组扩展

7.函数扩展

8.对象扩展

9.Symbol

10.set - map

11.Proxy 和Reflect

12.类和对象

13.Promise

14.Iterator

15.Genertor

16.Decorators

17.模块化


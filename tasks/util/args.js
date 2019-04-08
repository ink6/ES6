import yargs from 'yargs'; //处理命令行参数
const args = yargs
	.options('production',{
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

	.argv //输出的命令行以字符串进行解析

    export default args;
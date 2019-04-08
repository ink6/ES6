// 修饰器是一个函数用来修饰类的行为
{
    let readonly = function (target,name,descriptor) {
        descriptor.writable = false; //writable=false 不允许修改
        return descriptor
    }
    class Test {
        @readonly
        time () {
            return '2017-03-11'
        }
    }
    let t = new Test();
    console.log(t.time())
    // t.time = function () {
    //     return '6666-66-66' // Cannot assign to read only property 'time' of object '#<Test>'
    // }
}


{
    let typename = function (target,name,descriptor) {
        target.myname = 'hello'
    }

    @typename 
    class Test {

    }
    console.log(Test.myname);
    //第三方类修饰库库 core-decorators;
    console.log('------------------------')
}

{
    //埋点 - 日志
    let log = (type) => {
        return function (target,name,descriptor) {
            console.log(descriptor)
            let src_method = descriptor.value;
            descriptor.value = (...arg) => {
                src_method.apply(target,arg);
                console.info(`埋点ajax函数${type}`);
            }
        }
    }
    class AD {
        @log('show')
        show () {
            console.log('ad is show');
        }
        @log('click')
        click () {
            console.log('ad is click');
        }
    }
    let ad = new AD();
    ad.show();
    // ad.click();
}
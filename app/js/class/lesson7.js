{
    function test(x,y = 'world',c) { //视频说 有默认值的变量之后不可以有没有默认值的变量 我这样写了 也没报错
        console.log('默认值',x,y,c)
    }
    test('hello')
    test('hello','lili')
    test('hello','lili','cc')
}

{
    let x = 'test'; 
    function test (x,y=x) { // 参数是 调用的时候传的参数
        console.log('作用域',x,y)
    }
    test('kill')
    test()
}

{
    let x = 'test'; 
    function test (c,y=x) { // 此时 调用的时候没有传x 则会自动选择外层的x
        console.log('作用域',c,y) 
    }
    test('kill') //作用域 kill test
}  

{
    function test (...arg) { //将一系列参数转化成数组,用了reset参数 后面不可以有别的参数 
        for(let v of arg) {
            console.log('reset',v)
        }
    }
    test(1,2,3,4,'a')
}

{ //拓展运算符
    console.log(...[1,2,3])
}

{//箭头函数 函数名+函数参数+函数返回值
    let arrow = v => v*2;
    console.log(arrow(3))

    let f = () => 5;
    console.log(f())
}

{   
    //尾调用 （尾调用是指函数作为另一个函数的最后一条语句被调用） - 函数式编程 - 提高性能
    //我们知道，函数调用会在内存形成一个‘调用记录’，又称“调用帧”（call frame） ，保存调用位置和内部变量等信息。如果在函数A的内部调用函数B，那么在A的调用帧上方，还会形成一个B的调用帧。等到B运行结束，将结果返回到A，B的调用帧才会消失。如果函数B内部内部还要调用函数C那么还有一个C的调用帧，以此类推。所有的调用帧，就行成了一个“调用栈”（call stack）。

    // 1.函数不是一个闭包
    // 2.在函数内部，尾调用是最后一条语句
    // 3.尾调用的结果作为函数值返回
    function tail(x) {
        console.log('tail',x);
    }
    function fx(x) {
        return tail(x);
    }
    fx(123)

    //以下情况是不会优化的
    function doA(){
    //没有作为函数值返回，不会优化
        doB();
    }
    function doA(){
        var res = 1;
        //func调用了另一个函数作用域内变量，func是闭包，不会优化
        func = () => res;
        return func();
    }
    function doA(){
        //在返回结果前+1，不会优化
        return 1 + doB();
    }
    function doA(){
    //调用不在尾部，无法优化
        let res = doB();
        return res;
    }
    //递归函数是最主要应用的场景。如果递归函数的计算量足够大，尾调用优化可以大大提升程序性能 

    //函数调用自身，称为递归。如果尾调用自身，就称为尾递归。递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生栈溢出错误。但是对于尾递归来说，由于只存在一个调用帧，所以永远不会发生栈溢出错误。
    
    function factorial(n){
        if(n === 1){
            return 1;
        }
        return n * factorial(n - 1);
    }
    console.log(factorial(3))
    // n * (n-1) * (n-2) * (n-3) * (n-4) * (n-5)* ........ * 3 *2 *1
    //上面代码是一个阶乘函数，计算n的阶乘，最多需要保存n个调用数据，复杂度为O（n），如果改写成尾调用，只保留一个调用记录，复杂度为O（1）

    function factor(n,total){
        if( n === 1){
            return total;
        }
        return factor(n - 1, n * total);
    }
}
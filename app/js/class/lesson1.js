
function test () {
    for(let i = 1; i< 3; i++) { 
        console.log(i); ////let声明的变量只在自己的块作用域里面有效
    }
    // console.log(i) //报错 es6严格模式'use strict' es5需要手动书写 严格模式 变量未声明不可以使用 所以会报错
    // let a = 1;
    // let a = 2; //let不可重复声明
}
test();

function last () {
    const PI = 3.1415926; 
    // const PI ; 
    // PI =3.1415926; 
    //const声明的时候必须赋值
    // PI = 8; //"PI" is read-only
    const obj = {
        a: 1
    }
    obj.b = 3;
    console.log(PI,obj)
    //const 声明的常量不可修改 但是如果是对象的情况下可以修改属性（引用类型，修改的是指针）
}

last();
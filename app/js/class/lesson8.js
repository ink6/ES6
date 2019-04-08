{   //简洁表示法
    let o = 1;
    let k = 2;
    let es5 = {
        o:o,
        k:k
    };
    let es6 = { //es6中 key和value相等的时候可以简写
        o,k
    }
    console.log(es5,es6)
    let es5_method = {
        hello: function () {
            console.log('hello')
        }
    }
    let es6_method = {
        hello () {
            console.log('hello')
        }
    }
    console.log(es5_method.hello(),es6_method.hello())
}

{   //属性表达式
    let a = 'b';
    let es5_obj = {
        a: 'c',
        // b: 'c'
    }
    let es6_obj = {
        [a]: 'c' //变量
    }
    console.log(es5_obj,es6_obj)
}

{
    //新增api
    console.log('字符串相等',Object.is('abc','abc'),'abc' === 'abc')
    console.log('数组相等',Object.is([],[]),[] === []) //数组是引用类型 数组是引用不同的地址 所以是false

    console.log('拷贝',Object.assign({a:'a'},{b:'b'})) 
    //Object.assign  浅拷贝 1.拷贝对象自身的属性，如果这个对象有继承 则不会拷贝，2.不可拷贝不可枚举的属性

    // entries
    let test = {k: 123,o: 456};
    for(let [key,value] of Object.entries(test)) {
        console.log([key,value])
    }
}

{
    //扩展运算符
    // let {a,b,...c} = {a:'test',b:'kill',c:'ddd',d:'jack'};
    // console.log(c) //es7提案 现在不支持
}
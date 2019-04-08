{
    // Symbol Symbol这个数据类型声明的值是唯一无二的值

    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1 === a2)    

    let a3 = Symbol.for('a3'); // a3是key值 Symbol.for('a3')这样声明  会先找到有没有key为a3的 如果没有， 则相当于Symbol()
    let a4 = Symbol.for('a3');
    console.log(a3 === a4); //true
}

{
    let a1 = Symbol.for('abc');
    console.log(a1)
    let obj = {
        [a1]:'123',
        'abc': 345,
        'c': 456
    };
    console.log(obj)
    // let obj2 = Object.assign({},obj,{
    //     'abc':'替换'
    // })
    // console.log(obj2)

    //for ... in let ... of循环不到Symbol
    for(let [key,value] of Object.entries(obj)) {
        console.log('let of',key,value)
    }
    // console.log(Object.getOwnPropertySymbols(obj)) //只取symbol值
    Object.getOwnPropertySymbols(obj).forEach(function (item){
        console.log(obj[item])
    })

    Reflect.ownKeys(obj).forEach(function (item) { //通过Reflect 拿到Symbol变量作为key值的一个属性和非Symbol的值
        console.log('ownkeys',item,obj[item])
    })
}
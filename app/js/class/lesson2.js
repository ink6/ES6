{
    let a,b,rest;
    [a,b] = [1,2]
    console.log(a,b)
}
{
    let a,b,rest;
    [a,b,...rest] = [1,2,3,4,5,6];
    console.log(a,b,rest)
}

{
    let a,b,c,rest;
    // [a,b,c] = [1,2] //解构赋值如果没有在结构上完全配对，未配对的值为undefined
    [a,b,c=3] = [1,2]
    console.log(a,b,c)
}
//解构赋值应用于 变量交换
{
    let a = 1,b = 2;
    [a,b] = [b,a];
    console.log(a,b)
}

{
    function f () {
        return [1,2]
    }
    let a,b;
    [a,b] = f();
}
{
    function f() {
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,b] = f();
    console.log(a,b); //应用场景 - 当前返回多个值的情况下，我可以选择性的接受某两个变量，忽略某些返回值 
}

{
    function f() {
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,...b] = f();
    console.log(a,b); //应用场景 - 不关心后面的数组长度是多少 只在乎第一个参数 比如后台返回数组格式的数据 我只取数组的第一个值
}
//以上是数组解构赋值
//以下是对象解构赋值
console.log('-------------');

{
    let a,b;
    ({a,b} = {a:'aaa',b:'bbb'})
    console.log(a,b)
}

{
    let {a,b} = {a:'aaa',b:'bbb'};
    console.log(a,b) //按照k:value匹配 key要一一对应
}

{
    let {a=10,b=5} = {a:3};
    console.log(a,b);
}

{
    let metaData = {
        title:'abc',
        test:[{
            title: 'test',
            desc: 'description'
        }]
    }
    let {title: esTitle,test:[{title: cnTitle}]} = metaData;
    console.log(esTitle,cnTitle);
}
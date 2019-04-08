//Set()
{
    let list = new Set();
    list.add(5); //向Set添加元素
    list.add(7);
    console.log(list)
    console.log(list.size);//长度
    console.log('初始化的时候赋值',new Set([{a:1,b:2},2,3,4]));
    console.log('初始化的时候赋值',new WeakSet([{a:1,b:2}]));

}

{
    let arr = [1,2,3,4,5];
    let list = new Set(arr);
    console.log(list)
}

{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1); //不可重复添加 不会生效 也不会报错 
    console.log(list)
    //利用set的不可重复特性  可以给数组去重  --- important
    //应用数组去重
    let arr = [1,2,3,4,1,'2',3];
    let list2 = new Set(arr); //转化的时候不会做数据类型的转化 例如上方 字符型的 '2'
    console.log(list2)
}

{
    let arr = ['add','delete','clear','has'];
    let list = new Set(arr);
    console.log('has',list.has('add')) //包含
    console.log('delete',list.delete('add'),list) //删除
    list.clear()
    console.log('clear',list) //包含
}

{
    let arr = ['add','delete','clear','has'];
    let list = new Set(arr);

    for(let key of list.keys()){ //key 和value 的值 都是 list的值
        console.log(key)
    }
    for(let key of list.values()){
        console.log(key)
    }
    for(let key of list){
        console.log(key)
    }
    for(let key of list.entries()){
        console.log(key)
    }

    list.forEach(function(item) {
        console.log(item)
    })
}

//weakSet
{
    //1. WeakSet和set支持的数据类型不一样 - WeakSet的数值只能是对象 不能是数值 boolean 等 而set boolean number obj 都可以
    //2.WeakSet 对象中存储的对象值都是被弱引用的, 如果没有其他的变量或属性引用这个对象值, 则这个对象值会被当成垃圾回收掉. 正因为这样, WeakSet 对象是无法被枚举的, 没有办法拿到它包含的所有元素.
    let weakList = new WeakSet(); 
    let arg = {a:1,b:2};
    weakList.add(arg);
    // weakList.add(1);
    console.log(weakList)
    // console.log('初始化的时候赋值',new WeakSet([{a:1,b:2}]));
}


//Map
{
    let map = new Map();
    let arr = ['123'];
    map.set(arr,'456')
    console.log('map',map,map.get(arr));
}

{
    let map = new Map([['a',123],['b',2456]]);
    console.log('map args',map);
    console.log('map size',map.size);
    console.log('map delete',map.delete('a'),map);
    console.log('map clear',map.clear(),map);
}

{
    let weakmap = new WeakMap();
    let o = {};
    weakmap.set(o,123);
    console.log(weakmap.get(o))
}



{   // MAP 与 Array对比
    //数据结构横向对比 增 删 改 查
    let map = new Map();
    let array = [];
    //增
    map.set('num',1);
    array.push({'num': 1});
    console.info('增 - map - array',map,array);

    //改
    map.set('num',2);
    array.forEach(item => item.num?item.num = 2: '');
    console.info('改 - map - array',map,array);

    //查
    let map_exist = map.has('num');
    let array_exist = array.find(item => item.num)
    console.info('查 map - array',map_exist,array_exist);

    //删
    map.delete('num');
    let index = array.findIndex(item => item.num)
    array.splice(index,1)
    console.info('删 - map - array - empty',map,array);
}

{
    // Set 与 Array 对比
    let set = new Set();
    let array = [];
    //增
    let item = {'num':1}
    set.add(item);
    array.push({'num': 1});
    console.info('增 - set - array',set,array);

    //查
    let set_exist = set.has(item)
    let array_exist = array.find(item => item.num)
    console.info('查 set - array',set_exist,array_exist);

    //改
    set.forEach(item => item.num?item.num = 2: '')
    array.forEach(item => item.num?item.num = 2: '');
    console.info('改 - set - array',set,array);
    
    //删
    set.delete(item);
    let index = array.findIndex(item => item.num)
    array.splice(index,1)
    console.info('删 - set - array - empty',set,array);
}


{
    //map set object 对比
    let item = {t:1};
    let map = new Map();
    let set = new Set();
    let obj = {};

    //增
    map.set('t',1);
    set.add(item);
    obj['t'] = 1;
    console.log('map-set-obj',map,set,obj);

    //查
    console.info({
        map_exist: map.has('t'),
        set_exist: set.has(item),
        obj_exist: 't' in obj
    })

    //改
    map.set('t',2);
    item.t = 2;
    obj['t'] = 2;
    console.log('map-set-obj-modify',map,set,obj)

    //删
    map.delete('t')
    set.delete(item);
    delete obj['t'];
    console.log('map-set-obj-delete',map,set,obj)

}
//开发过程中能优先使用map不使用数组
//出于对数据结构的唯一性考虑 使用set 放弃使用obj和 数组


{
    
}
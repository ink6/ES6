{  //转化为数组  不传参数则返回为空数组
    let arr = Array.of(1,2,3,4,5);
    console.log('arr=',arr);
    let empty = Array.of(); 
    console.log('empty=',empty);
}

{ //将伪数组和集合 转化为真正的数组
    let p = document.querySelectorAll('p')
    console.log(p);
    let pArr = Array.from(p);   //类似Array.from的方法 还有 原生的 Array.prototype.foreach.call.p 意思是 p这个类数组 借调 原生array的foreach方法
    console.log(pArr)
    pArr.forEach((item) => {
        console.log(item.textContent) //textContent原生js 获取dom节点内容的方法
    })

    //类似map映射的用法 第一个参数是个数组 第二个参数是个函数
    console.log(Array.from([1,2,3],function(item){return item*2}))
}

{
    // arr.fill（替换的数值，替换开始的索引，替换的长度） 填充数组
    console.log('fill-7',[1,'a',undefined].fill(7)) //用7 填充数组
    console.log('fill,pos',['a','b','c'].fill(7,1,3)) //从索引为1 长度为3的地方 用7替换
}

{
    for(let index of ['1','c','ks'].keys()) { //数组下标的集合
        console.log('keys',index)
    }
    for(let value of ['1','c','ks'].values()) { //数组值的集合
        console.log('values',value)
    }
    for(let [index,value] of ['1','c','ks'].entries()) { 
        console.log('entries',index ,'-',value)
    }
}

{ //在当前数组的内部 将指定数组的成员 替换到其他位置上 arr.copyWithin(从哪个索引开始替换，开始读取数据的位置，开始截止的位置)
    console.log([1,2,3,4,5].copyWithin(0,3,4)) //从索引为0 的位置 从 索引为3的时候开始 到索引为4的半闭半开结束[3,4)
    console.log([2,2223,3,5].copyWithin(3,1,2)) //2,2223,3,2223
}

{
    console.log([1,2,3,4,5,6].find(function(item){ return item >3}));//找到第一个符合的就返回值
    console.log([1,2,3,4,5,6].findIndex(function(item){ return item >3}))//找到第一个符合的就返回值的索引（下标）
} 

{ //数组包括不包括值
    console.log('number',[1,2,NaN].includes(1))
    console.log('number',[1,2,NaN].includes(NaN))
}
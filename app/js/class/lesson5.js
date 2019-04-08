{
    console.log(0b111110111); //ES6二进制以0b开通 不区分大小写
    console.log(0B111110111);
    console.log(0o767); //ES6 八进制以0o开通 
}

{
    console.log('15',Number.isFinite(15)); //Number.isFinite 判断一个数是否有尽
    console.log('NaN',Number.isFinite(NaN)); 
    console.log('1/0',Number.isFinite('true'/0)); 
    
    console.log('NaN',Number.isNaN(NaN)); 
    console.log('0',Number.isNaN(0)); 
}
{
    console.log('12',Number.isInteger(12)) //是否是整数 判断小数部分不为0 的情况下是true  
    console.log('12.0',Number.isInteger(12.0)) 
    console.log('12.1',Number.isInteger(12.1)) 
    console.log('字符型12',Number.isInteger('12')) 
    console.log('字符型12.1',Number.isInteger('12.1')) 
    //Number.isInteger 接受的参数必须是number
}

{ 
    //判断一个数在不在-2 的53次方和 2 的53次方之间 不包括两个端点 js在这个区间之外的 是不准的
    console.log(Number.MAX_SAFE_INTEGER); //数最大的上线
    console.log(Number.MIN_SAFE_INTEGER); //数最大的下线

    console.log('10',Number.isSafeInteger(10)) //数在不在js的安全范围之内
    console.log('90071992547409912',Number.isSafeInteger(90071992547409912)) 
    console.log('a',Number.isSafeInteger('a')) //连数都不是
}

{
    // 取数的整数部分 
    console.log(Math.trunc(4.1));
    console.log(Math.trunc(4.9));
}

{ //判断数是正 负 还是 0  -1表示负数 1表示正数
    console.log(Math.sign(1))
    console.log(Math.sign(0))
    console.log(Math.sign(-5))
    console.log(Math.sign('50')) //会用number 进行转换 
    console.log(Math.sign('sb'))
}

{ //立方根的计算
    console.log(Math.cbrt(-1))
    console.log(Math.cbrt(8)) //8的立方根
}
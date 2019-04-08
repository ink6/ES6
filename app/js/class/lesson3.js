{ 
    let regex = new RegExp('xyz','i');//ES5 两个参数 两个字符串
    let regex1 = new RegExp(/xyz/i); //一个参数 一个正则
    console.log(regex.test('xyz123'),regex1.test('xyz123'));
    //test() 方法检索字符串中的指定值。返回值是 true 或 false。
    let regex2 = new RegExp(/xyz/ig,'i'); //es6中允许第二个参数代替第一个参数中的修饰符
    console.log(regex2.flags) //该方法返回当前正则表达式显示设置的修饰符 
}

{ //es6 增加 y 修饰符
    let s = 'bbb_bb_b'; //exec() 方法检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。
    let a1 = /b+/g;
    let a2 = /b+/y;
    console.log('one',a1.exec(s),a2.exec(s)); //one ["bbb", index: 0, input: "bbb_bb_b", groups: undefined] ["bbb", index: 0, input: "bbb_bb_b", groups: undefined]
    console.log('two',a1.exec(s),a2.exec(s)); //two ["bb", index: 4, input: "bbb_bb_b", groups: undefined] null
    //都是全局匹配 第一个匹配 g和y都匹配到了 bbb 
    //当第二次紧跟着第一次匹配成功之后 g修饰符只要后面有可匹配成功的 即可 而y修饰符必须是开始匹配的第一个字符就必须匹配成功 否则返回null
    console.log(a1.sticky,a2.sticky); //检测是否带y修饰符属性 表示是否开启了粘连模式
}

{ // u  unicode 修饰符 ES6中添加了u修饰符，来处理大于\uFFFF的unicode字符。
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));
    console.log('u-1',/^\uD83D/u.test('\uD83D\uDC2A'));
    //\uD83D\uDC2A 是四个字节的UTF-16编码，代表一个字符，但是ES5不支持四个字节的UTF-16编码，所以第一个为true 但是ES6增加了u修饰符，ES6就会识别他为一个字符，所以第二行代码为false

    console.log(/\u{61}/.test('a')); //a的Unicode编码为61
    console.log(/\u{61}/u.test('a')); //支持编码 转义了 即可匹配成功

    // 点（.）字符不能识别码点大于0xFFFF(小于两个字节长度的不可以匹配)的Unicode字符，必须加上u修饰符。
    console.log(`\u{20BB7}`); //𠮷 两个字节
    let s = '𠮷';
    console.log('大于0xFFFF的Unicode字符',/^.$/.test(s)); //.匹配所有字符的说法是局限的
    console.log('使用u字符',/^.$/u.test(s)); //.匹配所有字符在有u修饰符的情况下
    
    // 使用u修饰符后，所有量词都会正确识别大于码点大于0xFFFF的Unicode字符。
    console.log('量词',/a{2}/.test('aa')); // true
    console.log('量词',/a{2}/u.test('aa')); // true
    console.log('量词',/𠮷{2}/.text('𠮷𠮷'));
    console.log('量词',/𠮷{2}/u.text('𠮷𠮷'));
}

{
    // #正则表达式中，点（.）是一个特殊字符，代表任意的单个字符，但是行终止符（line terminator character）除外
    // U+000A 换行符（\n）
    // U+000D 回车符（\r）
    // U+2028 行分隔符（line separator）
    // U+2029 段分隔符（paragraph separator）
    // 只是一个提案目前还不支持
    // let reg=/test.go/s;
    // console.log(reg.test('test\ngo'));
    // console.log(reg.test('test\ngo'));
    console.log('s变通方法',/foo.bar/.test('foo\nbar'));
    console.log('s变通方法',/foo[^]bar/.test('foo\nbar'));
}

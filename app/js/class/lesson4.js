{
    console.log('a',`\u0061`);
    console.log('s',`\u20BB7`); //转化为二进制比0xFFFF长，无法正常显示
    console.log('s',`\u{20BB7}`); //𠮷
}

{
    let s = '𠮷'; //大于0xFFFF
    console.log('length',s.length)

    //es5 对unicode处理不到位
    console.log('0',s.charAt(0));
    console.log('1',s.charAt(1));
    console.log('at0',s.charCodeAt(0));
    console.log('at1',s.charCodeAt(1));
    //es6中的codePointAt方法 对unicode进行了处理  给字符取unicode码
    //如下 对四个字节的𠮷进行处理 那么codePointAt(0)取到的是20BB7 而codePointAt(1)取到的是后两个字节的 和charCodeAt(1)相同
    let s1 = '𠮷a';
    console.log('length',s1.length);
    console.log('code0',s1.codePointAt(0)); //10进制
    console.log('code0',s1.codePointAt(0).toString(16));//20BB7 16进制
    console.log('code1',s1.codePointAt(1)); //57271
    console.log('code1',s1.codePointAt(2)); // 97 - a
}

{
    //根据unicode码取字符
    console.log(String.fromCharCode('0x20bb7'));
    console.log(String.fromCodePoint('0x20bb7')); //可以处理大于两个字节的，es5不可以
}

{
    let str = '\u{20bb7}abc';
    for(let i = 0;i < str.length; i++ ) {
        console.log('es5',str[i]); //无法正常循环 - 大于两个字节的字符都会展示为乱码
    }
    for(let code of str) { //es6 
        console.log('es5',code);
    }
}  

{
    let str = 'string';
    console.log('includes',str.includes('r'));
    console.log('start',str.startsWith('str'));
    console.log('end',str.endsWith('ng'));
} 

{ //将字符指定重复的次数 复制字符串功能
    let str = 'abc';
    console.log(str.repeat(2))
}

{   //模板字符串
    let name = "lili";
    let age = 13;
    console.log(`my name is ${name},and i am ${age} years old`);
}

{
    console.log('1'.padStart(2,'0')); //补白作用 - 在字符前进行补充（长度，补充的参数） 
    //补充 日期前的0 2019-1-1   - 2019-01-01
    console.log('1'.padEnd(2,'0')); //补白作用 - 在字符前进行补充（长度，补充的参数） 
}

{   //标签模板
    //1.在过滤html字符串的时候（防止xss攻击的时候）
    //2.多语言转化的时候
    //3. 拼接字符串的时候
    let user = {
        name: 'lili',
        info: 'sb'
    };
    console.log(abc`i am ${user.name},${user.info}`);
    function abc (s,v1,v2) {
        console.log(s,v1,v2); // ["i am ", ",", "", raw: Array(3)] "lili" "sb"
        return s+v1+v2;
    }
}
{
    function SaferHTML(templateData) {
        let s = templateData[0];
        for(let i = 1 ; i < arguments.length ; i++){
            let arg = String(arguments[i]);
            s += arg.replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">");
            s += templateData[i];
        }
        return s;
    }
         
    var sender = '<script>alert(111)</script>';
    var message = SaferHTML`<p>这里面可能有恶意代码，比如${sender}</p>`;
}

{
    console.log(String.raw`Hi\n${1+2}`); // raw对\ 进行转义 可执行换行符 - 使用频率不高 -为啥要转义？？？？
    console.log(`Hi\n${1+2}`);
}
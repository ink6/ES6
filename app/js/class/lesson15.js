
// Generator 异步编程的一种解决方案

{
    // generator基本定义
    let tell = function* () {
        yield 'a';
        yield 'b';
        return 'c'; 
    };
    let k = tell();
    console.log(k);
    console.log(k.next())
    console.log(k.next())
    console.log(k.next())
    console.log(k.next())

}

{
    let obj = {};
    obj[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    }
    for(let value of obj) {
        console.log('value',value)
    }
}

{
    let state = function* () {
        while(1) {
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }
    let status = state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}

// {
//     let state = async function () { //async 是yield的語法糖 需要插件可以實現
//         while(1) {
//             await 'A';
//             await 'B';
//             await 'C';
//         }
//     }
//     let status = state();
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
// }


{
    let draw = function (count) {
        //具体抽奖逻辑
        console.info(`剩余${count}次`);
    }
    let residue = function*(count) {
        while(count>0) {
            count--;
            yield draw(count);
        }
    }
    let star = residue(5);
    let btn = document.createElement('button');
    btn.id = 'start';
    btn.textContent = '抽奖';
    document.body.appendChild(btn);
    document.getElementById('start').addEventListener('click',function() {
        star.next();
    },false);
}

{
    // 服务端数据状态定期会变化 前端可以通过websocket 和常轮询（计时器） 去获取 websocket浏览器兼容性不好

    //常轮询
    let ajax = function * (){
        yield new Promise(function(resolve,reject) {
            setTimeout(function () {
                resolve({code:0})
            },200)
        })   
    }
    let pull  = function () {
        let generator = ajax();
        let step = generator.next();
        console.log(step)
        step.value.then(function(d) {
            if(d.code != 0 ) {
                setTimeout(function() {
                    console.info('wait');
                    pull();
                },1000);
            }else {
                console.info(d);
            }
        })
    }
    pull();
}


// {
//     const p1 = new Promise(function(resolve,reject) {
//         setTimeout(() => {
//             reject(new Error('file22'))
//         },3000)
//     })
//     const p2 = new Promise(function(resolve,reject) {
//         setTimeout(() => {
//             reject(p1)
//         },1000)
//     })
//     p2.then(result => console.log(result))
//     .catch(error => console.log(error))
// }


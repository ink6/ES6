//Promise
{
    //基本定义
    let ajax = function (callback) {
        console.log('执行')
        setTimeout(function () {
            callback && callback.call()
        },1000)
    };
    ajax(function () {
        console.log('timeout1')
    })
}

{
    let ajax = function () {
        console.log('执行2');
        return new Promise(function (resolve,reject) {
            setTimeout(function() {
                resolve();
            },1000)
        })
    }
    ajax().then(function () { //then里面两个函数 一个resolve 一个reject
        console.log('promise','timeout2')
    })
}

{
    let ajax = function () {
        console.log('执行3');
        return new Promise(function (resolve,reject) {
            setTimeout(function() {
                resolve();
            },1000)
        })
    }
    ajax().then(function () {
        return new Promise(function(resolve,reject) {
            setTimeout(function() {
                resolve();
            },2000)
        })
    }).then(function () {
        console.log('timeout3')
    })
}

{
    let ajax = function (num) {
        console.log('执行4');
        return new Promise(function(resolve,reject) {
            if(num>5) {
                resolve()
            }else {
                throw new Error('出错了');
            }
        })
    }
    ajax(6).then(function () {
        console.log('log',6)
    }).catch(function(error) {
        console.log('Error',error)
    })
    ajax(3).then(function () {
        console.log('log',3)
    }).catch(function(error) { //捕获catch
        console.log('Error',error)
    })
}

{
    //promise 高级用法
    // 所有图片加载完再添加到页面
    function loadImg (src) {
        return new Promise ((resolve,reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                setTimeout(function() {
                    resolve(img);
                },2000)
            }
            img.onerror = function (err) {
                reject(err);
            }
        })
    }
    function showImgs(imgs){
        imgs.forEach(img => {
            document.body.appendChild(img);
        });
    }

    Promise.all([
        loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
        loadImg('http://i4.buimg.com/567751/2b07ee25b88930ba.png'),
        loadImg('http://i4.buimg.com/567751/5eb8190d6b2a1c9c.png')
        
       
    ]).then(showImgs)

}

{
    //谁先加载完就显示谁
    function loadImg (src) {
        return new Promise ((resolve,reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                setTimeout(function() {
                    resolve(img);
                },2000)
            }
            img.onerror = function (err) {
                reject(err);
            }
        })
    }
    function showImgs(img){
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }

    Promise.race([ //当其中第一个展示后 不再再做操作
        loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
        loadImg('http://i4.buimg.com/567751/2b07ee25b88930ba.png'),
        loadImg('http://i4.buimg.com/567751/5eb8190d6b2a1c9c.png')
    ]).then(showImgs)
}
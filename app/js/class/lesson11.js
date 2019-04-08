import { Agent } from "http";

// Proxy 和 Reflect
// Proxy 代理的意思（ 代理商  供应商） 连接了用户和对象
// Reflect 反射 反射的是object
{
    let obj = { //供应商 - 原始对象 - 存储初始的数据
        time: '2017-06-06',
        name: 'net',
        _r: 123,
        ab_cd: 456
    }

    let monitor = new Proxy(obj,{
        //拦截对象属性的读取
        get(target,key) { // 读
            return target[key].replace('2017','2018')
        },
        //拦截对象设置属性
        set(target,key,value) { //写
            if(key == 'name') {
                return target[key] = value;
            }else {
                return target[key]
            }
        },
        //拦截 key in object 操作判断当前对象中是不是含有某个属性
        has(target,key) {
            if(key === "name") {
                return target[key]
            }else {
                return false;
            }
        },
        //拦截delete
        deleteProperty(target,key) {
            if(key.indexOf('_')> -1) {
                delete target[key];
                return true;
            }else {
                return target[key];
            }
        },
        //拦截 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
        ownKeys(target) {
            return Object.keys(target).filter(item => item != 'time')
        }
    })
    console.log('get',monitor,monitor.time,monitor.name)
    monitor.time = "2020"
    console.log('set',monitor.time)
    monitor.name = "computer"
    console.log('set',monitor,monitor.name)

    console.log('has','name' in monitor,'time' in monitor)

    // delete monitor.time;
    // console.log('delete',monitor);
    // delete monitor.ab_cd;
    // console.log('delete',monitor);

    console.log('ownkeys',Object.keys(monitor));
}

{
    let obj = { //Reflect
        time: '2017-06-06',
        name: 'net',
        _r: 123
    }

    console.log('Reflect get --',Reflect.get(obj,'time'))
    Reflect.set(obj,'name','me')
    console.log(obj)
    console.log(Reflect.has(obj,'_r'))
}

{
    function validator(target,validator) {
        return new Proxy(target,{
            _validator: validator,
            set (target, key, value,proxy) {
                if(target.hasOwnProperty(key)){
                    let va = this._validator[key];
                    if(!!va(value)) {
                        return Reflect.set(target,key,value,proxy);
                    }else {
                        throw Error(`不能设置${key}到${value}`);
                    }
                }else {
                    throw Error(`${key}是不存的`);
                }
            }
        })
    }

    const personValidators = {
        name(val) {
            return typeof val === 'string';
        },
        age(val) {
            return typeof val === 'number' && val > 18;
        },
        // mobile(val) {

        // }
    };
    class Person {
        constructor(name,age) {
            this.name = name;
            this.age = age;
            return validator(this,personValidators)
        }
    }

    const person = new Person('lilei',30);
    console.log(person);
    person.name = 48;
    // person.name = 'hanmeimei';
    console.log(person);

}
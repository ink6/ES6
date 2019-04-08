//Iterator 遍历器 接口 操作数据（arr obj set map） 用相同的接口来读取不同的数据结构
//当需要对一个对象进行迭代时（比如开始用于一个for...of循环中），它的@@iterator方法都会在不传参情况下被调用，返回的迭代器用于获取要迭代的值
{
    let arr = ['hello','world'];
    let map = arr[Symbol.iterator]();
    console.log(map)
    console.log(map.next()) //{value: "hello", done: false}  done表示循环是否有下一步
    console.log(map.next())
    console.log(map.next())
}
// 一些内置类型拥有默认的迭代器行为，其他类型（如 Object）则没有。下表中的内置类型拥有默认的@@iterator方法：
// Array.prototype[@@iterator]()
// TypedArray.prototype[@@iterator]()
// String.prototype[@@iterator]()
// Map.prototype[@@iterator]()
// Set.prototype[@@iterator]()
{

    let obj = {
        start:[1,3,2],
        end: [7,9,8],
        [Symbol.iterator]() {
            let self = this;
            let index = 0;
            let arr = self.start.concat(self.end);
            console.log(self);
            console.log(arr);
            let len = arr.length;
            return {
                next() {
                    if(index < len) {
                        return {
                            value: arr[index++],
                            done: false
                        }
                    }else {
                        return {
                            value: arr[index++],
                            done: true
                        }
                    }
                }
            }
        }
    }
    for(let key of obj) { //部署成功后可以对obj进行循环
        console.log(key);
    }
}

{
    let arr = ['hello','world'];
    for(let item of arr) {
        console.log(item)
    }
}
//不同的数据结构来通过for...of 这个统一的形式来达到读取不同数据的目标
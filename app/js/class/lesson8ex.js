// lesson8 继承拓展
{
    function Animal (name) {
        this.name = name || 'Animal';
        this.sleep = function () {
            console.log(this.name+'正在睡觉');
        }
    }
    Animal.prototype.eat = function (food){
        console.log(this.name+'正在吃'+food);
    }

    //原型链继承 - 核心： 将父类的实例作为子类的原型
    function Cat () {

    }
    Cat.prototype = new Animal(); //将父类的实例作为子类的原型
    Cat.prototype.name = 'cat';
    var cat = new Cat();
    console.log(cat.name);
    console.log(cat.eat('fish'));
    console.log(cat.sleep());
    console.log(cat instanceof Animal);
    console.log(cat instanceof Cat);

    // 1、特点：
    // a.非常纯粹的继承关系，实例是子类的实例，也是父类的实例
    // b.父类新增原型方法/原型属性，子类都能访问到
    // c.简单，易于实现

    // 2.缺点：
    // a.要想为子类新增属性和方法，必须要在new Animal()这样的语句之后执行，不能放到构造器中
    // b.无法实现多继承
    // c.来自原型对象的所有属性被所有实例共享
    // d.创建子类实例时，无法向父类构造函数传参


    //构造继承 - 核心：使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）
    function Cat1 (name) {
        Animal.call(this);
        this.name = name || 'tom';
    }
    var cat = new Cat1();
    console.log(cat.name) ;
    // console.log(cat.eat('fish')); //子类实例不可共享父类属性
    console.log(cat.sleep());
    console.log(cat instanceof Animal);
    console.log(cat instanceof Cat1); 
    // 1.特点：
    // a.解决了1中，子类实例共享父类引用属性的问题
    // b.创建子类实例时，可以向父类传递参数
    // c.可以实现多继承（call多个父类对象）

    // 2.缺点：
    // a.实例并不是父类的实例，只是子类的实例
    // b.只能继承父类的实例属性和方法，不能继承原型属性/方法
    // c.无法实现函数复用，每个子类都有父类实例函数的副本，影响性能


    //实例继承 - 核心：为父类实例添加新特性，作为子类实例返回
    function Cat2 (name) {
        var instance = new Animal();
        instance.name = name || 'Alice';
        return instance;
    }
    var cat = new Cat2();
    console.log(cat.name);
    console.log(cat.sleep());
    console.log(cat instanceof Animal); // true
    console.log(cat instanceof Cat2); // false
    // 1.特点：
    // a.不限制调用方式，不管是new 子类()还是子类(),返回的对象具有相同的效果
    // 2.缺点：
    // a.实例是父类的实例，不是子类的实例
    // b.不支持多继承


    //組合继承 - 核心：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
    function Cat3 (name) {
        Animal.call(this);
        this.name = name || 'jack';
    }
    Cat3.prototype = new Animal();
    Cat.prototype.constructor = Cat; //組合继承也是需要修复构造函数指向的。
    var cat = new Cat3();
    console.log(cat.name);
    console.log(cat.sleep());
    console.log(cat instanceof Animal); 
    console.log(cat instanceof Cat);
    // 1.特点：
    // a.弥补了方式2的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法
    // b.既是子类的实例，也是父类的实例
    // c.不存在引用属性共享问题
    // d.可传参
    // e.函数可复用
    // 2.缺点：
    // a.调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）


    //寄生组合继承 - 核心：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点
    function Cat4(name){
        Animal.call(this);
        this.name = name || 'KangKang';
    }
    (function () {
        var Super = function () {};
        Super.prototype = Animal.prototype;
        Cat.prototype = new Super();
    })();
    var cat = new Cat4();
    console.log(cat.name);
    console.log(cat.sleep());
    console.log(cat instanceof Animal); 
    console.log(cat instanceof Cat); 
    // 1.特点：
    // a.堪称完美
    // 2.缺点：
    // a.实现较为复杂
} 

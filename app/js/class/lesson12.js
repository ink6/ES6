{
    // ES6基本定义和生成实例
    class Parent {
        constructor (name = "parent") {
            this.name = name;
        }
    }
    let v_parent = new Parent('sb');
    console.log('构造函数和实力',v_parent)
}

{
    //继承
    class Parent {
        constructor (name = "parent") {
            this.name = name;
        }
    }

    class Child extends Parent{
    }
    console.log('继承',new Child());
}


{
    //继承 传递参数
    class Parent {
        constructor (name = "parent") {
            this.name = name;
        }
    }

    class Child extends Parent{
        constructor (name = 'child') {
            super(name); //通过super传递参数 将子类的name传递给父类的name 不传就用父类的 super 一直都放在第一行
            this.type = 'child';//子类独有的属性
        }
    }
    console.log('继承',new Child());
}

{
    //getter setter
    class Parent {
        constructor (name = "parent") {
            this.name = name;
        }

        get longName() { //不是方法 是属性
            return 'mk'+this.name
        }
        set longName(value) {
            this.name = value;
        }
    }
    let v = new Parent();
    console.log('getter',v.longName)
    v.longName = "sb";
    console.log('setter',v.longName)

}


{
    //静态方法
    class Parent {
        constructor (name = "parent") {
            this.name = name;
        }

        static tell () { //static 静态方法 - 通过类调用 而不是通过类的实例去调用
            console.log('打电话')
        }
    }
    Parent.tell();

}

{
    //静态属性
    class Parent {
        constructor (name = "parent") {
            this.name = name;
        }

        static tell () { //static 静态方法 
            console.log('打电话')
        }
    }
    Parent.type = 'test'; //静态属性 
    console.log('静态属性',Parent.type); //通过类调用 而不是通过类的实例去调用
}
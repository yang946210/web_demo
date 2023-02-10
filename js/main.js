
function dataType() {



    /**
     * 作用域关键字 const val let
     * 基本数据类型(存在栈内存中) string number boolean null undefined symbol(ES6) bigint(ES10)
     * 引用类型(存在堆内存中) Function Object Array
     *
     * 数据类型
     */
    let string = "string"
    let number = 123
    let boolean = false
    let mNull = null
    let mUndefined = undefined
    let symbol = Symbol("name");
    let bigint =10n

    let array1 = [1, 2, 3];
    let object1 = {name: "yang"}
    let fun1=new function (name,age) {
        return name+"and"+age
    }

    /**
     * 类型判断操作符
     * typeof  返回正在使用的值的基本类型
     * instanceof 用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
     * constructor 是一种用于创建和初始化 class 创建的对象的特殊方法。请注意，它是函数（方法）
     * Object.prototype.toString.call(source) 方法返回一个表示该对象的字符串
     */




}


function fun() {

    /**
     *
     * 函数
     */

    //方式一 函数声明
    function fun1(name, age) {
        return name + "and" + age;
    }

    //方式二 函数表达式
    let fun2 = function (name, age) {
        return name + "and" + age
    }

    //方式三 函数表达式
    let fun3 = new function (name, age) {
        return name + "and" + age
    }

    //方式4-2 箭头儿函数
    let fun41 = (x, y) => {
        return x + "and" + y
    }
    //方式4-2 箭头儿函数简化
    let fun42 = (x, y) =>  x + "and" + y


    //方式4 函数构造函数(基本不用)
    let fun5 = new Function('a', 'b', "return a +'and'+ b")


}




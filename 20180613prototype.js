//原型链理解
//链接https://blog.csdn.net/qq_34446663/article/details/80667192
//1
function Person(name,age) {  
    this.name = name;  
    this.age = age;  
}  
Person.say = function(){  
    console.log('Person的say');  
}  
Object.prototype.say = function(){  
    console.log('Object原型的say');  
}  
Function.prototype.say = function(){  
    console.log('Function原型的say');  
}     
Function.say = function(){  
    console.log('Function的say');  
}  
Person.prototype.say = function() {  
    console.log(this.name);  //使用该函数
};  
let p = new Person('月初',16);  
p.say();  //运行结果“月初”
// //p.say -> p._proto_ ->Person.prototype  

//2
// function Person(name,age) {  
//     this.name = name;  
//     this.age = age;  
// }  
// Person.say = function(){  
//     console.log('Person的say');  
// }  
// Object.prototype.say = function(){  
//     console.log('Object原型的say');  //运行该函数
// }  
// Function.prototype.say = function(){  
//     console.log('Function原型的say');  
// }     
// Function.say = function(){  
//     console.log('Function的say');  
// }  
// //没有Person.prototype.say
// let p = new Person('月初',16);  
// p.say();  //运行结果“Object原型的say”
// //p.say -> p._proto_ ->Person.prototype -> Person.prototype._proto_ ->Object.prototype 

// //3
// function Person(name,age) {  
//     this.name = name;  
//     this.age = age;  
// }  
// Person.say = function(){  
//     console.log('Person的say');  //运行该函数
// }  
// Object.prototype.say = function(){  
//     console.log('Object原型的say');  
// }  
// Function.prototype.say = function(){  
//     console.log('Function原型的say');  
// }     
// Function.say = function(){  
//     console.log('Function的say');  
// }  
// Person.prototype.say = function() {  
//     console.log(this.name);  
// };  
// let p = new Person('月初',16);  
// Person.say();  //运行结果为“Person的say”
// //Person.say  

//4
// function Person(name,age) {  
//     this.name = name;  
//     this.age = age;  
// }  
// // Person.say = function(){  
// //  console.log('Person的say');  
// // }  
// Object.prototype.say = function(){  
//     console.log('Object原型的say');  
// }  
// Function.prototype.say = function(){  
//     console.log('Function原型的say');  //运行该函数
// }     
// Function.say = function(){  
//     console.log('Function的say');  
// }  
// Person.prototype.say = function() {  
//     console.log(this.name);  
// };  
// let p = new Person('月初',16);  
// Person.say();  //结果为“Function原型的say”
// //在此应该注意一个概念，构造函数原型下的属性和方法只能给他的实例化对象用，
// //就是Person.prototype.say只能给他的实例化对象p用，而他自己的原型对象则是Function

// //5
// function Person(name,age) {  
//     this.name = name;  
//     this.age = age;  
// }  
// Person.say = function(){  
//  console.log('Person的say');  
// }  
// Object.prototype.say = function(){  
//     console.log('Object原型的say');  //运行该函数
// }  
// // Function.prototype.say = function(){  
// //     console.log('Function原型的say');  
// // }     
// Function.say = function(){  
//     console.log('Function的say');  
// }  
// Person.prototype.say = function() {  
//     console.log(this.name);  
// };  
// let p = new Person('月初',16);  
// Person.say();  //结果为“Object原型的say”！！！！！实测为Person的say
// //Person.say() -> Person._proto_ -> 
// //Function.prototype -> Function.prototype._proto_ -> Object.prototype  

// //6
// function Person(name,age) {  
//     this.name = name;  
//     this.age = age;  
// }  
// Person.say = function(){  
//     console.log('Person的say');  
// }  
// Object.prototype.say = function(){  
//     console.log('Object原型的say');  
// }  
// Function.prototype.say = function(){  
//     console.log('Function原型的say');  
// }     
// Function.say = function(){  
//     console.log('Function的say');  //运行该函数
// }  
// Person.prototype.say = function() {  
//     console.log(this.name);  
// };  
// let p = new Person('月初',16);  
// Function.say();  //运行结果为“Function的say”
// //Function的原型就是Function

// //7
// function Person(name,age) {  
//     this.name = name;  
//     this.age = age;  
// }  
// Person.say = function(){  
//     console.log('Person的say');  
// }  
// Object.prototype.say = function(){  
//     console.log('Object原型的say');  
// }  
// Function.prototype.say = function(){  
//     console.log('Function原型的say');  //运行该函数
// }     
// // Function.say = function(){  
// //  console.log('Function的say');  
// // }  
// Person.prototype.say = function() {  
//     console.log(this.name);  
// };  
// let p = new Person('月初',16);  
// Function.say();  //运行结果为“Function原型的say”
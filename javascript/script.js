// "use strict";
//
// var a = {
//     name:'Bikram',
//     log:function(){
//         console.log(this.name);
//         this.name = 'a.k.a Biki';
//         console.log(this.name)
//     }
// }
//
// var bik = 'bikram'
//
//
// var arr = [
//     1,
//     true,
//     {
//         name: null,
//         age:25,
//     },
//     function(){
//         console.log(arr[2].name)
//     }
// ]
//
// function funk(a, b){
//     console.log(a);
//     console.log(b);
// }
//
//
// function cap1(name){
//     return name[0].toUpperCase() + name.slice(1);
// }
//
//
//
//
//
//
// var myName = "carlton";
//
// (function(name){
//     console.log(name[0].toUpperCase() + name.slice(1));
// }(myName));
//
//
//
// function closure(saying){
//     return function(name){
//         console.log(saying + ' ' + name);
//     }
// }
//
// var closureTest = closure('Yo!');
// closureTest('Royce');
//
//
//
//
// var there = prompt('Are we there yet?');
//
// while(there !== 'yes'){
//     var there = prompt('Are we there yet?');
//
// }
//
// if(there ==='yes'){
//     prompt('YAY WE MADE IT');
// }
//
//
//
//
//
//
// var one = -10;
//
// while(one <= 19){
//     console.log(one);
//     one++;
// }
//
//
// var two = 10;
//
// while(two <= 40){
//     console.log(two);
//     two+= 2;
// }
//
//
//
// var three = 300;
//
// while(three < 333){
//     if(three % 2 !== 0){
//         console.log(three);
//     }
//     three++;
// }
//
//
//
// var four = 5;
//
//
// while(four <= 50){
//     if(four % 5 === 0 && four % 3 === 0){
//         console.log(four);
//     }
//     four++;
// }


// for(var i= -10; i <= 19; i++){
//     console.log(i);
// }
//
//
//
//
// for(var i = 10; i <= 40; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }
//
//
// for(var i = 300; i <= 333; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }
//
//
// for(var i = 5; i < 50; i++){
//     if(i % 5 === 0 && i % 3 === 0){
//         console.log(i);
//     }
// }


// var uTest = function(a){
//     // console.log(a * 5);
//     return a * 5;
// };
//
// var nine = uTest(9);
// var five = uTest(5);
//
//
//
//
//
// function even(x){
//     if(x % 2 !== 0){
//         return 'Not Even'
//     }
//     return x % 2;
// }
//
//
// function factorial(num){
//     var result = 1;
//
//     for(var i = 2; i <= num; i++){
//         result *= i;
//     }
//     return result;
// }
//
//
// var puppy = 'Mojo';
//
// var obj = {
//     name:'Bikram',
//     puppy:'Royce',
//     func: (function(){
//         var self = this;
//         console.log(self.puppy);
//         var newFunc = function(newName){
//             self.name = newName;
//         }
//         newFunc('2kGod');
//         console.log(self.name);
//     })
// }
//
//
//
//
//
// var arr = ['red', 'blue', 'green', 'orange'];
//
// function printReverse(arr){
//     for(var i = arr.length ; i >= 0; i--){
//         console.log(arr[i]);
//     }
// }
//
//
// var arrt = [1,1,1,1,1];
// var arrf = [1,1,1,99,2];
//
// function isUniform(arr){
//     var first = arr[0];
//     for(var i = 1; i < arr.length - 1; i++){
//         if(arr[i] !== first){
//             return false;
//         }
//     }
//     return true;
// }
//
//
//
// arr.forEach(function(colors, i){
//     console.log(i + ': ' + colors);
// });
//
//
// function SumArray(arrr){
//     var total = 0;
//     arrr.forEach(function(num){
//         total += num;
//     });
//     return total
// }
//
// var ran = [4,3,5,3,55];
//
// function max(arr){
//     var maxNum = arr[0];
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > maxNum){
//             max = arr[i];
//         }
//     }
//     console.log(max);
// }
//
// var name = "bikram";
//
// var pup = {
//     name: 'royce',
//     age: 6
// }







var obj3 = {
    first: 'Royce',
    last: 'Sekhon',
    func1: function(){
        console.log(this.first + this.last);
    }
}

var func = (function(myName){
    myName = obj3.first + ' ' + obj3.last;
    console.log(myName);
}())


// var name = 'Bikram';

function dec2(name){
    console.log(name);
    return function (greet){

        console.log(greet + ' ' + name);
    };
}
dec2('bikram')('yo');


var grting = 'Hola';


var sayHi = function (whattosay){
    return function(name){
        console.log(whattosay + name);
    }
}

sayHi('hi')('biki');




function buildFunction(){
    var arr = [];
    for(var i = 0; i < 3; i++){

        arr.push(
            (function(j){
                return function(){
                    console.log(j);
                }
            }(i))
        )
    }
    return arr;
}





function buildFunction2(){
    var arr = [];
    for(var i = 0; i < 3; i++){
        arr.push(
            (function(j){
                return function(){
                    console.log(j);
                }
            }(i))
        )
    }
    return arr;
}

var fs2 = buildFunction2();
fs2[0]();
fs2[1]();
fs2[2]();















var fs = buildFunction();
fs[0]();
fs[1]();
fs[2]();


function first(q){
    return q
}

function second(w){
    return w
}

var one = first(3);
var two = second(7);
var equal = one * two;
console.log(equal);

function makeGreeting(language){

    return function(first,last){
        if(language === 'en'){
            console.log('Hello ' + first + ' ' + last);
        }
        if(language === 'es'){
            console.log('Hola ' + first + ' ' + last);
        }
    }
}

var make = makeGreeting('en');
make('Bikram', 'Sekhon');
var makeSpanish = makeGreeting('es')('Gustavo', 'Lopez');



function Person(first,last){
    console.log('invoked');
    this.first = first;
    this.last = last;
    this.getFullName = function(){
        console.log(this.first);
        return this.first + ' ' + this.last;
    }

}





var person1 = new Person('Bikram', 'Sekhon');

var person2 = new Person('Royce', 'Puppy');

Person.prototype.address = '1953';
console.log(person1.address);


var z = "zzzz";
function yyhh(z){
    z = this.z;
    console.log(z);
}



function buildFunctions(){
    var arr = [];

    for(var i = 0; i < 3; i++){
        arr.push(
            function(){
                console.log(i);
            }
        )
    }
    return arr;
}

var bs = buildFunctions();

bs[0]();
bs[1]();
bs[2]();


var doubleArr = [1,2,3,4,5];

for(i = 0; i < doubleArr.length; i++){
    console.log(doubleArr[i] * 2);
}




function funk(a){
    a = a * 5;
    return function(z){
        console.log(z * a);
    }
}


var exec = funk(1)(9);


var Construct = function(first,last,log){
    this.first = first;
    this.last = last;
    this.log = function(){
        console.log(this.first + ' ' + this.last);
    }
};

var me = new Construct('bikram',"sekhon");

me.log();

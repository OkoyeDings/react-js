//using multiple modules
module.exports.counter = function(arr){
    return 'There are '+ arr.length + ' elements in this array'
}
// console.log(counter(['dings','max','james']));

module.exports.adder = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`;
}

module.exports.pi = 3.142;


//to make a varable or function avaliable globally
    // module.exports = counter;
//How to use multiple modles 
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;


//the best way to make a variable or function global is to add the module.exports when namein the variable
//or you can do it this way

// module.exports = {
//     // counter : counter,
//     // adder : adder,
//     // pi:pi
// }
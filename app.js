console.log(__dirname);
console.log(__filename);
// setTimeout(function (){
//     console.log('3 sec has passed')
// }, 2000)
var time = 0;
var timer = setInterval(function(){
    time += 2;
    console.log( time + 'sec');
    if(time > 5){
        clearInterval(timer)
    }
},1000)

//using multiple modules
var stuff = require('./count');
console.log(stuff.counter(['dings','max','james'])); 
console.log(stuff.adder(5,6));
console.log(stuff.pi);
console.log(stuff.adder(stuff.pi,5));


//using call modules in nodeJS ("event module")
var events = require('events');

// var myEmitter =  new events.EventEmitter();
// myEmitter.on('someEvent', function(mssg){
//     console.log(mssg); 
// })

// myEmitter.emit('someEvent', 'the even was emitted') 

var util = require('util');
var person = function(name){
    this.name = name;
};

util.inherits(person, events.EventEmitter);
var james = new person('james');
var mary = new person('mary');
var ryu = new person('ryu');
var people = [james, mary, ryu];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said ' + mssg)
    });
});

james.emit('speak', 'hey guys');
ryu.emit('speak', 'im learning');

//how to read and create file in nodeJs
var fs = require('fs'); 


// using sync
// var readMe = fs.readFileSync('readMe.txt' , 'utf8');
// fs.writeFileSync('writeMe.txt', readMe);

//usng async
// fs.readFile('readMe.txt' , 'utf8', function(err, data){
//     fs.writeFileSync('writeMe.txt' , data);
// });

// fs.unlink('writeMe.txt', (err) => {
//     if (err) {
//         console.log(err)
//     }else{
//         console.log('file deleted succesfully');
//     }
// });

//.............ways of making directory, we can use sync or async
//mk meaning make 
//fs.mkdirSync('stuff');
//rm meaning remove
// fs.rmdirSync('stuff')

//...........using aSync method
//how to add a dirctory with a file inside
// fs.mkdir('stuff', function(){
//     fs.readFile('readMe.txt', 'utf8', function(err, data){
//         fs.writeFileSync('./stuff/writeMe.txt', data)
//     });
// });

//..........how to delete a dirctory with a file inside
// fs.unlink('./stuff/writeMe.txt', (err) => {
//     fs.rmdirSync('stuff');
//     console.log('file deleted succesfully');
// });




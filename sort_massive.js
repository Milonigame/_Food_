'use strict';

//filter

// const names=['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames=names.filter(function(name){
//     return name.length<5;
// });
// console.log(shortNames);


// //map

// const answers=['IvAn', 'AnnA', 'Hello'];

// const result=answers.map(item=>{
//     return item.toLowerCase();
// });
// console.log(result);
// const result=answers.map(item=>item.toLowerCase());

//every/some

const some=[4, 'qw', 'fggdg'];
console.log(some.some(item=>typeof(item)==='number'));//если пишем some то спрашиваем есть ли хотя бы один number

console.log(some.every(item=>typeof(item)==='number'));//если пишем every то спрашиваем еcли все элементы внутри массива подходят под условие только в таком случае метод вернет true;



//reduce

// const arr=[4,5,1,3,2,6];
//    //         0      4
//    //         4      5
//    //         9      1
//    //         10     3

// const res=arr.reduce((sum, current)=>sum+current, 3);
// console.log(res);

// const arr=['apple','pear', 'plum'];
//    //         0      4
//    //         4      5
//    //         9      1
//    //         10     3

// const res=arr.reduce((sum, current)=>`${sum}, ${current}`);
// console.log(res);

const obj={
   ivan:'persone',
   ann:'persone',
   dog:'animal',
   cat:'animal'
};

const newArr=Object.entries(obj)
// .filter(item=>item[1]==='persone')
// .map(item=>item[0]);
console.log(newArr);
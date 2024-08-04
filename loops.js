
// //for loop
// for(let i=1;i<=5;i++){
//     console.log("i=",i);
// }

////while loop
// let i=1; 
// while(i<=5){
//     console.log("i=",i);
//     i++;
// }

////Do while loop
// let i=1;
// do{
//     console.log("i=",i);
//     i++
// }while(i<=5);

//////for of loops
// eg-1.
// let str="BhaveshJain";
// for(let i of str){
//     console.log("i=",i);    
// }

// eg-2.
// let str="JavaScript";
// let size=0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("String Size=",size);

//////for in loops
let student={
    name:"Bhavesh Jain",
    age:19,
    cgpa:9.5,
    isPass:true
};

for( let key in student){
    console.log("key=",key,"value=",student[key]);
}
//     //////// Q1..
// // let marks=[87,93,64,99,86,75,89,99,92,96,97,94,95,100];

// let reqmarks=marks.filter((val)=>{
//   return val>90;
// });
// console.log("Marks of student who scored 90+:",reqmarks);


////Q2.
let n=prompt("Enter a number:");

 let arr=[];
 for (let i=1;i<=n;i++){
    arr[i-1]=i;
 }
 console.log(arr);

 let output=arr.reduce((prev,curr)=>{
    return prev+curr;
 });
 console.log("The sum of array elements:",output);

 let output2=arr.reduce((prev,curr)=>{
    return prev*curr;
 });
 console.log("The product of array element (factorial):",output2);
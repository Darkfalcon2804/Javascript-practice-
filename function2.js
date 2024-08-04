// // //////forEach
// // // let arr=[1,2,3,4,5];

// // // arr.forEach((val)=>{
// // //     console.log(val);
// // // });

// // // let arr2=["pune","delhi","jaipur","mumbai"];
// // // arr2.forEach((work)=>{
// // //     console.log(work.toUpperCase());
// // // });

// // ////MAP
// // let arr=[67,52,39];
// // let newArr=arr.map((val)=>{
// //     return val;
// // });

// // console.log(newArr);

////filter
// let arr=[1,2,3,4,5,6,7];
// let evenArr= arr.filter((val)=>{
//     return val%2===0;
// })

// console.log(evenArr);

//////reduce
// let arr=[1,2,3,4];
// let output=arr.reduce((res,curr)=>{
//     return res+curr;
// })
// console.log(output);    


///To print largest no using reduc
let arr=[5,6,2,1,101,3];
let output=arr.reduce((res,curr)=>{
    return res>curr?res:curr;
});
console.log(output);
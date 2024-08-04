// let str="DarkFalcon";
// console.log(str);
// str.length;
// console.log(str.length);

// for(let i=0;i<=9;i++){
//     console.log("i=",str[i]);
// }


////Template Literals
let specialString=`this is template literals`;
console.log(typeof specialString);
let object ={
    item:"pen",
    price:10,
};
let output=`the cost of ${object.item} is ${object.price} rupees`;
console.log(output);

////Escape Characters 
console.log("Dark \nFalcon");
console.log("Dark\tFalcon");
let str="Dark\tFalcon";
console.log(str.length);


////Q1.
let marks=[85,97,44,37,76,60];

let sum=0;

for(let val of marks){
    sum+=val;
}

let avg=sum/marks.length;
console.log(`avg marks of the class=${avg}`);

////Q2. by for of loop
// let items=[250,645,300,900,50];
// let i=0;
// for(let val of items){
//     console.log(`value at index ${i}=${val}`);
//     let offer=val/10;
//     items[i]-=offer;
//     console.log(`value after offer=${items[i]}`);
//     i++;
// }

//Q2.by for loop
let items=[250,645,300,900,50];
for(let i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i]-=offer;}
    console.log(items);
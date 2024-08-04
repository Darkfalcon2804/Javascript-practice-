let heroes=["ironman","hulk","thor","batman","antman"];
console.log(heroes.length);
//for loop
// for(let idx=0;idx<heroes.length;idx++){
//     console.log(heroes[idx]);
// }

//for of 
for(let s of heroes){
    console.log(s);
}


let cities=["delhi","pune","mumbai","hyderabad","gurgaon"];
for(let city of cities){
    console.log(city.toUpperCase());
}
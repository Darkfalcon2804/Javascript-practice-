 let fullName=prompt("Enter your full name here without spaces:");
 fullName=fullName.trim();
 fullName=fullName.toLowerCase(); 
let  username="@"+fullName+fullName.length;
console.log(username);
const accountId = 546464
let accountEmail = "test@gmail.com"
var accountPassword = "456789" // just use let instead of var but you can use var also (This change is made due to scope problem in js)
accountCity = "Pune"

let accountState; // if we declare the variable and not assign any value to it then it will give value as "undefined"

//accountId = 2  //not allowed to change as we are using const keyword

accountEmail = "test123@gmail.com"
accountPassword = "123546"
accountCity = "Mumbai"
// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
// console.table this syntax is used to print the variables in table format

/*
IMP NOTE:
Prefer not to use var 
because of issue in block scope and functional scope
*/
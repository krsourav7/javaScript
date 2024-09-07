const accountId = 1152403
let accountEmail = "something@gmail.com"
var accountPassword = "something123"
accountCity = "Bangalore"

// accountId = 2 // not allowed

accountEmail = "some@gmail.com"
accountPassword = "some123123"
accountCity = "Hyderabad"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])

/* prefer not to use var
bacause of issue of block scope and functional scope
*/
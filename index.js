// Question 31
let username = ["Maham", "Sabar", "admin", "Taimoor", "Daniyal"];
if (username.length == 0) {
    console.log("We need to find some user.");
}
else {
    for (let i = 0; i < username.length; i++) {
        if (username[i] == "admin") {
            console.log("Hello admin,would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username[i]},thank you for logging in again.`);
        }
    }
}
username = [];
if (username.length == 0) {
    console.log("We need to find some user.");
}
// Qusetion 32
let current_user = ["Maham", "Sabar", "admin", "Taimoor", "Daniyal"];
let new_user = ["maham", "sabar", "Daniyal", "Taimoor", "Jabbar"];
let current_user_upper = current_user.map(user => user.toUpperCase());
for (let newuser of new_user) {
    if (current_user_upper.includes(newuser.toUpperCase())) {
        console.log(`${newuser} is already taken`);
    }
    else {
        console.log(`${newuser} is now available in the list.`);
    }
}
// Question 33
let ordinal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num = 0; num < ordinal.length; num++) {
    if (ordinal[num] === 1) {
        console.log(`${ordinal[num]}st`);
    }
    else if (ordinal[num] === 2) {
        console.log(`${ordinal[num]}nd`);
    }
    else if (ordinal[num] === 3) {
        console.log(`${ordinal[num]}rd`);
    }
    else {
        console.log(`${ordinal[num]}th`);
    }
}
export {};

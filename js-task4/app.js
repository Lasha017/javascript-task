// 1)ჩავთვალოთ რომ გვაქვს სამი სხვადასხვა ფუნქცია რომელიც შეიცავს promise-ებს პირველი შეიცავს "User Data", მეორე: "Account Statistics" და მესამე: "Activity Logs". და promise.all დახმარებით უნდა დავჰენდლოთ ეს მონაცემები და ასევე გავწეროთ catch ბლოკიც.
// function getUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('User Data');
//         }, 1000);
//     })    
// }

// function getAccountStatistics() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Account Statistics');
//         }, 2000);
//     })
// }

// function getActivityLogs() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Activity Logs')
//         }, 3000);
//     })
// }

// Promise.all([getUserData(), getAccountStatistics(), getActivityLogs()])
//     .then((res) => {
//         console.log("result -->", res);
//     })
//     .catch((err) => {
//         console.error("Error: ", err);
//     });



// 2)პირობითად გვაქვს ორ სხვადსხვა სერვისში სურათის ატვირთვა და საკმარისია რომ ერთერთი მაინც აიტვირთოს წარმატებით.გამოიყენეთ promise.any.


// function myFunction() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('image-1');
//         }, 2000);
//     })
// }

// function myFunction1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            reject('image-2')
//         }, 3000);
//     })
// }

// Promise.any([myFunction(), myFunction1()])
//     .then((res) => {
//         console.log("result -->", res);
//     })
//     .catch((err) => {
//         console.error("Error: ", err);
//     });

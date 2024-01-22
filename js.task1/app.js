// 1) დაწერეთ კოდი სადაც შეამოწმებთ დადებითია თუ უარყოფითი
// ეს რიცხვი!!

//asnwer:
// let number = 5;

// if (number > 0) {
//     console.log("დადებითია");
// }
// else if (number < 0) {
//     console.log("უარყოფითია");
// } else {
//     console.log("ტოლია 0-ის");
// }

//2)დაწერეთ მარტივი კალკულატორი სადაც გამოიყენებთ ოპერატორებს(+, -, *, /)
// switch case დახმარებით უბრალოდ დარწმუნდით რომ თითოეულ ქეისი ასრულებს ამ მეთოდებს

//asnwer:
// num1 = 10;
// num2 = 20;
// number = "plus";

// switch (number) {
//     case "plus":
//         console.log(num1 + num2);
//         break;
//     case "minus":
//         console.log(num1 - num2);
//         break;
//     case "multiply":
//         console.log(num1 * num2);
//         break;
//      case "divide":
//         console.log(num1 / num2);
//         break;

//     default:
//         break;
// }

//3) დაწერეთ იგივე კალკულატორი if else დახმარებით!!

//asnwer:

// num1 = 10;
// num2 = 20;

// task = "/";

// if (task === "+") {
//     console.log(num1 + num2);
// }
// else if (task === "-") {
//     console.log(num1 - num2);
// }
// else if (task === "*") {
//     console.log(num1 * num2);
// }
// else if (task === "/") {
//     console.log(num1 / num2);
// }

//4) დაწერეთ ავტორიზაციის ლოგიკა სადაც უნდა დავარეგისტრიროთ User
// user უნდა შემოყავდეს firstName,lastName,email,password,phoneNumber
// firstName,lastName,email,password არის სავალდებულო ველები
// ამიტომ ერთიანად შეამოწმეთ ეს ოთხი ველი და დარწმუნდით თუ ცარიელი input
// არარის მაშინ დალოგეთ რომ შენ დარეგისტრირდი წარმატებით თუ ცარიელია მაშინ
// დალოგეთ "input is required" გამოიყენეთ if else

//asnwer:

// let firstName = "lasha";
// let lastname = "gogolashvili"
// let email = "lasha@gmail.com"
// let password = "lasha123"
// let phoneNumber = "14124141141"

// if (firstName !== "" && lastName !== "" && email !== "" && password !== "" && phoneNumber !== "") {
//     console.log("Successful registration");
// } else if (phoneNumber === "") {
//     console.log("Phone number is required");
// } else {
//     console.log("Registration failed");
// }

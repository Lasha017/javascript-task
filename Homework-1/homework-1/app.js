//1) დავწეროთ ფუნქცია რომელსაც გადეცემა რაიმე პარამეტრი და არგუმენტად
//მიიღებს ისეთ რიცხვებს რომლის დახმარებითაც უნდა გამოვითვალო
//მაგალითად რამდენი წელი გვაკლდება თითოეულს პენსიამდე და ეს
//ყველაფერი უნდა დავწეროთ ამ ფუნქციაში.

// numbers = "20";
// age = "60"

// // function myfunction(params) {
// //     if (numbers < 60) {
// //         let pension = age - numbers;
// //         console.log(`პენსიამდე გიკლიათ ${pension} წელი`);
// //         }
// //         else if (numbers >= 60) {
// //             console.log("თქვენ უკვე პენსიაში ხართ");
// //         }
// //         else {
// //             console.log("მიუთითეთ სწორი ასაკი!");
// //         }
// // }
// myfunction();

//2)შექმენით კალკულატორის ფუნქცია სახელად კალკულატორი,
// რომელიც ასრულებს ძირითად არითმეტიკულ ოპერაციებს.
// ამ ფუნქციამ უნდა მიიღოს სამი პარამეტრი: ორი რიცხვი და სტრიქონი,მაგალითად num1,num2, "+".
// რომელიც წარმოადგენს არითმეტიკულ ოპერატორს ('+', '-', '*', '/').
// მოწოდებული ოპერატორის მიხედვით, ფუნქციამ უნდა შეასრულოს შესაბამისი ოპერაცია ორ ნომერზე და დააბრუნოს შედეგი.


// function myfunction(num1,num2,task) {
//     if (task === "+") {
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
//  else {
// console.log("Invalid task");
// }
// }

// myfunction (5,5,"/");


//3)შეიმუშავეთ ფუნქცია სახელწოდებით checkPasswordStrength, რომელიც აფასებს მოცემული პაროლის სიძლიერეს.
// პაროლის სიძლიერე განისაზღვრება რამდენიმე კრიტერიუმის საფუძველზე: ის უნდა იყოს მინიმუმ 8 სიმბოლო და მაქსიმუმ 16 სიმბოლო;
// ფუნქციამ უნდა დააბრუნოს სტრიქონი სადაც გვეწერება რომ თუ ნაკლებია 8 მაშინ შესაბამისი ერორით თუ მეტია 16 მაშინ შესაბამისი ერრორით და თუ ცარიელია input უნდა შევამოწმოთ ეგეც
//გამოიყენეთ if-else განცხადებები თითოეული კრიტერიუმის შესამოწმებლად და სიძლიერის შესაფასებლად.

// function checkPasswordStrength(password) {

//     if (password.length < 8) {
//         console.log("პაროლი შეიცავს 8-ზე ნაკლებ სიმბოლოს!!!");
//     }
//     else if (password.length > 16) {
//         console.log("პაროლი შეიცავს 16-ზე მეტ სიმბოლოს!!!");
//     }
//     else if (password.length === 0) {
//         console.log("input ცარიელია");
//     }
//     else {
//         console.log();
//     }
    
// }

// let password = "ad23";
// checkPasswordStrength(password);


//4) დაწერეთ ფუქნცია სადაც პარამეტრად გავატანთ flowers და არგუმენტად გავატანთ ყვავილების სახეობებს.
//და გვჭირდება რომ switch case დავწეროთ ლოგიკა რომ თუ შესაბამისი სახელის ყვავილები გვაქვს მაშინ დავაბრუნოთ console-ში 
//ეს ყვავილი ნაპოვნია!!

// function  myfunction(flowers) {
//     switch (flower) {
//         case "ვაშლი":
//             console.log("ვაშლი ნაპოვნია!");
//             break;
//         case "მსხალი":
//             console.log("მსხალი ნაპოვნია!");
//             break;
//          case "ატამი":
//             console.log("ატამი ნაპოვნია!");
//             break;  
//         default:
//             console.log("არცერთი ხილი არარის ნაპოვნი!");
//             break;
//     }
// }

// flower = ""
// myfunction();

//5)გვჭირდება სამი prompt.გვჭირდება რომ ამ სამ ინფუტში შემოყვანილი რიცხვებიდან რომელი არის უდიდესი ის დავიჭიროთ და დავლოგოთ უბრალოდ.
// მაგალითად.2,5,7 და აქედან უდიდესი არის 7.
//დაწერეთ ფუნქციაში ეს ყველაფერი და შემდეგ ამ ფუნქციაში შეამოწმეთ if else დახმარებით!!

// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// let num3 = prompt("Enter the third number:");

// function LargestNumber() {
//     if (num1 > num2 && num1 > num3) {
//         console.log(`The largest number is ${num1}`);
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(`The largest number is ${num2}`);
//     }
//      else {
//         console.log(`The largest number is ${num3}`);
//     }
// }

// LargestNumber();
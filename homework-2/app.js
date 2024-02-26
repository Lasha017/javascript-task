//1) დაწერეთ ფუნქცია processNumbers, რომელიც პარამეტრად იღებს ორ რიცხვს და callBack ფუნქციას.
// და ამ ფუნქციის გამოძახებით უნდა შესრულდეს არითმეტიკული
//ოპერაციები ციფრებზეც მაგალითად მიმატება ან გამოკლება რომელიც უნდა გვეწეროს callBack ფუნქციაში.

// function callbackfunction(num1,num2) {
//     return num1 + num2
// }

// function callbackfoo(callback) {
//     return callback(10,10)
// }

// console.log(callbackfoo(callbackfunction));

//2)შექმენით ფუნქცია isValidUser, რომელიც იღებს მომხმარებლის სახელს და პაროლს პარამეტრად
//და აბრუნებს true, თუ ორივე ცარიელი სტრიქონებია; წინააღმდეგ შემთხვევაში,
//დააბრუნეთ ყალბი. გამოიყენეთ ლოგიკური ოპერატორები.დაგჭირდებათ გაიგოთ მონაცემთა ტიპი
//და ისე შეამოწმოთ თუ სტრინგი აქვს ტიპად!!

// function isValidUser(name,password) {
//     if (typeof name === 'string' && typeof password === 'string') {
//         return true
//     }
//     if (name > 0 && password > 0) {
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(isValidUser('lasha','lasha123'));


//3)შექმენით რეკურსიული ფუნქცია, რომელიც დააბრუნებს n რიცხვს ფიბონაჩის მიმდევრობაში.

// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

// console.log(fibonacci(8));

//4)შექმენით უკუმთვლელი ტაიმერი, რომელიც ითვლის 10-დან 0 წამამდე, შემდეგ დაბეჭდავს "დრო ამოიწურა!".
//გამოიყენეთ setInterval მეთოდი და დროის დასრულების შემდეგ უნდა დავამთავროთ ტაიმერი!!

// let num = 10

// function myfunction() {
//    const funct = setInterval(() => {
    
//         if (num == 0) {
//             console.log('დრო ამოიწურა');
//             clearInterval(funct)
//         }
//         else {
//             console.log(num);
//             num--;
//         }
//     }, 1000);
// }

// myfunction();


//5)შექმენით ფუნქცია, რომელიც ითვლის და აბრუნებს ასაკს მოცემული დაბადების თარიღის მიხედვით თარიღის ობიექტების გამოყენებით.

// const birthdate = prompt('ჩაწერეთ დაბადების წელი'); 

// function myfunction(birthdate) {
//     let date = new Date();
//     let year = date.getFullYear();

//     let age = year - parseInt(birthdate);

//     console.log(`your age is ${age}`);
// }

// myfunction(birthdate);



//6) დაწერეთ ფუნქცია, რომელიც ბეჭდავს კვირის მიმდინარე დღის
// სახელს თარიღის გამოყენებით.დაგჭირდებათ array-ში შეინახოთ
//კვირის დღეები და ისე შეამოწმოთ new Date() დახმარებით!!

// let days = ['sunday','monday','tuesday','wendesday','thursday','friday','saturday']
// let date = new Date();

// const day = date.getDay();
// const daysofweek = days[day]    
    
// console.log(daysofweek);


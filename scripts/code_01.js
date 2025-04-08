// Start name of function This is one line coment 1
//
function Solve(Numb){
// Defining variables
let a1 = 100;
let a2 = Math.round(100 * Math.random()+ 2*Numb);
// Закръгляне до N-ти знак .ToFixed(N)

let roundDown = Math.floor(3.14); // return 3

let roundUp = Math.ceil(3.14); // return 4

let a3 = 1.1234567890123456.toFixed(5); // 1.123
my_String = "JS Lover say: "
/* several line of comments
put here
*/
// Main part of function
console.log(a1 + a2);
// console.log(my_String + " " + a2);
console.log("Закръглена стоиност до 3 ти знак e: " +`${a3}`);

}
// Call the Solve function
Solve(42);

function GetMeteo(City, Degrees){
//   let result = "Current Temp. in " + City + " is " + Degrees +" degrees."
// OR
    let result = ("Current Temp. in " + `${City}` + " is " + `${Degrees}` +" degrees.");
    console.log(result);
}
// Call the GetMeteo function
GetMeteo("Sofia", 29);
GetMeteo("Pleven", 38);

// Rerurn / Convert Kilometers in Miles
// 1 kM = 0.621371 miles
function Convert_Km_2_Miles(inKM){
    const miles_ratio = 0.621371;
    let result = (inKM * miles_ratio)
    console.log(inKM + " kilometers, are: " + result +" miles.");
}
// Call the Conversion function
Convert_Km_2_Miles(5);
Convert_Km_2_Miles(10.5);


console.log("Problem One - Sum");

function sum(num1,num2){
    return num1 + num2;
}

let total1=sum(5, 10);
let total2=sum(7430, 2354.98);

console.log(total1);
console.log(total2);




console.log("Problem Two - Avg");

function avg(num1, num2, num3){
    return (num1 + num2 + num3)/3;
}

let test1 = avg(5, 10, 15);
let test2 = avg(100, 200, 600);
let test3 = avg(234324, 4324234, 234234);

console.log(test1);
console.log(test2);
console.log(test3);




console.log("Problem Three - Greater Than");


function greaterThan(num1, num2){
    if(num2 > num1){
        return "True";
    }else{
        return "False";
    }
    }

let test4=greaterThan(25, 20);
let test5=greaterThan(20, 25);
let test6=greaterThan(100, 100);

console.log(test4);
console.log(test5);
console.log(test6);



console.log("Problem Four - Second Largest");


function secondLargest(numbers){
   
    let largest = 0;
    
    for(let i=0; i<numbers.length; i++){
       
        if (numbers[i]>numbers[largest]){
            largest=i;
        }
    }
    numbers.splice(largest, 1);

largest = 0;
for(let i=0; i<numbers.length; i++){
       
        if (numbers[i]>numbers[largest]){
            largest=i;
        }
    }

    return numbers[largest];
}

let test7 = secondLargest([25, 30, 10, 70, 40, 60]);

console.log(test7);




console.log("Problem Five - Contains Vowel");

// For each letter in the string, look for each vowel, one at a time.
// If one vowel is found, you can stop looking and display true.
// If no vowels are found after looping through all vowels and all letters, display false.
// Return true if one vowel in string and false if not


// function containsVowel(word){

//     let vowel = ["a", "e", "i", "o", "u"];

//     for(let i=0; i<word.length; i++){

//         for(let i=o; i<vowel.length; i++){
//             vowel[i]
//         }

//     }
// }

console.log("Problem Six - Pig Latin");

// Separate the phrase into individual words
// Remove the first letter from each word.
// Display the remaining letters of each word followed by the first letter and the letters "ay"


function pigLatin(phrase){

    let words=phrase.split();
    
    for (let i=0; i<words.length; i++){
        
        let letters=words.split();

    for (let i=0; i<letters.length; i++){    
        letters.splice(letters[0], 1);
    }
    }
    return letters + "" + "ay";
    }


let test20= pigLatin("coding rocks");
console.log(test20);





console.log("Problem Seven - Longest Word");

// Take single string and return the longest word in the string
// 1. Look at the first word in the string and count its letters
// 2. Compare the number of letters in the first word to the next word
// 3. Keep the word that has numbers greater than the previous longest word.
// 4. Display the longest word.and
// 5. Need to split the string into individual words and then split those words into letters.  
// Then you can count them.  Two loops?

function longestWord(string){




}



console.log("Problem Eight - Divisors");

// Input number and it returns an array of all numbers that divide into it evenly.
// Figure out all of the numbers equal to or less than the input number that have a remainder of 0.
// Use modular function to determine the remainder.
// Print the array of the numbers that work.

function divisors(number){



}





console.log("Problem Nine - Weave");

// Accepts input string and number.  Replaces every xth character replaced with an x.
// Count the letters in the string.  When you get to the xth character, replace it with an x.
// Restart the count and repeat
// Display the new string with the replaced characters.


function weave(phrase, number){


}

console.log("Problem Ten - Bonus");

// Input cost of meal, returns the tip and rounds up to nearest dollar.  20% tip.  
// Use Math.ceil
// Multiply the cost of the meal times the 20% tip and save the product.
// Round the product to the nearest dollar using Math.ceil
// Display the full amount paid?  or just the tip is rounded up?


function bonus(meal){
    let tip = Math.ceil(meal * .2);
    return meal + " + " + tip + " = " + (meal+tip);

}

console.log("Problem Eleven - Pokemon");

// Add the first number of the array [0] to the beginning value of 0
// Return that value as the first number in the array [0]
// Add that number to the 2nd number in the original array [1]
// Return that value in the second position [1] of the new array
// Continue until you get to the end of the original array.
// Display the new array.

function pokemon(numbers){

for(let i=0; i<numbers.length; i++){
    let numbers[i] = newNumber[i];
    newNumber[i+1] = numbers[i] + numbers[i+1];
}
    return(newNumber);

}

let test50 = pokemon([5, 10, 2, 6, 8]);

console.log(newNumber);
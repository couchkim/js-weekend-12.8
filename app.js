
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




// console.log("Problem Five - Contains Vowel");
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

// Input number and it returns an array of all numbers that divide into it evenly

function divisors(number){



}





console.log("Problem Nine - Weave");

// Accepts input string and number.  Replaces every xth character replaced with an x


function weave(phrase, number){


}

console.log("Problem Ten - Bonus");

// Input cost of meal, returns the tip and rounds up to nearest dollar.  20% tip.  Math.ceil


function bonus(meal){



}



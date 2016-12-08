
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



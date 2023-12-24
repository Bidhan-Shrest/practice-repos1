console.log("hello yaara")
/*
logical operation

-and (&&)
-or (||)
-not (!)
*/

const first = Number(prompt("Enter number between 1 to 10")); //"8"
const second = prompt("enter second number") ; //"8"
const ans = Number(first) + Number(second);
console.log(first, second);
if (first>second){
    alert(ans);
}
else {
    alert(first * second)
}

if (first>second && second==8){
    alert("hello ")
}
else {
    alert("bye")
}

if (first<second || second>5){
    alert("milyo")
}
else{ 
    alert("milena")
} 
console.log("aaba statement hai")

const num1=Number(prompt("enter num1"));
const num2=Number(prompt("enter num2"));
const operate=prompt("decision")

// for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
//     alert("please use number only");
//    } 

console.log(num1, num2);

if (isNaN(num1)&& isNaN(num2)){//logic to check user entered any characters.
    
    alert("enter a number");
    
}
else {
switch (operate)
{
    case "+":
    alert(num1 + num2);
    break;

    case "-":
    alert(num1 - num2);
    break;

    case "*":
    alert(num1 * num2);
    break;

    case "/":
    alert(num1 / num2);

    default:
        alert("non operatable");
        break;
}
}

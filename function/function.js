const num = Number(prompt("give me a number"));
let i = 1;
const mult = (num) => {
    return num * i;
};

while (i <= 10) {
    alert(mult(num));
    i++;
}


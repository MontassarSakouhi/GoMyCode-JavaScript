function reverseString(str) {
    let result = ""
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return console.log(result);
}

function charNum(str) {
    let num = 0;
    for (i in str) {
        if (str[i] != " " && str[i] != ",") {
            num++
        }
    }
    return console.log(num);
}

function upperCase(str) {
    let result = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i - 1] == " " || i == 0) {
            result += str[i].toUpperCase();

        }
        else result += str[i]
    }
    return console.log(result);
}

function minMax(arr) {
    let a = arr[0];
    let b = arr[0];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > a) { a = arr[i] };
        if (arr[i] < b) { b = arr[i] };
    }
    return console.log(([b, a]))
}

function arrSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]

    }
    return console.log(sum)
}
function filterArr(arr, func) {
    return arr.filter(func);
}
function factorial(num) {
    let n = 1
    for (let i = 1; i <= num; i++) {
        n *= i
    }
    return console.log(n)
}
function prime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) { return false }
    }
    return true
}
function fibonacci(x) {
    let i = 0;
    let arr = [0, 1];
    while (i < x) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        i++
    }
    return console.log(arr)

}
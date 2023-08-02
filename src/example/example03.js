function plus(p1, p2){
    console.log(p1 + p2);
}

const plusArrowFunc = (p1, p2) => {
    console.log(p1 + p2);
}

const multiplyArrowFunc = (p1, p2) => {
    console.log(p1 * p2);
}

const minusArrowFunc = (p1, p2) => {
    console.log(p1 - p2);
}

const divideArrowFunc = (p1, p2) => {
    console.log(p1 / p2);
}

plus(5, 10);
plusArrowFunc(5, 10);
minusArrowFunc(10, 5);
multiplyArrowFunc(10, 5);
divideArrowFunc(10, 5);
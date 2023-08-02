const array = ["a", "b", "c", "d", "e","f"];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}

console.log("=======================");

for(let element of array){
    console.log(element);
}

console.log("=======================");

const results = array.map((element) => {
    console.log(element);
    return element + "|";
});

console.log(results);
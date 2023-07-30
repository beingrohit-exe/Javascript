const person = {
    name : "Rohit",
    age : 25
}
let text = "";
for (let a in person){
    console.log(person[a])
}

const array = [10, 20, 30, 40, 50];
for (var a in array){
    console.log(array[a])
}
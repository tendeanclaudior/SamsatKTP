// let people = ["Greg", "Mary", "Devon", "James"];

//1
// console.log(people);

// 2
// people.forEach(
//     item => console.log(item)
// );

// 3
// people.shift();

// console.log(people);

// 4
// people.pop();

// console.log(people);

// 5
// people.unshift("Matt");

// console.log(people);

// 6
// people.push("Dio");

// console.log(people);

// 7
// for(let i =0; i< people.length; i++){
//     if(i > 1){
//         break;
//     }
//     console.log(people[i]);
// }

// 8
// people.slice(2);

// console.log(people);

// 9
// people = ["Greg", "Mary", "Devon", "James"];

// people.splice(2,1,"Elizabeth", "Artie");

// console.log(people);

// 10
// let withBob = people.concat("Bob");

// console.log(withBob);

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1
programming.languages.push("Go");

console.log(programming);

// 2
programming.difficulty = 7;

console.log(programming);

// 3
delete programming.jokes;

console.log(programming);

// 4
programming.isFun = true;

console.log(programming);

// 5
programming.languages.map(function (item) {
    for (i=0;i<programming.languages.length;i++)
    {
        console.log([i] + ` - ` + programming.languages[i]);
    }    
});
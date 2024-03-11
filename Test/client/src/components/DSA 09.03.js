//Question 1: Find the Average Age
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'David', age: 28 },
  ];
  
  //output : number eg 100

  const sumofages = people.reduce((total,person)=> total + person.age, 0 );

  const Averageage = sumofages/people.length;

  console.log(Averageage)

  //Question 2: Count the Number of Names Starting with "A"
const names = ["Alice", "Bob", "Anna", "Alex", "Charlie", "Amanda"];

const namestartingwithA = names.filter(name => name.startsWith("A"));

const numberofnamesstartingwithA = namestartingwithA.length

console.log(numberofnamesstartingwithA)

//Qustion 3:  Find the Two Numbers with the Maximum Sum
const numbers = [10, -2, 8, 15, -5, 20, 3];








  
  
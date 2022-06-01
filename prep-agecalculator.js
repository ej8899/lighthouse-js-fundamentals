//
// prep-agecalculator.js
//
// expected output: "Suzie is 32 years old."
//

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

function ageCalculator(name,dob,dnow)
{
  let age = dnow - dob;
  return(name + ' is ' + age + ' years old.');
}
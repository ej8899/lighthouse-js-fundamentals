const whichSchool  = function (age) {
  if(age < 13)
  {
    return('Elementary School');
  }
  if(age > 12 && age < 19)
  {
    return('Secondary School');
  }
  if(age > 18)
  {
    return('Lighthouse Labs');
  }
}






console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
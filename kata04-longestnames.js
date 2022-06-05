//
// kata04-longestnames.js
// 2022-06-04
// https://flex-web.compass.lighthouselabs.ca/activities/100
//


const instructorWithLongestName = function(instructors) 
{
  let theName='';
  let theCourse='';
  let finalCourse='';
  let finalName='';
  let nameLength=0;
  let longestName=0;

  for(const instructor of instructors)
  {
    theName=instructor.name;
    theCourse=instructor.course;

    nameLength=theName.length;
    if(nameLength > longestName)
    {
      // we have a name longer than the last
      longestName = nameLength;
      finalCourse = instructor.course;
      finalName=instructor.name;
      // console.log('longest: '+finalName); // debug - lets see what the longest is
    }
    
    // console.log(theName); // debug - we have names
    // console.log(nameLength);  //debug - we have name lengths!
  }
  // console.log(finalName+' '+finalCourse); // debug - we have what we need, 

  const finalValue={}; // set a blank return object
  finalValue.name=finalName; // build the return object with data
  finalValue.course=finalCourse;
    
  // console.log(finalValue.name);
  return(finalValue);
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

/*
expected output:

{name: "Jeremiah", course: "Web"}
{name: "Domascus", course: "Web"}

*/
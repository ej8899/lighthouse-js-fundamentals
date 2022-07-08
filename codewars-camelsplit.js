
console.log(solution('camelCasing'));

// complete the function
function solution(string) {
  let returnString='';
  let newString=string.split(/(?=[A-Z])/);
  

  for(let x=0;x<=newString.length-1;x++){
    console.log(newString[x]);
    returnString+=' ';
    returnString+=newString[x];
  }
  returnString=returnString.trim();
  return(returnString);
}

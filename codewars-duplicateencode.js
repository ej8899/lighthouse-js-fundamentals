
// show ( if individual character
// show ) if duplicated in array

console.log(duplicateEncode("(( @"));

function duplicateEncode(word){
  finalText='';
  word=word.toLowerCase();
  let array=word.split('');
  console.log(array);

  for(let x=0;x<array.length;x++){
    charStatus=0;
    for(let y=0;y<array.length;y++)
    {
      if(x!=y){
        if(array[x]===array[y]){
          charStatus=1;
        }
      }
    }
    if(charStatus===1)
    {
      finalText+=')';
    }
    else{
      finalText+='(';
    }
  }

  return(finalText);
}

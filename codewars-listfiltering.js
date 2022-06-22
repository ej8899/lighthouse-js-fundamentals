
// codewars - listfiltering

/*
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));

function filter_list(l) 
{
  newList=[];

  for(item of l)
  {
    // if typeof is int, add to the list, otherwise skip

    if (typeof item==='number')
    {
      newList.push(item);
    }
  }

  return (newList);
}
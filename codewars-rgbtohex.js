console.log(rgb(0, 0, -20)); // '000000')
console.log(rgb(300,255,255)); //, 'FFFFFF')


function rgb(r, g, b){
  // complete this function  
  
  return( zeroPad(r.toString(16),3)+zeroPad(g.toString(16),3)+zeroPad(b.toString(16),3) );
}

function zeroPad(num, places) {
  if(num<1) { num=0; }
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}
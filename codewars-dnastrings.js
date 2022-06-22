
/*
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
Your function receives one side of the DNA (string, except for Haskell); 
you need to return the other complementary side. 
DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

console.log(DNAStrand('ATTGC'));
console.log(DNAStrand('GTAT'));

function DNAStrand(dna)
{  
  let newDNA=dna.split('');
  let finalDNA='';
  let returnDNA=[];

  for (x=0;x<dna.length;x++)
  {
    finalDNA=newDNA[x];
    // console.log('found:'+finalDNA);
    if(newDNA[x]==='A') { finalDNA='T'; }
    if(newDNA[x]==='T') { finalDNA='A'; }
    if(newDNA[x]==='G') { finalDNA='C'; } 
    if(newDNA[x]==='C') { finalDNA='G'; } 
    // console.log('final:'+finalDNA);
    returnDNA.push(finalDNA);
  }

  return returnDNA.join('');
}

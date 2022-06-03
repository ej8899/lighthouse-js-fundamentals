//
// prep-trashtotreasure
// 2022-06-03
//
// https://flex-web.compass.lighthouselabs.ca/activities/77
//


console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

// usage: 
// trash = what we're adding to the system
// bins = what is 'existing' - so expected return would be +1 to whatever the 'trash' field reads for our object
function smartGarbage(trash, bins) 
{
  bins[trash] ++;
  return(bins);
}




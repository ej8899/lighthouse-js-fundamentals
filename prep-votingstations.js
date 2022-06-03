//
// prep-votingstations
//

//
// NOTE this is a set of OBJECTS - not a typical array!!
//
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));

// criteria: 
// capacity of at least 20, and be a school or community centre.
function chooseStations(stations)
{
  const goodStations = [];
  
  for(const station of stations)
  {
    const capacity = station[1];
    if( capacity >= 20)
    {
      // console.log(capacity);

      const type = station[2];
      if (type === 'school' || type === 'community centre')
      {
        // console.log(type);
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations;
}

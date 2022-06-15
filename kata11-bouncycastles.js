//
// kata11-bouncycastles.js
// 2022.07.09
// https://flex-web.compass.lighthouselabs.ca/activities/107
//


// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // V = 4/3 πr³
  return ((4/3) * PI * (radius*radius*radius));
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return (PI*(radius*radius)*(height/3) );
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // V = 0.5 X b X a X h.
  return (width * depth * height);
}

console.log(prismVolume(3, 4, 5) === 60);



//
// input is a CONST that contains an array of 'parts' that make up the CONST name.
// the parts refer to OBJECTS with type and sizes
//
const totalVolume = function (solids) 
{
  returnVolume=0;
  // loop thru input
  for (let x=0; x < solids.length; x++)
  {
    // console.log(solids[x]);
    if(solids[x].type === 'sphere')
    {
      returnVolume+=sphereVolume(solids[x].radius);
    }
    if(solids[x].type === 'cone')
    {
      returnVolume+=coneVolume(solids[x].radius,solids[x].height);
    }

  }
  // console.log('Total Volume: '+returnVolume); // DEBUG
  return returnVolume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
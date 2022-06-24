const vegetables = [
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
    },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
  ]
  
  const metric = 'redness';
  
  function judgeVegetable(vegetables, metric) 
  {
    let x = 0;
    let i = 0;
    for (let i = 0; i <= vegetables.redness; i++) {
      if (metric === "redness") {
        return vegetables[i].submitter;
      }
      else if (metric === "plumpness") {
        for (let x = 0; x <= vegetables.plumpness; x++){
          (metric === "plumpness");
        }
      }
    }
  return vegetables[x].submitter;
  }
  
  console.log(judgeVegetable(vegetables, metric));
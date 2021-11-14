function AssertObjectEqual(actualObj, expectedObj, testDescription){
  //check that we have two object
  if( (typeof actualObj !== 'object') || (typeof expectedObj !== 'object')){
    //console.log(actualObj);
    //console.log(expectedObj);
    //console.log(typeof actualObj !== 'object');
    //console.log(typeof expectedObj !== 'object');
    console.log('test failed: we need TWO objects'); return;
  }
    let strA = JSON.stringify(actualObj); //String() will not work here
    let strB = JSON.stringify(expectedObj);
  //check if actualObj has all the key/values in expectedObj
  for(let key in expectedObj){
    if(actualObj[key] !== expectedObj[key]){
      console.log(`FAILED [${testDescription}] expected "${strB}" but got "${strA}"`); return;
    }
  }
  console.log('Test passed')
}

function hottestAndColdestCities(dataArr){
  let resultObj = {}
  let coldestTemp = dataArr[0]['tem in C'];
  let coldestCity = dataArr[0]['city'];
  let hottestTemp = dataArr[0]['tem in C'];
  let hottestCity = dataArr[0]['city'];
  for(let x=0; x<dataArr.length; x++){
    //if(dataArr[x]['tem in C'] < coldest) coldest = dataArr[x]['tem in C'];
    //if(dataArr[x]['tem in C'] > hottest) hottest = dataArr[x]['tem in C'];
    let obj = dataArr[x];
    for(let key in obj){
      if(obj['tem in C'] < coldestTemp){
        coldestTemp = obj['tem in C'];
        coldestCity = obj['city']
      }
      if(obj['tem in C'] > hottestTemp){
        hottestTemp = obj['tem in C'];
        hottestCity = obj['city'];
      }
      // if(obj[key]===coldest) resultObj['coldestCity'] = dataArr[x]['city'];
      // if(obj[key]===hottest) resultObj['hottestCity'] = dataArr[x]['city'];
    }
  }
  resultObj['coldestCity'] = coldestCity
  resultObj['hottestCity'] = hottestCity
  //console.log(resultObj);
  // console.log(coldest);

  console.log('Coldest city = ' + coldestCity)
  console.log('Hottest city = ' + hottestCity)
  return resultObj;
}

//Input data
let weatherData = [
  {'city': 'Rome', 'tem in C': 27},
  {'city': 'Auckland', 'tem in C': 22},
  {'city': 'NYC', 'tem in C': 4},
  {'city': 'Nairobi', 'tem in C': 39},
  {'city': 'Mexico City', 'tem in C': 18},
  {'city': 'Singapore', 'tem in C': 39},
  {'city': 'Vladivostok', 'tem in C': 12}
];

//Testing the code
let actual = hottestAndColdestCities(weatherData);
let expected = {coldestCity: 'NYC', hottestCity: 'Nairobi'};
//let expected = {coldestCity: 'NYC', hottestCity: 'Singapore'};
AssertObjectEqual(actual, expected, 'hotCold');
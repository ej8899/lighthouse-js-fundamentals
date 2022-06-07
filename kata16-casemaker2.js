

// below is someone else's work - playing with the function in a function


const makeCase = function(input, caseInput) {
  let caseOutput = "";
  let output = ""
  const caseTypes = ["camel", "pascal", "snake", "kebab", "title", 
                     "vowel", "consonant", "upper", "lower"]
  const caseFunctions = [camelFun, pascalFun, snakeFun, kebabFun, titleFun, 
                          vowelFun, consonantFun, upperFun, lowerFun];
  function camelFun(input) {
    for (let i = 0; i < input.length; i++) {
      if (input[i - 1] === " ") {
        caseOutput += input[i].toUpperCase();
      } else if (input[i] === " ") {
        caseOutput += "";
      } else {
        caseOutput += input[i];
      }
    } return caseOutput;
  }
  function pascalFun(input) {  
    for (let i = 0; i < input.length; i++) {
      if (i == 0) {
        caseOutput += input[i].toUpperCase();
      } else if (input[i - 1] === " ") {
        caseOutput += input[i].toUpperCase();
      } else if (input[i] === " ") {
        caseOutput += "";
      } else {
        caseOutput += input[i];
      }
    } return caseOutput;
  }
  function snakeFun(input) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        caseOutput += "_";
      } else {
        caseOutput += input[i];
      }
    } return caseOutput;
  }
  function kebabFun(input) {
   for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        caseOutput += "-";
      } else {
        caseOutput += input[i];
      }
    } return caseOutput;
  }
  function titleFun(input) {
    for (let i = 0; i <input.length; i++) {
      if (i == 0) {
        caseOutput += input[i].toUpperCase();
      } else if (input[i - 1] === " ") {
        caseOutput += input[i].toUpperCase();
      } else {
        caseOutput += input[i];
      }
    } return caseOutput;
  }
  function vowelFun(input) {
    for (let i = 0 ;i < input.length; i++) {
      if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o"
          || input[i] === "u") {
          caseOutput += input[i].toUpperCase();
      } else {
          caseOutput += input[i];
        }
    } return caseOutput;
  }
  function consonantFun(input) {
    for (let i = 0 ;i < input.length; i++) {
      if (input[i] !== "a" && input[i] !== "e" && input[i] !== "i" && input[i] !== "o"
          && input[i] !== "u") {
          caseOutput += input[i].toUpperCase();
      } else {
          caseOutput += input[i];
        }
    } return caseOutput;
  }
  function upperFun(input) {
    for (let i = 0; i < input.length; i++) {
      caseOutput += input[i].toUpperCase();
    } return caseOutput;
  }
  function lowerFun(input) {
    for (let i = 0; i < input.length; i++) {
      caseOutput += input[i].toLowerCase();
    } return caseOutput; 
  }
  for (let i = 0; i < caseTypes.length; i++){
    if (typeof caseInput === "string") {
      if (caseInput === caseTypes[i]) {
        output = caseFunctions[i](input);
      }
    } else {
      for (c of caseInput) {
        if (c === caseTypes[i]) {
          output = caseFunctions[i](input);
          input = output;
        }
      }
    }
  }
  return output;
} 

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

console.log(camelFun('this is a test for camel case'));
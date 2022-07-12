console.log(validate('djI38D55'));;//, 'djI38D55 - Expected true');
console.log(validate('a2.d412'));;//, 'a2.d412 - Expected false');
console.log(validate('JHD5FJ53'));;//, 'JHD5FJ53 - Expected false');
console.log(validate('!fdjn345'));;//, '!fdjn345 - Expected false');
console.log(validate('jfkdfj3j'));//, 'jfkdfj3j - Expected false');
console.log(validate('123'));//, '123 - Expected false');
console.log(validate('abc'));;//, 'abc - Expected false');
console.log(validate('Password123'));//, 'Password123 - Expected true');


function validate(password) {
  var re = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{6,20}$/
  return re.test(password);
  
  
    return re.test(str);
}


/*
Minimum 8 characters {>>8,20}
Maximum 20 characters {8,>>20}
At least one uppercase character (?=.*[A-Z])
At least one lowercase character (?=.*[a-z])
At least one digit (?=.*\d)
At least one special character (?=.*[a-zA-Z >>!#$%&? "<<])[a-zA-Z0-9 >>!#$%&?<< ]
*/

// MORE DISCUSSION HERE:
// https://stackoverflow.com/questions/12090077/javascript-regular-expression-password-validation-having-special-characters


// ANOTHER working solution:
// return /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)[A-Za-z0-9]{6,}$/.test(password);
// (mine just allows for special chars)
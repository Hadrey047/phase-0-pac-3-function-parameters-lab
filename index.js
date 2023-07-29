function introduction (name){
    return "Hi, my name is ${name}"
}

function logTwoValues(value1, value2) {
  console.log(`The two values are ${value1} and ${value2}.`);
}

function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}

function sayHelloTo(firstName = "User") {
  console.log(`Hello, ${firstName}!`);
}

function introductionWithLanguageOptional(name, language) {
  console.log(`The two values are ${name} and ${language}.`);
}
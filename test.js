let p = 5;

const gog = () => {
  console.log("run");
};

if (3 < 5) {
  console.log("small");
  if (6 > 4) {
    console.log("ii");
  }
  //   p = "small";
  if (4 < 2) {
    console.log(true);
    p = true;
  } else {
    p = false;
    console.log(false);
  }
  gog();
} else {
  console.log("big");
}

// it is because another if is running and changing the value of state.value

// /^([A-Z | a-z])+$/; or /^([A-Z] | [a-z])+$/ or

// I think Stephen said don't change state directly only when you want to use it and i'm happy i remember even when it's been so long
// funny how OR can act as AND

// is nesting ifs allowed in a clean code or is there a better way
// num % num == 0 && e.data.length != 0 || num === 0

// const isInputValid = (input)=>{
//     let inputWithoutSpaces = input.replace(/\s/g,"")
//     return /^\d+$/.test(inputWithoutSpaces)

// }

// let userInput = prompt("Enter a number")

//     if(isInputValid(userInput)){
//         console.log("Valid Input!")
// }else{
//     console.log("Invalid Input. Only numbers are allowed")
//     }

// I learnt regex in minutes!!!!!

// use guard clause

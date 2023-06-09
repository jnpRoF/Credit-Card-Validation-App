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
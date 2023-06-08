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
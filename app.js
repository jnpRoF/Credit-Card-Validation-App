const allInputs = [...document.querySelectorAll(".inp")];
const cardDisplay = document.querySelector(".card_display");
const cardHolderNameInput = document.querySelector(".inp2");
const cvvInput = document.querySelector(".cvv_inp");
const cHolderName = document.querySelector(".cholder_name");
const cvvDisplay = document.querySelector(".white_strip");
const selectMonth = document.querySelector(".select1");
const selectYear = document.querySelector(".select2");
const cHolderExpire = document.querySelector(".cholder_exp");
const validBtn = document.querySelector(".valid_btn");
const cardType = document.querySelector(".card_type");
const cardType2 = document.querySelector(".card_type2");
// let cardNumber = [];
const state = {
  value: null,
  firstInput: null,
  secondInput: null,
  thirdInput: null,
  fourthInput: null,
  fifthInput: null,
  CARDNUMBER: [],
  CARDHOLDERNAME: "",
  CVV: "",
  expMonth: "",
  expYear: "",
  isValid: null,
};
const focusNext = () => {
  const currInput = document.activeElement;
  const currInputIndex = allInputs.indexOf(currInput);
  currInputIndex === allInputs.length - 1
    ? (nextInputIndex = allInputs.length - 1)
    : (nextInputIndex = currInputIndex + 1);
  const input = allInputs[nextInputIndex];
  input.focus();
};
const focusBack = () => {
  const currInput = document.activeElement;
  const currInputIndex = allInputs.indexOf(currInput);
  currInputIndex === 0
    ? (prevInputIndex = 0)
    : (prevInputIndex = currInputIndex - 1);
  const input = allInputs[prevInputIndex];
  input.focus();
  console.log(currInputIndex);
};
const setFirstInputNumber = (num) => {
  state.firstInput = num;
  state.CARDNUMBER = [
    state.firstInput,
    state.secondInput,
    state.thirdInput,
    state.fourthInput,
    state.fifthInput,
  ];
  console.log(state.firstInput);
};
const setSecondInputNumber = (num) => {
  state.secondInput = num;
  state.CARDNUMBER = [
    state.firstInput,
    state.secondInput,
    state.thirdInput,
    state.fourthInput,
    state.fifthInput,
  ];
};
const setThirdInputNumber = (num) => {
  state.thirdInput = num;
  state.CARDNUMBER = [
    state.firstInput,
    state.secondInput,
    state.thirdInput,
    state.fourthInput,
    state.fifthInput,
  ];
};
const setFourthInputNumber = (num) => {
  state.fourthInput = num;
  state.CARDNUMBER = [
    state.firstInput,
    state.secondInput,
    state.thirdInput,
    state.fourthInput,
    state.fifthInput,
  ];
};
const setFifthInputNumber = (num) => {
  state.fifthInput = num;
  state.CARDNUMBER = [
    state.firstInput,
    state.secondInput,
    state.thirdInput,
    state.fourthInput,
    state.fifthInput,
  ];
};

const displayCardNumber = () => {
  cardDisplay.innerHTML = state.CARDNUMBER.join(" ");
};

const handleValidity = ($valid) => {
  $valid === true
    ? (cardDisplay.innerHTML = "VALID")
    : (cardDisplay.innerHTML = "NOT VALID");
};
const renderValue = (e) => {
  e.target.value = state.value;
};

allInputs.forEach((eachInput) => {
  eachInput.addEventListener("keyup", (e) => {
    if (e.target.value !== "") {
      let num = e.target.value;
      //allow only numbers
      if (num % num == 0 || num == 0) {
        // console.log("WORKED");
        state.value = num;
        if (document.activeElement) {
          const currInputIndex = allInputs.indexOf(document.activeElement);
          const inputNumber = (setInputNumber, i) => {
            if (currInputIndex === i) {
              if (i == 0) {
                if (num.charAt(0) == 5) {
                  cardType.src = "./Images/mastercard.png";
                  cardType2.src = "./Images/verve.png";
                  cardType.style.display = "block";
                  cardType2.style.display = "block";
                } else if (num.charAt(0) == 4) {
                  cardType.style.display = "none";
                  cardType2.style.display = "block";
                  cardType2.src = "./Images/visa.png";
                } else {
                  cardType.style.display = "none";
                  cardType2.style.display = "none";
                }
              }
              setInputNumber(num);
              displayCardNumber();
            }
          };

          inputNumber(setFirstInputNumber, 0);
          inputNumber(setSecondInputNumber, 1);
          inputNumber(setThirdInputNumber, 2);
          inputNumber(setFourthInputNumber, 3);
          inputNumber(setFifthInputNumber, 4);
        }
        if (eachInput.value.length >= eachInput.maxLength) {
          focusNext();
        }

        if (allInputs[allInputs.length - 1].maxLength) {
        }
      } else {
        state.value = null;
        console.log("empty");
      }

      renderValue(e);
    } else {
      delComplete(setFirstInputNumber, 0);
      delComplete(setSecondInputNumber, 1);
      delComplete(setThirdInputNumber, 2);
      delComplete(setFourthInputNumber, 3);
      delComplete(setFifthInputNumber, 4);
      focusBack();
      console.log("ala");
    }
  });
});

const delComplete = (setInputNumber, i) => {
  const currInputIndex = allInputs.indexOf(document.activeElement);
  if (currInputIndex === i) {
    setInputNumber("");
    displayCardNumber();
  }
  // if (currInputIndex === i) {

  // }
};
const displayCardHolderDetails = (cHolderDetailsCont, CARDHOLDERDETAILS) => {
  cHolderDetailsCont.innerHTML = CARDHOLDERDETAILS;
};
cardHolderNameInput.addEventListener("input", (e) => {
  state.CARDHOLDERNAME = cardHolderNameInput.value;
  console.log(cHolderName.length);
  console.log(e.target.maxLength);
  displayCardHolderDetails(cHolderName, state.CARDHOLDERNAME);
});
cvvInput.addEventListener("input", () => {
  state.CVV = cvvInput.value;
  displayCardHolderDetails(cvvDisplay, state.CVV);
});

const cardFront = document.querySelector(".card_front");
const cardBack = document.querySelector(".card_back_cont");

cvvInput.addEventListener("focus", () => {
  cardFront.classList.add("front-rotate");
  cardBack.classList.add("back-rotate");
});

cvvInput.addEventListener("input", () => {
  cardFront.classList.add("front-rotate");
  cardBack.classList.add("back-rotate"); //extract to a function //to enable access to the cvv display on second thought
  if (cvvInput.value.length === cvvInput.maxLength) {
    setTimeout(() => {
      cardFront.classList.remove("front-rotate");
      cardBack.classList.remove("back-rotate");
    }, 2000);
  }
});

const renderExpiryDate = () => {
  cHolderExpire.innerHTML = `${state.expMonth}/${state.expYear}`;
};

selectMonth.addEventListener("input", () => {
  if (!selectMonth.value) {
    state.expMonth = "";
    renderExpiryDate();
  } else {
    const expMonth =
      `${+selectMonth.value + 1}`.length === 1 //use date format "01"
        ? //"0" + (+selectMonth.value + 1)
          `0${+selectMonth.value + 1}`
        : `${+selectMonth.value + 1}`;

    state.expMonth = expMonth;

    renderExpiryDate();
  }
});
selectYear.addEventListener("input", () => {
  const expYear = selectYear.value.slice(2, 4);
  state.expYear = expYear;
  renderExpiryDate();
});

const ccNumber = (digits, weight = 1, productSum = 0) => {
  const digitsArr = `${digits}`.split("");
  if (!digitsArr.length) return productSum % 10 === 0;
  const lastDigit = digitsArr[digitsArr.length - 1];

  const product = +lastDigit * weight;
  const getProductSum =
    `${product}`.length === 2
      ? +`${product}`.charAt(0) + +`${product}`.charAt(1)
      : product;
  productSum += getProductSum;
  digitsArr.pop();
  const arr = +digitsArr.join("");
  return ccNumber(
    arr === 0 ? "" : arr,
    (weight = weight === 1 ? 2 : 1),
    productSum
  );
};

validBtn.addEventListener("click", () => {
  if (!state.CARDNUMBER.length || +state.CARDNUMBER.join("") === 0) {
    alert("Please input a number.");
  } else {
    const isValid = ccNumber(+state.CARDNUMBER.join(""));
    state.isValid = isValid;
    handleValidity(state.isValid);
    console.log(+state.CARDNUMBER.join(""));
  }
});

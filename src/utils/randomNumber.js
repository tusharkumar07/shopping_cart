const randomNum = (digits) => {
  let num = "0123456789";
  let numSetter = "";
  let numId = "";

  for (let i = 0; i < digits; i++) {
    numSetter = num[Math.floor(Math.random() * num.length)];
    numId += numSetter;
  }

  return numId;
};

export default randomNum;

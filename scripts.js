function getPasswordLength() {
  const length = document.getElementById("length").value;
  return Number(length);
}

function getLengthAmount(ev) {
  document.getElementById("length-amount").value = ev.target.value;
}

document.getElementById("length").addEventListener("input", getLengthAmount);

function howStrong() {
  const strength = document.getElementById("length-amount").value
  if(strength === 4) {
    
  }
}

function getPasswordConditions() {
  const ids = ["lowercase", "uppercase", "numbers", "special"];
  const conditions = {};

  for (const id of ids) {
    const element = document.getElementById(id);
    conditions[id] = element.checked;
  }

  return conditions;
}

// function getPasswordConditions() {
//     const lowercase = document.getElementById("lowercase")
//     const uppercase = document.getElementById("uppercase")
//     const numbers = document.getElementById("numbers")
//     const special = document.getElementById("special")
// }

function getChars(lowercase) {
  const start = lowercase ? 97 : 65;
  let chars = [];

  for (let i = start; i < start + 26; i++) {
    chars.push(String.fromCharCode(i));
  }

  return chars;
}

function getNumbers() {
  const nums = [];

  for (let i = 0; i < 10; i++) {
    nums.push(i);
  }

  return nums;
}

const lowercaseChars = getChars(true);
const uppercaseChars = getChars(false);
const numbers = getNumbers();
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "(", ")"];

function generatePassword() {
  const length = getPasswordLength();
  const conditions = getPasswordConditions();

  const characters = [];
  if (conditions.lowercase) characters.push(...lowercaseChars);
  if (conditions.uppercase) characters.push(...uppercaseChars);
  if (conditions.numbers) characters.push(...numbers);
  if (conditions.special) characters.push(...special);

  if (characters.length === 0) {
    return alert("You must select at least one set of characters.");
  }

  let pwd = [];
  for (let i = 0; i < length; i++) {
    const randomIdx = Math.floor(Math.random() * characters.length);
    const char = characters[randomIdx];
    pwd.push(char);
  }
  const pwdString = pwd.join("");
  document.getElementById("password").innerHTML = "<p>" + pwdString + "</p>";
}

// console.log(length, conditions);

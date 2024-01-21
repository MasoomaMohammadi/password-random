let inputRange = document.querySelector("input[type=number]");
let inputpassword = document.querySelector("input[type=text]");
let checkboxes = document.querySelectorAll("input.form-check-input");
let copyBut = document.getElementById("copy");
let showpassword = document.getElementById("show");

//// set value
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";

/// varibalse
let password = "";
let charset = "";

// generate passwords
// inputpassword.setAttribute("type", "password");

function generatePassworde(length) {
  password = "";
  charset = "";
  if (length > 0 && length <= 50) {
    checked();
    for (let i = 0; i < length; i++) {
      password += charset[randomnumber()];
    }
  } else {
    alert(" out of range 🤣");
  }
}

function randomnumber() {
  return Math.floor(Math.random() * charset.length)
}

inputRange.addEventListener("change", function () {
  let length = inputRange.value;
  generatePassworde(length);
  inputpassword.value = password;
});

function checked() {
    checkboxes.forEach(function (box) {
        if (box.checked) {
            if (box.id == "uppercase") charset += uppercase;
            if (box.id == "lowercase") charset += lowercase;
            if (box.id == "number") charset += number;
            if (box.id == "symbol") charset += symbol;
        }
    })
}

window.addEventListener("DOMContentLoaded", function () {
   let length = inputRange.value;
  generatePassworde(length);
  inputpassword.value = password;
})

checkboxes.forEach(function (chik) {
  chik.addEventListener('change', function () {
    let count = 0;
    checkboxes.forEach(function (box) {
      if (box.checked) count++;
    });
    if (count == 0) {
      chik.checked = true;
    }
  })
})

copyBut.addEventListener("click", function () {
  inputpassword.select();
  document.execCommand("copy");
})

let check = true;
showpassword.addEventListener("click", function () {
    if (check) {
        inputpassword.removeAttribute("type");
        check = false;
    } else {
        inputpassword.setAttribute("type", "password");
        check = true;
    }

})

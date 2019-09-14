function checkPass() {
  var pass1 = document.getElementById("passwordField");
  var pass2 = document.getElementById("passwordCheckField");
  var message = document.getElementById("error-nwl");
  var goodColor = "#66cc66";
  var badColor = "#ff6666";

  if (pass1.value.length < 6) {
    //pass1.style.backgroundColor = badColor;
    message.style.color = badColor;
    message.innerHTML = " Вы должны ввести как минимум 6 символов!";
    return;
  } else {
    //pass1.style.backgroundColor = goodColor;
    message.style.color = goodColor;
  }

  if (pass1.value == pass2.value) {
    //pass2.style.backgroundColor = goodColor;
    message.style.color = goodColor;
    message.innerHTML = "Пароли совпадают!";
  } else {
    //pass2.style.backgroundColor = badColor;
    message.style.color = badColor;
    message.innerHTML = " Пароли не совпадают!";
  }
}

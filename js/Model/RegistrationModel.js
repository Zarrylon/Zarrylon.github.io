
function reg() {
  let name_s = document.getElementById("name").value;
  let email_s = document.getElementById("email").value;
  let pass_s = document.getElementById("pass").value;
  let sex_s = document.getElementById("gender").selectedOptions[0].textContent;
  let date_s = String(document.getElementById("date").value);

  let raw = localStorage.getItem("users");
  let users = raw ? JSON.parse(raw) : [];

  function isEmailExist(email) {
    return users.some((user) => user.email === email);
  }

  if (isEmailExist(email_s)) {
    alert("Такий email вже зареєстрований");
    return;
  }
  else {
    let newUser = {
      name: name_s,
      email: email_s,
      pass: pass_s,
      sex: sex_s,
      date: date_s
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Ви зареєструвалися!");
  }
}

function log() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  let raw = localStorage.getItem("users");
  let users = JSON.parse(raw);

  function isEmailExist(email) {
    return users.some((user) => user.email === email);
  }

  if (isEmailExist(email)) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        if (users[i].pass === pass) {
          alert("Ласкаво просимо!");
          sessionStorage.setItem('logged', '1');
          sessionStorage.setItem('name', users[i].name);
          sessionStorage.setItem('email', users[i].email);
          sessionStorage.setItem('gender', users[i].sex);
          sessionStorage.setItem('date', users[i].date);
        }
        else {
          alert("Невірний пароль");
          break;
        }
      }
    }
  }
  else {
    alert("Такий email не зареєстрований");
  }
}
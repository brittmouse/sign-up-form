const pwd = document.getElementById("pwd");
const pwd_confirm = document.getElementById("pwd_conf");

if (pwd.innerText === pwd_confirm.innerText) {
  pwd.classList.remove("error");
  pwd_confirm.classList.remove("error");
} else {
  pwd.classList.add("error");
  pwd_confirm.classList.add("error");
}

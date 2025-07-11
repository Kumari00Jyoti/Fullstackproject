let form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  console.log(typeof password);
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (password.length > 6) {
    return alert("password must be 6 letters");
  } else {
    alert("form submitted sucessefully");
  }

  let obj = {
    username,
    email,
    password,
    confirmPassword,
  };

  let userData = document.getElementById("userData");
  userData.style.backgroundColor = "green";
  userData.style.width = "50%";
  userData.style.borderRadius="10px"
  userData.style.height = "300px";
  userData.style.padding = "5px";
  userData.style.border = "1px solid black";
  userData.style.margin = "auto";
  userData.style.marginTop="30px"
  userData.style.height = "300px";
  userData.style.textAlign = "center";


  let h2 = document.createElement("h2");
  h2.innerText = obj.username;

  let p1 = document.createElement("p");
  p1.innerText = obj.email;

  let p2 = document.createElement("p");
  p2.innerText = obj.password;

  let p3 = document.createElement("p");
  p3.innerText = obj.confirmPassword;

  userData.append(h2, p1, p2, p3);
});

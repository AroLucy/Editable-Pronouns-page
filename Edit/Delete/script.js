Username = document.getElementById("Username")
Password = document.getElementById("Passworda")
Login = document.querySelector("form")

Login.addEventListener("submit", async function (e) {
    e.preventDefault()
    LoginPromise = await fetch("/DelUser", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({"Password": Password.value,"Username":Username.value}),
    })

    LoginJSON = await LoginPromise.json()
    if (LoginJSON.Status != "200") {
        alert("Login Failed\nError: " + LoginJSON.Status + " (" + LoginJSON.Message + ")")
    } else {
        sessionStorage.setItem("LoginResponse", JSON.stringify(LoginJSON));
        window.location = "/"
    }
})
Y = '<i class="fa-solid fa-heart"></i>';
J = '<i class="fa-solid fa-face-grin-tongue-wink"></i>';
C = '<i class="fa-solid fa-user-group"></i>';
O = '<i class="fa-solid fa-thumbs-up"></i>';
N = '<i class="fa-solid fa-thumbs-down"></i>';

LoginData = JSON.parse(sessionStorage.getItem("LoginResponse"))

if (LoginData.Expires < Date.now() || LoginData.Auth === undefined || LoginData == null) { window.location = "/Login"; }

const passform = document.getElementById("change-password");
passform.addEventListener("submit", async function (e) {
    e.preventDefault(); // prevent the default form submission behavior

    const formData = new FormData(passform); // get the form data
    const jsonObject = {};

    // convert the form data to a JSON object
    for (const [key, value] of formData.entries()) {
        jsonObject[key] = value;
    }

    jsonObject.AuthCode = sessionStorage.getItem("LoginResponse");

    // send the data to the server
    Resoponse = await fetch("/ChangePassword", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonObject),
    });
    Resoponse = await Resoponse.json();
    alert(Resoponse.Message);
    if (Resoponse.Status != "200") {
        alert(
            "Login Failed\nError: " +
                Resoponse.Status +
                " (" +
                Resoponse.Message +
                ")"
        );
    } else {
        sessionStorage.setItem("LoginResponse", JSON.stringify(Resoponse));
        alert("Password Updated")
    }
});

function ChangePage() {
    window.location = "/Edit"
}
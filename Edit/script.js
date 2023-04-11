Y = '<i class="fa-solid fa-heart"></i>';
J = '<i class="fa-solid fa-face-grin-tongue-wink"></i>';
C = '<i class="fa-solid fa-user-group"></i>';
O = '<i class="fa-solid fa-thumbs-up"></i>';
N = '<i class="fa-solid fa-thumbs-down"></i>';

LoginData = JSON.parse(sessionStorage.getItem("LoginResponse"))

if (LoginData.Expires < Date.now() || LoginData.Auth === undefined || LoginData == null)
    window.location = "/Login";

document.getElementById("AuthCode").value = sessionStorage.getItem("LoginResponse");

function addIdentity() {
    const div = document.createElement("div");
    div.classList.add("array");
    div.innerHTML =
        `<input type="text" name="identity_name` +
        Count +
        `" placeholder="Identity"><input type="file" id="identityFlag` +
        Count +
        `" name="identity_image` +
        Count +
        `" accept="image/*"/>
        <label for="identityFlag` +
        Count +
        `">Choose File</label>
        <input type="url" name="identity_url` +
        Count +
        `" placeholder="URL">
        <button type="button" class="remove-identity">Remove</button>
    `;
    Count++;
    const removeBtn = div.querySelector(".remove-identity");
    removeBtn.addEventListener("click", () => {
        div.remove();
    });
    const fileInput = div.querySelectorAll("input[type='file']")[0];
    fileInput.addEventListener("change", () => {
        console.log("Changed");
        const file = fileInput.files[0];
        const formData = new FormData();
        formData.append("image", file);
        formData.append("Data",JSON.stringify(LoginData))

        fetch("/imageUpload", {
            method: "POST",
            headers: {
                Auth: sessionStorage.getItem("Auth"),
            },
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
    });
    document.getElementById("identities-container").appendChild(div);
    return div;
}
function addNames() {
    const div = document.createElement("div");
    div.classList.add("array");
    div.innerHTML =
        `
    <input type="text" name="Name_name` +
        Count +
        `" placeholder="Name">
    <div class="Options">
        <input type="radio" name="Name_options` + Count + `" class="Y" id="Y` + Count + `" value="Y"/>
        <label for="Y` + Count + `">
            <i class="fa-solid fa-heart"></i>
        </label>
        
        <input type="radio" name="Name_options` + Count + `" class="J" id="J` + Count + `" value="J"/>
        <label for="J` + Count + `">
            <i class="fa-solid fa-face-grin-tongue-wink"></i>
        </label>
        
        <input type="radio" name="Name_options` + Count + `" class="C" id="C` + Count + `" value="C"/>
        <label for="C` + Count + `">
            <i class="fa-solid fa-user-group"></i>
        </label>
        
        <input type="radio" name="Name_options` + Count + `" class="O" id="O` + Count + `" value="O"/>
        <label for="O` + Count + `">
            <i class="fa-solid fa-thumbs-up"></i>
        </label>
        
        <input type="radio" name="Name_options` + Count + `" class="N" id="N` + Count + `" value="N"/>
        <label for="N` + Count + `">
            <i class="fa-solid fa-thumbs-down"></i>
        </label>
    </div>
    <button type="button" class="remove-array">Remove</button>
  `;
    Count++;
    // Add the remove button event listener
    const removeBtn = div.querySelector(".remove-array");
    removeBtn.addEventListener("click", () => {
        div.remove();
    });
    // Add the input fields to the form
    document.getElementById("names-container").appendChild(div);
    return div;
}
function addPronouns() {
    const div = document.createElement("div");
    div.classList.add("array");
    div.innerHTML =
        `
    <input type="text" name="Pronouns_name` +
        Count +
        `" placeholder="Pronouns">
    <div class="Options">
    
        <input type="radio" name="Pronouns_options` + Count +`" class="Y" id="Y` + Count + `" value="Y"/>
        <label for="Y` + Count + `">
            <i class="fa-solid fa-heart"></i>
        </label>

        <input type="radio" name="Pronouns_options` + Count +`" class="J" id="J` + Count + `" value="J"/>
        <label for="J` + Count + `">
            <i class="fa-solid fa-face-grin-tongue-wink"></i>
        </label>

        <input type="radio" name="Pronouns_options` + Count +`" class="C" id="C` + Count + `" value="C"/>
        <label for="C` + Count + `">
            <i class="fa-solid fa-user-group"></i>
        </label>
        <input type="radio" name="Pronouns_options` + Count +`" class="O" id="O` + Count + `" value="O"/>
        <label for="O` + Count + `">
            <i class="fa-solid fa-thumbs-up"></i>
        </label>
        <input type="radio" name="Pronouns_options` + Count +`" class="N" id="N` + Count + `" value="N"/>
        <label for="N` + Count + `">
            <i class="fa-solid fa-thumbs-down"></i>
        </label>
    </div>
    <button type="button" class="remove-array">Remove</button>
  `;
    Count++;
    // Add the remove button event listener
    const removeBtn = div.querySelector(".remove-array");
    removeBtn.addEventListener("click", () => {
        div.remove();
    });
    // Add the input fields to the form
    document.getElementById("pronouns-container").appendChild(div);
    return div;
}
function addHonorifics() {
    const div = document.createElement("div");
    div.classList.add("array");
    div.innerHTML =
        `
    <input type="text" name="Honorifics_name` +
        Count +
        `" placeholder="Honorifics">
    <div class="Options">
        <input type="radio" name="Honorifics_options` + Count + `" class="Y" id="Y` + Count + `" value="Y"/>    <label for="Y` + Count + `">
        <i class="fa-solid fa-heart"></i>
    </label>
    <input type="radio" name="Honorifics_options` + Count + `" class="J" id="J` + Count + `" value="J"/>

    <label for="J` + Count + `">
        <i class="fa-solid fa-face-grin-tongue-wink"></i></label>
        <input type="radio" name="Honorifics_options` + Count + `" class="C" id="C` + Count + `" value="C"/>    <label for="C` + Count + `">
        <i class="fa-solid fa-user-group"></i>
    </label>
        <input type="radio" name="Honorifics_options` + Count + `" class="O" id="O` + Count + `" value="O"/>    <label for="O` + Count + `">
        <i class="fa-solid fa-thumbs-up"></i>
    </label>
        <input type="radio" name="Honorifics_options` + Count + `" class="N" id="N` + Count + `" value="N"/>    <label for="N` + Count + `">
        <i class="fa-solid fa-thumbs-down"></i>
    </label>
</div>
    <button type="button" class="remove-array">Remove</button>
  `;
    Count++;
    // Add the remove button event listener
    const removeBtn = div.querySelector(".remove-array");
    removeBtn.addEventListener("click", () => {
        div.remove();
    });
    // Add the input fields to the form
    document.getElementById("honorifics-container").appendChild(div);
    return div;
}
function addPerson() {
    const div = document.createElement("div");
    div.classList.add("array");
    div.innerHTML =
        `
    <input type="text" name="Person_name` +
        Count +
        `" placeholder="Person">
    <div class="Options">
        <input type="radio" name="Person_options` + Count + `" class="Y" id="Y` + Count + `" value="Y"/>    <label for="Y` + Count + `">
        <i class="fa-solid fa-heart"></i>
    </label>
        <input type="radio" name="Person_options` + Count + `" class="J" id="J` + Count + `" value="J"/>    <label for="J` + Count + `">
        <i class="fa-solid fa-face-grin-tongue-wink"></i>
    </label>
        <input type="radio" name="Person_options` + Count + `" class="C" id="C` + Count + `" value="C"/>    <label for="C` + Count + `">
        <i class="fa-solid fa-user-group"></i>
    </label>
        <input type="radio" name="Person_options` + Count + `" class="O" id="O` + Count + `" value="O"/>    <label for="O` + Count + `">
        <i class="fa-solid fa-thumbs-up"></i>
    </label>
        <input type="radio" name="Person_options` + Count + `" class="N" id="N` + Count + `" value="N"/>    <label for="N` + Count + `">
        <i class="fa-solid fa-thumbs-down"></i>
    </label>
    </div>  
    <button type="button" class="remove-array">Remove</button>
  `;
    Count++;
    // Add the remove button event listener
    const removeBtn = div.querySelector(".remove-array");
    removeBtn.addEventListener("click", () => {
        div.remove();
    });
    // Add the input fields to the form
    document.getElementById("person-container").appendChild(div);
    return div;
}
function addCompliments() {
    const div = document.createElement("div");
    div.classList.add("array");
    div.innerHTML =
        `
    <input type="text" name="Compliments_name` +
        Count +
        `" placeholder="Compliment">
    <div class="Options">
        <input type="radio" name="Compliments_options` + Count + `" class="Y" id="Y` + Count + `" value="Y"/>    <label for="Y` + Count + `">
        <i class="fa-solid fa-heart"></i>
    </label>
        <input type="radio" name="Compliments_options` + Count + `" class="J" id="J` + Count + `" value="J"/>    <label for="J` + Count + `">
        <i class="fa-solid fa-face-grin-tongue-wink"></i>
    </label>
        <input type="radio" name="Compliments_options` + Count + `" class="C" id="C` + Count + `" value="C"/>    <label for="C` + Count + `">
        <i class="fa-solid fa-user-group"></i>
    </label>
        <input type="radio" name="Compliments_options` + Count + `" class="O" id="O` + Count + `" value="O"/>    <label for="O` + Count + `">
        <i class="fa-solid fa-thumbs-up"></i>
    </label>
        <input type="radio" name="Compliments_options` + Count + `" class="N" id="N` + Count + `" value="N"/>    <label for="N` + Count + `">
        <i class="fa-solid fa-thumbs-down"></i>
    </label>
</div>
    <button type="button" class="remove-array">Remove</button>
  `;
    Count++;
    // Add the remove button event listener
    const removeBtn = div.querySelector(".remove-array");
    removeBtn.addEventListener("click", () => {
        div.remove();
    });
    // Add the input fields to the form
    document.getElementById("compliments-container").appendChild(div);
    return div;
}
function addRelationship() {
    const div = document.createElement("div");
    div.classList.add("array");
    div.innerHTML =
        `
    <input type="text" name="Relationship_name` +
        Count +
        `" placeholder="Relationship">
    <div class="Options">
        <input type="radio" name="Relationship_options` + Count + `" class="Y" id="Y` + Count + `" value="Y"/>    <label for="Y` + Count + `">
        <i class="fa-solid fa-heart"></i>
    </label>
        <input type="radio" name="Relationship_options` + Count + `" class="J" id="J` + Count + `" value="J"/>    <label for="J` + Count + `">
        <i class="fa-solid fa-face-grin-tongue-wink"></i>
    </label>
        <input type="radio" name="Relationship_options` + Count + `" class="C" id="C` + Count + `" value="C"/>    <label for="C` + Count + `">
        <i class="fa-solid fa-user-group"></i>
    </label>
        <input type="radio" name="Relationship_options` + Count + `" class="O" id="O` + Count + `" value="O"/>    <label for="O` + Count + `">
        <i class="fa-solid fa-thumbs-up"></i>
    </label>
        <input type="radio" name="Relationship_options` + Count + `" class="N" id="N` + Count + `" value="N"/>    <label for="N` + Count + `">
        <i class="fa-solid fa-thumbs-down"></i>
    </label>
</div>
    <button type="button" class="remove-array">Remove</button>
  `;
    Count++;
    // Add the remove button event listener
    const removeBtn = div.querySelector(".remove-array");
    removeBtn.addEventListener("click", () => {
        div.remove();
    });
    // Add the input fields to the form
    document.getElementById("relationship-container").appendChild(div);
    return div;
}
Count = 0;

async function FillInfo() {
    InfoPromise = await fetch(`/Info/${JSON.parse(sessionStorage.getItem('LoginResponse')).UserID}`);
    InfoJson = await InfoPromise.json();

    document.getElementById("name").value = InfoJson.Name;
    BirthDay = InfoJson.Birthday.split("/");
    document.getElementById("birthday").value =
        BirthDay[2] + "-" + BirthDay[0] + "-" + BirthDay[1];
    document.getElementById("BGColor").value = InfoJson.BGColor;
    document.getElementById("TextColor").value = InfoJson.TextColor;

    for (let i = 0; i < InfoJson.Identities.length; i++) {
        Identities = addIdentity();
        Identities.querySelector("input[name='identity_name" + i + "']").value =
            InfoJson.Identities[i][0];
        //Identities.querySelector("input[name='identity_image"+ i +"']").files = new File([image_url_to_blob(InfoJson.Identities[i][1])], "Landon-PFP." + InfoJson.Identities[i][1].split(".")[InfoJson.Identities[i][1].split(".").length - 1])
        Identities.querySelector("input[name='identity_url" + i + "']").value =
            InfoJson.Identities[i][2];
    }
    for (let i = 0; i < InfoJson.Names.length; i++) {
        Name = addNames();
        FillForm("Name", Name, InfoJson.Names[i], Count - 1);
    }
    for (let i = 0; i < InfoJson.Pronouns.length; i++) {
        Pronouns = addPronouns();
        FillForm("Pronouns", Pronouns, InfoJson.Pronouns[i], Count - 1);
    }
    for (let i = 0; i < InfoJson.Honerifics.length; i++) {
        Honorifics = addHonorifics();
        FillForm(
            "Honorifics",
            Honorifics,
            InfoJson.Honerifics[i],
            Count - 1
        );
    }
    for (let i = 0; i < InfoJson.Person.length; i++) {
        Person = addPerson();
        FillForm("Person", Person, InfoJson.Person[i], Count - 1);
    }
    for (let i = 0; i < InfoJson.Compliments.length; i++) {
        Compliments = addCompliments();
        FillForm(
            "Compliments",
            Compliments,
            InfoJson.Compliments[i],
            Count - 1
        );
    }
    for (let i = 0; i < InfoJson.Relationship.length; i++) {
        Relationship = addRelationship();
        FillForm(
            "Relationship",
            Relationship,
            InfoJson.Relationship[i],
            Count - 1
        );
    }
    document.getElementById("Self").removeAttribute("hidden")
    document.title = "Edit " + InfoJson.Name + "'s Page"
}

function FillForm(Name, Element, Data, Counter) {
    Element.querySelector(
        "input[name='" + Name + "_name" + Counter + "']"
    ).value = Data[0];
    switch (Data[1]) {
        case "Y":
            Element.querySelector("input[value='Y']").checked = true;
            break;
        case "J":
            Element.querySelector("input[value='J']").checked = true;
            break;
        case "C":
            Element.querySelector("input[value='C']").checked = true;
            break;
        case "O":
            Element.querySelector("input[value='O']").checked = true;
            break;
        case "N":
            Element.querySelector("input[value='N']").checked = true;
            break;
        default:
            break;
    }
}

FillInfo();

document.getElementById("profile-pic").addEventListener("change", () => {
    fileInput = document.getElementById("profile-pic");
    console.log("Changed");
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("image", file);
    formData.append("Data",JSON.stringify(LoginData))

    fetch("/imageUpload", {
        method: "POST",
        headers: {
        },
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
});

function uploadimage(file) {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("Data",JSON.stringify(LoginData))

    fetch("/imageUpload", {
        method: "POST",
        headers: {
        },
        body: formData,
    });
}
const form = document.getElementById("edit-form");
form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent the default form submission behavior

    const formData = new FormData(form); // get the form data
    const jsonObject = {};
    const fileInputs = document.querySelectorAll('input[type="file"]');

    // convert the form data to a JSON object
    for (const [key, value] of formData.entries()) {
        jsonObject[key] = value;
    }

    for (let i = 0; i < fileInputs.length; i++) {
        filename = fileInputs[i].value.replace("C:\\fakepath\\", "");
        filename = filename.replace("/fakepath", "");
        jsonObject[fileInputs[i].name] = filename;
    }

    jsonObject.Timezone = document.location.hash.split("#")[1]

    // send the data to the server
    fetch("/SaveData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonObject),
    })
        .then((response) => {
        a = response
        if (response.status == 200) {
            alert("Saved")
        } else {
            alert("An error occured: 401 (Unauthorized)")
            window.location = "/Login"
        }
})
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
});

function HideAll() {
    Elements = document.querySelectorAll(".Viewing")
    for (let i = 0; i < Elements.length; i ++) {
        Elements[i].classList.remove("Viewing")
    }
}
function ChangePage(Element) {
    HideAll()
    document.getElementById(Element).classList.add("Viewing")
}

function ChangePagePassword() {
    HideAll()
    window.location = "/Edit/Password"
}

document.getElementById("MenuBlur").addEventListener("click", ()=> {
    document.getElementById("MenuBlur").style.display = "none"
    document.getElementById("MobileMenu").style.display = "none"
})

document.getElementById("MobileHamburger").addEventListener("click", ()=> {
    document.getElementById("MenuBlur").style.display = "block"
    document.getElementById("MobileMenu").style.display = "block"
})

document.getElementById("SelfD").setAttribute("checked","")
document.getElementById("SelfM").setAttribute("checked","")

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
document.getElementById("DropdownBtn").addEventListener("click", function (e) {
    e.preventDefault()
    document.getElementById("myDropdown").classList.toggle("show");
})
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  } 
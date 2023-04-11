Y = '<i class="fa-solid fa-heart"></i>';
J = '<i class="fa-solid fa-face-grin-tongue-wink"></i>';
C = '<i class="fa-solid fa-user-group"></i>';
O = '<i class="fa-solid fa-thumbs-up"></i>';
N = '<i class="fa-solid fa-thumbs-down"></i>';

function CreateElement(Data) {
    Element = document.createElement("li");
    Element.classList.toggle("OtherItem");
    switch (Data[1]) {
        case "Y":
            Icon = Y;
            Element.classList.toggle("Y");
            break;
        case "J":
            Icon = J;
            Element.classList.toggle("J");
            break;
        case "C":
            Icon = C;
            Element.classList.toggle("C");
            break;
        case "O":
            Icon = O;
            Element.classList.toggle("O");
            break;
        case "N":
            Icon = N;
            Element.classList.toggle("N");
            break;
        default:
            Icon = "";
            break;
    }
    Element.innerHTML = Icon + " " + Data[0];
    return Element;
}

function calculateAge(birthday) {
    // birthday is a date
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

async function GetTime() {
    TimePromise = await fetch(
        "http://worldtimeapi.org/api/timezone/Europe/London"
    );
    TimeJSON = await TimePromise.json();
    return TimeJSON;
}

async function UpdateTime() {
    CurrentTime = new Date();
    Hour = CurrentTime.getUTCHours();
    Min = CurrentTime.getMinutes();
    OffsetH = parseInt(TimeJSON.utc_offset[(1, 2)]);
    OffsetM = parseInt(TimeJSON.utc_offset[(4, 5)]);
    Hour += OffsetH;
    Min += OffsetM;
    if (Min > 59) {
        Min -= 60;
        Hour += 24;
    }
    if (Hour > 23) Hour -= 24;
    CurrentTime = ("0" + Hour).slice(-2) + ":" + ("0" + Min).slice(-2);
    document.getElementById("UpdatingTime").innerHTML = CurrentTime;
    document.getElementById("Offset").innerHTML =
        "(UTC" + TimeJSON.utc_offset + ")";
}

async function GetInfo() {
    InfoJson = ${Data};
    TimePromise = await fetch(
        `http://worldtimeapi.org/api/timezone/${InfoJson.Timezone}`
    );
    TimeJSON = await TimePromise.json();
    document.getElementById("Name").innerHTML = InfoJson.Name;
    Birthday = new Date(InfoJson.Birthday);
    document.getElementById("Age").innerHTML =
        "<i class='fa-solid fa-birthday-cake'></i> Age: " +
        calculateAge(Birthday);
    document.getElementById("PFP").src = InfoJson.ProfilePic
    document.getElementById("Favicon").href = InfoJson.ProfilePic
    document.getElementById("Favicon").type = "image/" + InfoJson.ProfilePic.split('.')[InfoJson.ProfilePic.split('.').length - 1]

    for (let i = 0; i < InfoJson.Identities.length; i++) {
        Identity = document.createElement("li");
        Identity.setAttribute("class", "Identity");
        Identity.innerHTML =
            '<a href="' +
            InfoJson.Identities[i][2] +
            '"><img src="' +
            InfoJson.Identities[i][1] +
            '">' +
            InfoJson.Identities[i][0] +
            "</a>";
        document.getElementById("IDList").appendChild(Identity);
    }
    for (let i = 0; i < InfoJson.Names.length; i++) {
        Name = CreateElement(InfoJson.Names[i]);
        document.getElementById("NameList").appendChild(Name);
    }
    for (let i = 0; i < InfoJson.Pronouns.length; i++) {
        Pronouns = CreateElement(InfoJson.Pronouns[i]);
        document.getElementById("PronounsList").appendChild(Pronouns);
    }

    for (let i = 0; i < InfoJson.Honerifics.length; i++) {
        Honerifics = CreateElement(InfoJson.Honerifics[i]);
        document.getElementById("Honorifics").appendChild(Honerifics);
    }
    for (let i = 0; i < InfoJson.Person.length; i++) {
        Person = CreateElement(InfoJson.Person[i]);
        document.getElementById("Person").appendChild(Person);
    }
    for (let i = 0; i < InfoJson.Compliments.length; i++) {
        Compliments = CreateElement(InfoJson.Compliments[i]);
        document.getElementById("Compliments").appendChild(Compliments);
    }
    for (let i = 0; i < InfoJson.Relationship.length; i++) {
        Relationship = CreateElement(InfoJson.Relationship[i]);
        document.getElementById("Relationship").appendChild(Relationship);
    }
    document.title = InfoJson.Name + "'s Pronouns Page";
    colors = document.createElement("style")
    colors.innerHTML = ":root{--text: " + InfoJson.TextColor + ";--bg: " + InfoJson.BGColor + "; --bgImage: url('" + InfoJson.BackgroundImage + "');}"
    document.body.appendChild(colors)
    return TimeJSON
}

TimeJSON = GetTime();
TimeJSON = GetInfo()
setInterval(UpdateTime, 1000);

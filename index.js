const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const fs = require("fs");
const multer = require("multer");
const { json } = require("express");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/"));

app.get("/:User", (req,res) => {
    const User = req.params.User;
    try {
        Userdata = fs.readFileSync(`${__dirname}/Users/${User}.json`)
        Data = JSON.parse(Userdata)
        return res.send(`<!DOCTYPE html><html><head><title id="PageTitle">Prounouns Page</title><meta name="viewport" content="width=device-width"><style>@import url('https://fonts.googleapis.com/css2?family=La+Belle+Aurore&family=Noto Sans');.Identity a,body{color:var(--text)}#Names,#Self{display:flex;border-right:1px solid #fff2}#Words,body{display:grid}#WordsTitle,.Identity,.Identity>{height:fit-content}#Compliments,#Honorifics,#Person,#Relationship{text-align:center;width:25vw;padding:0;margin:0}body{height:100vh;grid-template-areas:"Self   Identities" "Names    Pronouns" "Words       Words";font-family:'Tilt Neon',sans-serif;background-color:var(--bg);margin:0;grid-template-columns:calc(100vw / 2);background-image:var(--bgImage);background-size:cover;background-position:center;background-repeat:no-repeat;background-attachment:fixed}*{font-family:'Noto Sans',sans-serif;text-shadow:-1px -1px 0 var(--bg),1px -1px 0 var(--bg),-1px 1px 0 var(--bg),1px 1px 0 var(--bg)}.InfoSection{display:flex;flex-direction:column}#Self{grid-area:Self;padding:1em;justify-content:flex-end;align-items:flex-end}#NamePFP{display:flex;align-items:center}#PFP{border-radius:100%;height:6em}#Name{margin-left:2em}#Time,#Time *{display:inline}#Offset{mix-blend-mode:soft-light;font-size:.75em}#Identities{grid-area:Identities;display:flex;align-content:flex-start;justify-content:flex-end}#IDList,.Identity,.Identity *>img{display:inline-block}#IDList{max-width:26em;padding:0}.Identity{padding:0;margin:0}.Identity a{text-decoration:none}.Identity *>img{height:1em;width:1.5em;margin-left:1em;border-radius:5px}.Identity>{display:inline;margin-left:.2em}#Names{grid-area:Names;flex-direction:column;text-align:right;padding-right:1em}#NameList{margin:0}.OtherList{list-style:none}.Y{color:#ffb7f3}.J{color:#fffd7e}.C{color:#ff9494}.O{color:#fff}.N{color:#575757}#Pronouns{grid-area:Pronouns;margin-left:1em}#PronounsList{padding:0;margin:0}#Words{grid-area:Words;text-align:center;grid-template-areas:"Heading    Heading     Heading     Heading" "Honorifics Person Compliments Relationship" "Honorifics Person Compliments Relationship"}#WordsTitle{grid-area:Heading}#Honorifics{grid-area:Honorifics}#Person{grid-area:Person}#Compliments{grid-area:Compliments}#Relationship{grid-area:Relationship}@media (pointer:none),(pointer:coarse){#Names,#Self{display:flex}#Words,body{display:grid}#Identities,#Words{text-align:center;align-content:center}body{height:100vh;grid-template-areas:"Self Self" "Identities Identities" "Names      Pronouns  " "Words Words";font-family:"Tilt Neon";background-color:var(--bg);color:var(--text);margin:0;grid-template-columns:calc(100vw / 2)}#Self{grid-area:Self;padding:1em;justify-content:initial;align-items:initial;border-right:0}#Identities{justify-content:center}#Names{grid-area:Names;flex-direction:column;text-align:left;border-right:1px solid #fff2;margin:0 0 0 1em;padding:0}#NameList{margin:0;padding:0}#Words{grid-area:Words;grid-template-areas:"Heading     Heading     " "Honorifics  Person      ""Compliments Relationship";justify-content:space-around;width:100vw}#Words>*{padding-bottom:1em}}:root{--bg:#2a292e;--text:#fff;--bgImage:""}#OldStyle{appearance:none;background:transparent;border:none;color:var(--text);width:fit-content;backdrop-filter:blur(5px);border-radius:1em;position:absolute;bottom:0;padding:1em;}#OldStyle2{appearance:none;background:transparent;border:none;color:var(--text);width:fit-content;backdrop-filter:blur(5px);border-radius:1em;position:absolute;bottom:0;padding:1em;}</style><link id="Favicon" rel="icon" type="image/" href=""></head><body><section class="InfoSection" id="Self"><div id="NamePFP"><img src="" alt="" id="PFP"><h1 id="Name"></h1></div><p id="Age">Age:</p><span id="Time"><i class="fa-solid fa-clock"></i><p> It's </p><p id="UpdatingTime"></p><p> in my timezone </p><p id="Offset">(UTC+00:00)</p></span></section><section class="InfoSection" id="Identities"><ul id="IDList"></ul></section><section class="InfoSection" id="Names"><h1><i class="fa-solid fa-signature"></i>Names</h1><ul class="OtherList" id="NameList"></ul></section><section class="InfoSection" id="Pronouns"><h1><i class="fa-solid fa-tags"></i>Pronouns</h1><ul class="OtherList" id="PronounsList"></ul></section><section class="InfoSection" id="Words"><h1 id="WordsTitle"><i class="fa-solid fa-scroll"></i>Words</h1><ul class="OtherList" id="Honorifics">Honorifics</ul><ul class="OtherList" id="Person">Person and family descriptions</ul><ul class="OtherList" id="Compliments">Compliments</ul><ul class="OtherList" id="Relationship">Relationship descriptions</ul></section><button onclick="window.location = '/'" id="OldStyle">Go Home</button></body><script src="https://kit.fontawesome.com/c6b06c2030.js" crossorigin="anonymous"></script><script>function CreateElement(e){switch(Element=document.createElement("li"),Element.classList.toggle("OtherItem"),e[1]){case"Y":Icon=Y,Element.classList.toggle("Y");break;case"J":Icon=J,Element.classList.toggle("J");break;case"C":Icon=C,Element.classList.toggle("C");break;case"O":Icon=O,Element.classList.toggle("O");break;case"N":Icon=N,Element.classList.toggle("N");break;default:Icon=""}return Element.innerHTML=Icon+" "+e[0],Element}function calculateAge(e){var n=Date.now()-e,t=new Date(n);return Math.abs(t.getUTCFullYear()-1970)}async function GetTime(){return TimePromise=await fetch(\`http://worldtimeapi.org/api/timezone/Europe/London\`),TimeJSON=await TimePromise.json(),TimeJSON}async function UpdateTime(){CurrentTime=new Date,Hour=CurrentTime.getUTCHours(),Min=CurrentTime.getMinutes(),OffsetH=parseInt(TimeJSON.utc_offset[2]),OffsetM=parseInt(TimeJSON.utc_offset[5]),Hour+=OffsetH,Min+=OffsetM,Min>59&&(Min-=60,Hour+=24),Hour>23&&(Hour-=24),CurrentTime=("0"+Hour).slice(-2)+":"+("0"+Min).slice(-2),document.getElementById("UpdatingTime").innerHTML=CurrentTime,document.getElementById("Offset").innerHTML="(UTC"+TimeJSON.utc_offset+")"}async function GetInfo(){InfoJson=${JSON.stringify(Data)},TimePromise = await fetch(\`http://worldtimeapi.org/api/timezone/\${InfoJson.Timezone}\`);TimeJSON = await TimePromise.json();document.getElementById("Name").innerHTML=InfoJson.Name,Birthday=new Date(InfoJson.Birthday),document.getElementById("Age").innerHTML="<i class='fa-solid fa-birthday-cake'></i> Age: "+calculateAge(Birthday),document.getElementById("PFP").src=InfoJson.ProfilePic,document.getElementById("Favicon").href=InfoJson.ProfilePic,document.getElementById("Favicon").type="image/"+InfoJson.ProfilePic.split(".")[InfoJson.ProfilePic.split(".").length-1];for(let e=0;e<InfoJson.Identities.length;e++)Identity=document.createElement("li"),Identity.setAttribute("class","Identity"),Identity.innerHTML='<a href="'+InfoJson.Identities[e][2]+'"><img src="'+InfoJson.Identities[e][1]+'">'+InfoJson.Identities[e][0]+"</a>",document.getElementById("IDList").appendChild(Identity);for(let e=0;e<InfoJson.Names.length;e++)Name=CreateElement(InfoJson.Names[e]),document.getElementById("NameList").appendChild(Name);for(let e=0;e<InfoJson.Pronouns.length;e++)Pronouns=CreateElement(InfoJson.Pronouns[e]),document.getElementById("PronounsList").appendChild(Pronouns);for(let e=0;e<InfoJson.Honerifics.length;e++)Honerifics=CreateElement(InfoJson.Honerifics[e]),document.getElementById("Honorifics").appendChild(Honerifics);for(let e=0;e<InfoJson.Person.length;e++)Person=CreateElement(InfoJson.Person[e]),document.getElementById("Person").appendChild(Person);for(let e=0;e<InfoJson.Compliments.length;e++)Compliments=CreateElement(InfoJson.Compliments[e]),document.getElementById("Compliments").appendChild(Compliments);for(let e=0;e<InfoJson.Relationship.length;e++)Relationship=CreateElement(InfoJson.Relationship[e]),document.getElementById("Relationship").appendChild(Relationship);document.title=InfoJson.Name+"'s Pronouns Page",colors=document.createElement("style"),colors.innerHTML=":root{--text: "+InfoJson.TextColor+";--bg: "+InfoJson.BGColor+"; --bgImage: url('"+InfoJson.BackgroundImage+"');}",document.body.appendChild(colors);return TimeJSON}Y='<i class="fa-solid fa-heart"></i>',J='<i class="fa-solid fa-face-grin-tongue-wink"></i>',C='<i class="fa-solid fa-user-group"></i>',O='<i class="fa-solid fa-thumbs-up"></i>',N='<i class="fa-solid fa-thumbs-down"></i>',TimeJSON=GetTime(),TimeJSON=GetInfo(),setInterval(UpdateTime,1e3);</script></html>`)
    } catch {
        Data = {"Name": "User Not Found"}
        return res.send(`<!DOCTYPE html><html><head><title id="PageTitle">Prounouns Page</title><meta name="viewport" content="width=device-width"><style>@import url('https://fonts.googleapis.com/css2?family=La+Belle+Aurore&family=Noto Sans');.Identity a,body{color:var(--text)}#Names,#Self{display:flex;border-right:1px solid #fff2}#Words,body{display:grid}#WordsTitle,.Identity,.Identity>{height:fit-content}#Compliments,#Honorifics,#Person,#Relationship{text-align:center;width:25vw;padding:0;margin:0}body{height:100vh;grid-template-areas:"Self   Identities" "Names    Pronouns" "Words       Words";font-family:'Tilt Neon',sans-serif;background-color:var(--bg);margin:0;grid-template-columns:calc(100vw / 2);background-image:var(--bgImage);background-size:cover;background-position:center;background-repeat:no-repeat;background-attachment:fixed}*{font-family:'Noto Sans',sans-serif;text-shadow:-1px -1px 0 var(--bg),1px -1px 0 var(--bg),-1px 1px 0 var(--bg),1px 1px 0 var(--bg)}.InfoSection{display:flex;flex-direction:column}#Self{grid-area:Self;padding:1em;justify-content:flex-end;align-items:flex-end}#NamePFP{display:flex;align-items:center}#PFP{border-radius:100%;height:6em}#Name{margin-left:2em}#Time,#Time *{display:inline}#Offset{mix-blend-mode:soft-light;font-size:.75em}#Identities{grid-area:Identities;display:flex;align-content:flex-start;justify-content:flex-end}#IDList,.Identity,.Identity *>img{display:inline-block}#IDList{max-width:26em;padding:0}.Identity{padding:0;margin:0}.Identity a{text-decoration:none}.Identity *>img{height:1em;width:1.5em;margin-left:1em;border-radius:5px}.Identity>{display:inline;margin-left:.2em}#Names{grid-area:Names;flex-direction:column;text-align:right;padding-right:1em}#NameList{margin:0}.OtherList{list-style:none}.Y{color:#ffb7f3}.J{color:#fffd7e}.C{color:#ff9494}.O{color:#fff}.N{color:#575757}#Pronouns{grid-area:Pronouns;margin-left:1em}#PronounsList{padding:0;margin:0}#Words{grid-area:Words;text-align:center;grid-template-areas:"Heading    Heading     Heading     Heading" "Honorifics Person Compliments Relationship" "Honorifics Person Compliments Relationship"}#WordsTitle{grid-area:Heading}#Honorifics{grid-area:Honorifics}#Person{grid-area:Person}#Compliments{grid-area:Compliments}#Relationship{grid-area:Relationship}@media (pointer:none),(pointer:coarse){#Names,#Self{display:flex}#Words,body{display:grid}#Identities,#Words{text-align:center;align-content:center}body{height:100vh;grid-template-areas:"Self Self" "Identities Identities" "Names      Pronouns  " "Words Words";font-family:"Tilt Neon";background-color:var(--bg);color:var(--text);margin:0;grid-template-columns:calc(100vw / 2)}#Self{grid-area:Self;padding:1em;justify-content:initial;align-items:initial;border-right:0}#Identities{justify-content:center}#Names{grid-area:Names;flex-direction:column;text-align:left;border-right:1px solid #fff2;margin:0 0 0 1em;padding:0}#NameList{margin:0;padding:0}#Words{grid-area:Words;grid-template-areas:"Heading     Heading     " "Honorifics  Person      ""Compliments Relationship";justify-content:space-around;width:100vw}#Words>*{padding-bottom:1em}}:root{--bg:#2a292e;--text:#fff;--bgImage:""}</style><link id="Favicon" rel="icon" type="image/" href=""></head><body><section class="InfoSection" id="Self"><div id="NamePFP"><img src="" alt="" id="PFP"><h1 id="Name"></h1></div><p id="Age">Age:</p><span id="Time"><i class="fa-solid fa-clock"></i><p> It's </p><p id="UpdatingTime"></p><p> in my timezone </p><p id="Offset">(UTC+00:00)</p></span></section><section class="InfoSection" id="Identities"><ul id="IDList"></ul></section><section class="InfoSection" id="Names"><h1><i class="fa-solid fa-signature"></i>Names</h1><ul class="OtherList" id="NameList"></ul></section><section class="InfoSection" id="Pronouns"><h1><i class="fa-solid fa-tags"></i>Pronouns</h1><ul class="OtherList" id="PronounsList"></ul></section><section class="InfoSection" id="Words"><h1 id="WordsTitle"><i class="fa-solid fa-scroll"></i>Words</h1><ul class="OtherList" id="Honorifics">Honorifics</ul><ul class="OtherList" id="Person">Person and family descriptions</ul><ul class="OtherList" id="Compliments">Compliments</ul><ul class="OtherList" id="Relationship">Relationship descriptions</ul></section></body><script src="https://kit.fontawesome.com/c6b06c2030.js" crossorigin="anonymous"></script><script>function CreateElement(e){switch(Element=document.createElement("li"),Element.classList.toggle("OtherItem"),e[1]){case"Y":Icon=Y,Element.classList.toggle("Y");break;case"J":Icon=J,Element.classList.toggle("J");break;case"C":Icon=C,Element.classList.toggle("C");break;case"O":Icon=O,Element.classList.toggle("O");break;case"N":Icon=N,Element.classList.toggle("N");break;default:Icon=""}return Element.innerHTML=Icon+" "+e[0],Element}function calculateAge(e){var n=Date.now()-e,t=new Date(n);return Math.abs(t.getUTCFullYear()-1970)}async function GetTime(){return TimePromise=await fetch(\`http://worldtimeapi.org/api/timezone/Europe/London\`),TimeJSON=await TimePromise.json(),TimeJSON}async function UpdateTime(){CurrentTime=new Date,Hour=CurrentTime.getUTCHours(),Min=CurrentTime.getMinutes(),OffsetH=parseInt(TimeJSON.utc_offset[2]),OffsetM=parseInt(TimeJSON.utc_offset[5]),Hour+=OffsetH,Min+=OffsetM,Min>59&&(Min-=60,Hour+=24),Hour>23&&(Hour-=24),CurrentTime=("0"+Hour).slice(-2)+":"+("0"+Min).slice(-2),document.getElementById("UpdatingTime").innerHTML=CurrentTime,document.getElementById("Offset").innerHTML="(UTC"+TimeJSON.utc_offset+")"}async function GetInfo(){InfoJson=${JSON.stringify(Data)},TimePromise = await fetch(\`http://worldtimeapi.org/api/timezone/\${InfoJson.Timezone}\`);TimeJSON = await TimePromise.json();document.getElementById("Name").innerHTML=InfoJson.Name,Birthday=new Date(InfoJson.Birthday),document.getElementById("Age").innerHTML="<i class='fa-solid fa-birthday-cake'></i> Age: "+calculateAge(Birthday),document.getElementById("PFP").src=InfoJson.ProfilePic,document.getElementById("Favicon").href=InfoJson.ProfilePic,document.getElementById("Favicon").type="image/"+InfoJson.ProfilePic.split(".")[InfoJson.ProfilePic.split(".").length-1];for(let e=0;e<InfoJson.Identities.length;e++)Identity=document.createElement("li"),Identity.setAttribute("class","Identity"),Identity.innerHTML='<a href="'+InfoJson.Identities[e][2]+'"><img src="'+InfoJson.Identities[e][1]+'">'+InfoJson.Identities[e][0]+"</a>",document.getElementById("IDList").appendChild(Identity);for(let e=0;e<InfoJson.Names.length;e++)Name=CreateElement(InfoJson.Names[e]),document.getElementById("NameList").appendChild(Name);for(let e=0;e<InfoJson.Pronouns.length;e++)Pronouns=CreateElement(InfoJson.Pronouns[e]),document.getElementById("PronounsList").appendChild(Pronouns);for(let e=0;e<InfoJson.Honerifics.length;e++)Honerifics=CreateElement(InfoJson.Honerifics[e]),document.getElementById("Honorifics").appendChild(Honerifics);for(let e=0;e<InfoJson.Person.length;e++)Person=CreateElement(InfoJson.Person[e]),document.getElementById("Person").appendChild(Person);for(let e=0;e<InfoJson.Compliments.length;e++)Compliments=CreateElement(InfoJson.Compliments[e]),document.getElementById("Compliments").appendChild(Compliments);for(let e=0;e<InfoJson.Relationship.length;e++)Relationship=CreateElement(InfoJson.Relationship[e]),document.getElementById("Relationship").appendChild(Relationship);document.title=InfoJson.Name+"'s Pronouns Page",colors=document.createElement("style"),colors.innerHTML=":root{--text: "+InfoJson.TextColor+";--bg: "+InfoJson.BGColor+"; --bgImage: url('"+InfoJson.BackgroundImage+"');}",document.body.appendChild(colors);return TimeJSON}Y='<i class="fa-solid fa-heart"></i>',J='<i class="fa-solid fa-face-grin-tongue-wink"></i>',C='<i class="fa-solid fa-user-group"></i>',O='<i class="fa-solid fa-thumbs-up"></i>',N='<i class="fa-solid fa-thumbs-down"></i>',TimeJSON=GetTime(),TimeJSON=GetInfo(),setInterval(UpdateTime,1e3);</script></html>`)
    }
})
app.get("/byID/:UserID", async (req,res) => {
    const UserID = req.params.UserID;

    UserFiles = await new Promise((resolve, reject) => {fs.readdir(`${__dirname}/Users`, async (err, files) => {await resolve(files)});})


    UserFiles.forEach(name => {
        Userdata = fs.readFileSync(`${__dirname}/Users/${name}`)
        Data = JSON.parse(Userdata)
        if (Data.ID == UserID) {
            return res.send(`<!DOCTYPE html><html><head><title id="PageTitle">Prounouns Page</title><meta name="viewport" content="width=device-width"><style>@import url('https://fonts.googleapis.com/css2?family=La+Belle+Aurore&family=Noto Sans');.Identity a,body{color:var(--text)}#Names,#Self{display:flex;border-right:1px solid #fff2}#Words,body{display:grid}#WordsTitle,.Identity,.Identity>{height:fit-content}#Compliments,#Honorifics,#Person,#Relationship{text-align:center;width:25vw;padding:0;margin:0}body{height:100vh;grid-template-areas:"Self   Identities" "Names    Pronouns" "Words       Words";font-family:'Tilt Neon',sans-serif;background-color:var(--bg);margin:0;grid-template-columns:calc(100vw / 2);background-image:var(--bgImage);background-size:cover;background-position:center;background-repeat:no-repeat;background-attachment:fixed}*{font-family:'Noto Sans',sans-serif;text-shadow:-1px -1px 0 var(--bg),1px -1px 0 var(--bg),-1px 1px 0 var(--bg),1px 1px 0 var(--bg)}.InfoSection{display:flex;flex-direction:column}#Self{grid-area:Self;padding:1em;justify-content:flex-end;align-items:flex-end}#NamePFP{display:flex;align-items:center}#PFP{border-radius:100%;height:6em}#Name{margin-left:2em}#Time,#Time *{display:inline}#Offset{mix-blend-mode:soft-light;font-size:.75em}#Identities{grid-area:Identities;display:flex;align-content:flex-start;justify-content:flex-end}#IDList,.Identity,.Identity *>img{display:inline-block}#IDList{max-width:26em;padding:0}.Identity{padding:0;margin:0}.Identity a{text-decoration:none}.Identity *>img{height:1em;width:1.5em;margin-left:1em;border-radius:5px}.Identity>{display:inline;margin-left:.2em}#Names{grid-area:Names;flex-direction:column;text-align:right;padding-right:1em}#NameList{margin:0}.OtherList{list-style:none}.Y{color:#ffb7f3}.J{color:#fffd7e}.C{color:#ff9494}.O{color:#fff}.N{color:#575757}#Pronouns{grid-area:Pronouns;margin-left:1em}#PronounsList{padding:0;margin:0}#Words{grid-area:Words;text-align:center;grid-template-areas:"Heading    Heading     Heading     Heading" "Honorifics Person Compliments Relationship" "Honorifics Person Compliments Relationship"}#WordsTitle{grid-area:Heading}#Honorifics{grid-area:Honorifics}#Person{grid-area:Person}#Compliments{grid-area:Compliments}#Relationship{grid-area:Relationship}@media (pointer:none),(pointer:coarse){#Names,#Self{display:flex}#Words,body{display:grid}#Identities,#Words{text-align:center;align-content:center}body{height:100vh;grid-template-areas:"Self Self" "Identities Identities" "Names      Pronouns  " "Words Words";font-family:"Tilt Neon";background-color:var(--bg);color:var(--text);margin:0;grid-template-columns:calc(100vw / 2)}#Self{grid-area:Self;padding:1em;justify-content:initial;align-items:initial;border-right:0}#Identities{justify-content:center}#Names{grid-area:Names;flex-direction:column;text-align:left;border-right:1px solid #fff2;margin:0 0 0 1em;padding:0}#NameList{margin:0;padding:0}#Words{grid-area:Words;grid-template-areas:"Heading     Heading     " "Honorifics  Person      ""Compliments Relationship";justify-content:space-around;width:100vw}#Words>*{padding-bottom:1em}}:root{--bg:#2a292e;--text:#fff;--bgImage:""}</style><link id="Favicon" rel="icon" type="image/" href=""></head><body><section class="InfoSection" id="Self"><div id="NamePFP"><img src="" alt="" id="PFP"><h1 id="Name"></h1></div><p id="Age">Age:</p><span id="Time"><i class="fa-solid fa-clock"></i><p> It's </p><p id="UpdatingTime"></p><p> in my timezone </p><p id="Offset">(UTC+00:00)</p></span></section><section class="InfoSection" id="Identities"><ul id="IDList"></ul></section><section class="InfoSection" id="Names"><h1><i class="fa-solid fa-signature"></i>Names</h1><ul class="OtherList" id="NameList"></ul></section><section class="InfoSection" id="Pronouns"><h1><i class="fa-solid fa-tags"></i>Pronouns</h1><ul class="OtherList" id="PronounsList"></ul></section><section class="InfoSection" id="Words"><h1 id="WordsTitle"><i class="fa-solid fa-scroll"></i>Words</h1><ul class="OtherList" id="Honorifics">Honorifics</ul><ul class="OtherList" id="Person">Person and family descriptions</ul><ul class="OtherList" id="Compliments">Compliments</ul><ul class="OtherList" id="Relationship">Relationship descriptions</ul></section></body><script src="https://kit.fontawesome.com/c6b06c2030.js" crossorigin="anonymous"></script><script>function CreateElement(e){switch(Element=document.createElement("li"),Element.classList.toggle("OtherItem"),e[1]){case"Y":Icon=Y,Element.classList.toggle("Y");break;case"J":Icon=J,Element.classList.toggle("J");break;case"C":Icon=C,Element.classList.toggle("C");break;case"O":Icon=O,Element.classList.toggle("O");break;case"N":Icon=N,Element.classList.toggle("N");break;default:Icon=""}return Element.innerHTML=Icon+" "+e[0],Element}function calculateAge(e){var n=Date.now()-e,t=new Date(n);return Math.abs(t.getUTCFullYear()-1970)}async function GetTime(){return TimePromise=await fetch(\`http://worldtimeapi.org/api/timezone/Europe/London\`),TimeJSON=await TimePromise.json(),TimeJSON}async function UpdateTime(){CurrentTime=new Date,Hour=CurrentTime.getUTCHours(),Min=CurrentTime.getMinutes(),OffsetH=parseInt(TimeJSON.utc_offset[2]),OffsetM=parseInt(TimeJSON.utc_offset[5]),Hour+=OffsetH,Min+=OffsetM,Min>59&&(Min-=60,Hour+=24),Hour>23&&(Hour-=24),CurrentTime=("0"+Hour).slice(-2)+":"+("0"+Min).slice(-2),document.getElementById("UpdatingTime").innerHTML=CurrentTime,document.getElementById("Offset").innerHTML="(UTC"+TimeJSON.utc_offset+")"}async function GetInfo(){InfoJson=${JSON.stringify(Data)},TimePromise = await fetch(\`http://worldtimeapi.org/api/timezone/\${InfoJson.Timezone}\`);TimeJSON = await TimePromise.json();document.getElementById("Name").innerHTML=InfoJson.Name,Birthday=new Date(InfoJson.Birthday),document.getElementById("Age").innerHTML="<i class='fa-solid fa-birthday-cake'></i> Age: "+calculateAge(Birthday),document.getElementById("PFP").src=InfoJson.ProfilePic,document.getElementById("Favicon").href=InfoJson.ProfilePic,document.getElementById("Favicon").type="image/"+InfoJson.ProfilePic.split(".")[InfoJson.ProfilePic.split(".").length-1];for(let e=0;e<InfoJson.Identities.length;e++)Identity=document.createElement("li"),Identity.setAttribute("class","Identity"),Identity.innerHTML='<a href="'+InfoJson.Identities[e][2]+'"><img src="'+InfoJson.Identities[e][1]+'">'+InfoJson.Identities[e][0]+"</a>",document.getElementById("IDList").appendChild(Identity);for(let e=0;e<InfoJson.Names.length;e++)Name=CreateElement(InfoJson.Names[e]),document.getElementById("NameList").appendChild(Name);for(let e=0;e<InfoJson.Pronouns.length;e++)Pronouns=CreateElement(InfoJson.Pronouns[e]),document.getElementById("PronounsList").appendChild(Pronouns);for(let e=0;e<InfoJson.Honerifics.length;e++)Honerifics=CreateElement(InfoJson.Honerifics[e]),document.getElementById("Honorifics").appendChild(Honerifics);for(let e=0;e<InfoJson.Person.length;e++)Person=CreateElement(InfoJson.Person[e]),document.getElementById("Person").appendChild(Person);for(let e=0;e<InfoJson.Compliments.length;e++)Compliments=CreateElement(InfoJson.Compliments[e]),document.getElementById("Compliments").appendChild(Compliments);for(let e=0;e<InfoJson.Relationship.length;e++)Relationship=CreateElement(InfoJson.Relationship[e]),document.getElementById("Relationship").appendChild(Relationship);document.title=InfoJson.Name+"'s Pronouns Page",colors=document.createElement("style"),colors.innerHTML=":root{--text: "+InfoJson.TextColor+";--bg: "+InfoJson.BGColor+"; --bgImage: url('"+InfoJson.BackgroundImage+"');}",document.body.appendChild(colors);return TimeJSON}Y='<i class="fa-solid fa-heart"></i>',J='<i class="fa-solid fa-face-grin-tongue-wink"></i>',C='<i class="fa-solid fa-user-group"></i>',O='<i class="fa-solid fa-thumbs-up"></i>',N='<i class="fa-solid fa-thumbs-down"></i>',TimeJSON=GetTime(),TimeJSON=GetInfo(),setInterval(UpdateTime,1e3);</script></html>`)
        }
    });

    Data = {"Name": "User Not Found"}
    try{return res.send(`<!DOCTYPE html><html><head><title id="PageTitle">Prounouns Page</title><meta name="viewport" content="width=device-width"><style>@import url('https://fonts.googleapis.com/css2?family=La+Belle+Aurore&family=Noto Sans');.Identity a,body{color:var(--text)}#Names,#Self{display:flex;border-right:1px solid #fff2}#Words,body{display:grid}#WordsTitle,.Identity,.Identity>{height:fit-content}#Compliments,#Honorifics,#Person,#Relationship{text-align:center;width:25vw;padding:0;margin:0}body{height:100vh;grid-template-areas:"Self   Identities" "Names    Pronouns" "Words       Words";font-family:'Tilt Neon',sans-serif;background-color:var(--bg);margin:0;grid-template-columns:calc(100vw / 2);background-image:var(--bgImage);background-size:cover;background-position:center;background-repeat:no-repeat;background-attachment:fixed}*{font-family:'Noto Sans',sans-serif;text-shadow:-1px -1px 0 var(--bg),1px -1px 0 var(--bg),-1px 1px 0 var(--bg),1px 1px 0 var(--bg)}.InfoSection{display:flex;flex-direction:column}#Self{grid-area:Self;padding:1em;justify-content:flex-end;align-items:flex-end}#NamePFP{display:flex;align-items:center}#PFP{border-radius:100%;height:6em}#Name{margin-left:2em}#Time,#Time *{display:inline}#Offset{mix-blend-mode:soft-light;font-size:.75em}#Identities{grid-area:Identities;display:flex;align-content:flex-start;justify-content:flex-end}#IDList,.Identity,.Identity *>img{display:inline-block}#IDList{max-width:26em;padding:0}.Identity{padding:0;margin:0}.Identity a{text-decoration:none}.Identity *>img{height:1em;width:1.5em;margin-left:1em;border-radius:5px}.Identity>{display:inline;margin-left:.2em}#Names{grid-area:Names;flex-direction:column;text-align:right;padding-right:1em}#NameList{margin:0}.OtherList{list-style:none}.Y{color:#ffb7f3}.J{color:#fffd7e}.C{color:#ff9494}.O{color:#fff}.N{color:#575757}#Pronouns{grid-area:Pronouns;margin-left:1em}#PronounsList{padding:0;margin:0}#Words{grid-area:Words;text-align:center;grid-template-areas:"Heading    Heading     Heading     Heading" "Honorifics Person Compliments Relationship" "Honorifics Person Compliments Relationship"}#WordsTitle{grid-area:Heading}#Honorifics{grid-area:Honorifics}#Person{grid-area:Person}#Compliments{grid-area:Compliments}#Relationship{grid-area:Relationship}@media (pointer:none),(pointer:coarse){#Names,#Self{display:flex}#Words,body{display:grid}#Identities,#Words{text-align:center;align-content:center}body{height:100vh;grid-template-areas:"Self Self" "Identities Identities" "Names      Pronouns  " "Words Words";font-family:"Tilt Neon";background-color:var(--bg);color:var(--text);margin:0;grid-template-columns:calc(100vw / 2)}#Self{grid-area:Self;padding:1em;justify-content:initial;align-items:initial;border-right:0}#Identities{justify-content:center}#Names{grid-area:Names;flex-direction:column;text-align:left;border-right:1px solid #fff2;margin:0 0 0 1em;padding:0}#NameList{margin:0;padding:0}#Words{grid-area:Words;grid-template-areas:"Heading     Heading     " "Honorifics  Person      ""Compliments Relationship";justify-content:space-around;width:100vw}#Words>*{padding-bottom:1em}}:root{--bg:#2a292e;--text:#fff;--bgImage:""}</style><link id="Favicon" rel="icon" type="image/" href=""></head><body><section class="InfoSection" id="Self"><div id="NamePFP"><img src="" alt="" id="PFP"><h1 id="Name"></h1></div><p id="Age">Age:</p><span id="Time"><i class="fa-solid fa-clock"></i><p> It's </p><p id="UpdatingTime"></p><p> in my timezone </p><p id="Offset">(UTC+00:00)</p></span></section><section class="InfoSection" id="Identities"><ul id="IDList"></ul></section><section class="InfoSection" id="Names"><h1><i class="fa-solid fa-signature"></i>Names</h1><ul class="OtherList" id="NameList"></ul></section><section class="InfoSection" id="Pronouns"><h1><i class="fa-solid fa-tags"></i>Pronouns</h1><ul class="OtherList" id="PronounsList"></ul></section><section class="InfoSection" id="Words"><h1 id="WordsTitle"><i class="fa-solid fa-scroll"></i>Words</h1><ul class="OtherList" id="Honorifics">Honorifics</ul><ul class="OtherList" id="Person">Person and family descriptions</ul><ul class="OtherList" id="Compliments">Compliments</ul><ul class="OtherList" id="Relationship">Relationship descriptions</ul></section></body><script src="https://kit.fontawesome.com/c6b06c2030.js" crossorigin="anonymous"></script><script>function CreateElement(e){switch(Element=document.createElement("li"),Element.classList.toggle("OtherItem"),e[1]){case"Y":Icon=Y,Element.classList.toggle("Y");break;case"J":Icon=J,Element.classList.toggle("J");break;case"C":Icon=C,Element.classList.toggle("C");break;case"O":Icon=O,Element.classList.toggle("O");break;case"N":Icon=N,Element.classList.toggle("N");break;default:Icon=""}return Element.innerHTML=Icon+" "+e[0],Element}function calculateAge(e){var n=Date.now()-e,t=new Date(n);return Math.abs(t.getUTCFullYear()-1970)}async function GetTime(){return TimePromise=await fetch(\`http://worldtimeapi.org/api/timezone/Europe/London\`),TimeJSON=await TimePromise.json(),TimeJSON}async function UpdateTime(){CurrentTime=new Date,Hour=CurrentTime.getUTCHours(),Min=CurrentTime.getMinutes(),OffsetH=parseInt(TimeJSON.utc_offset[2]),OffsetM=parseInt(TimeJSON.utc_offset[5]),Hour+=OffsetH,Min+=OffsetM,Min>59&&(Min-=60,Hour+=24),Hour>23&&(Hour-=24),CurrentTime=("0"+Hour).slice(-2)+":"+("0"+Min).slice(-2),document.getElementById("UpdatingTime").innerHTML=CurrentTime,document.getElementById("Offset").innerHTML="(UTC"+TimeJSON.utc_offset+")"}async function GetInfo(){InfoJson=${JSON.stringify(Data)},TimePromise = await fetch(\`http://worldtimeapi.org/api/timezone/\${InfoJson.Timezone}\`);TimeJSON = await TimePromise.json();document.getElementById("Name").innerHTML=InfoJson.Name,Birthday=new Date(InfoJson.Birthday),document.getElementById("Age").innerHTML="<i class='fa-solid fa-birthday-cake'></i> Age: "+calculateAge(Birthday),document.getElementById("PFP").src=InfoJson.ProfilePic,document.getElementById("Favicon").href=InfoJson.ProfilePic,document.getElementById("Favicon").type="image/"+InfoJson.ProfilePic.split(".")[InfoJson.ProfilePic.split(".").length-1];for(let e=0;e<InfoJson.Identities.length;e++)Identity=document.createElement("li"),Identity.setAttribute("class","Identity"),Identity.innerHTML='<a href="'+InfoJson.Identities[e][2]+'"><img src="'+InfoJson.Identities[e][1]+'">'+InfoJson.Identities[e][0]+"</a>",document.getElementById("IDList").appendChild(Identity);for(let e=0;e<InfoJson.Names.length;e++)Name=CreateElement(InfoJson.Names[e]),document.getElementById("NameList").appendChild(Name);for(let e=0;e<InfoJson.Pronouns.length;e++)Pronouns=CreateElement(InfoJson.Pronouns[e]),document.getElementById("PronounsList").appendChild(Pronouns);for(let e=0;e<InfoJson.Honerifics.length;e++)Honerifics=CreateElement(InfoJson.Honerifics[e]),document.getElementById("Honorifics").appendChild(Honerifics);for(let e=0;e<InfoJson.Person.length;e++)Person=CreateElement(InfoJson.Person[e]),document.getElementById("Person").appendChild(Person);for(let e=0;e<InfoJson.Compliments.length;e++)Compliments=CreateElement(InfoJson.Compliments[e]),document.getElementById("Compliments").appendChild(Compliments);for(let e=0;e<InfoJson.Relationship.length;e++)Relationship=CreateElement(InfoJson.Relationship[e]),document.getElementById("Relationship").appendChild(Relationship);document.title=InfoJson.Name+"'s Pronouns Page",colors=document.createElement("style"),colors.innerHTML=":root{--text: "+InfoJson.TextColor+";--bg: "+InfoJson.BGColor+"; --bgImage: url('"+InfoJson.BackgroundImage+"');}",document.body.appendChild(colors);return TimeJSON}Y='<i class="fa-solid fa-heart"></i>',J='<i class="fa-solid fa-face-grin-tongue-wink"></i>',C='<i class="fa-solid fa-user-group"></i>',O='<i class="fa-solid fa-thumbs-up"></i>',N='<i class="fa-solid fa-thumbs-down"></i>',TimeJSON=GetTime(),TimeJSON=GetInfo(),setInterval(UpdateTime,1e3);</script></html>`)}catch{}
})

// Login post method
app.post("/login", (req, res) => {
    Passwords = fs.readFileSync("Password.json");
    Passwords = JSON.parse(Passwords).Passwords;

    Userdata = fs.readFileSync(`${__dirname}/Users/${req.body.Username}.json`)
    Userdata = JSON.parse(Userdata)


    let Password = crypto.createHash("sha512").update(req.body.Password).digest("hex");
    try {
        var UserID = Userdata.ID
    } catch {
        return res.status(401).send({ Status: "401", Message: "User not found" });
    }

    if (Password == Passwords[UserID]) {
        Auth = gensecrets()
        NewLogin = [UserID, req.body.Username, Auth[0], Auth[1]]
        Logins.push(NewLogin)
        return res.status(200).send({ Status: "200", "UserID": UserID, "Auth": Auth[0], "Expires": Auth[1], "Username": req.body.Username, "LoginPos": Logins.length}), Logins
    } else {
        return res.status(418).send({ Status: "401", Message: "Password Incorrect" });
    }
});

app.get("/Info/:UserID", async (req,res) => {
    const UserID = req.params.UserID;
    UserFiles = await new Promise((resolve, reject) => {fs.readdir(`${__dirname}/Users`, async (err, files) => {await resolve(files)});})

    UserFiles.forEach(name => {
        Userdata = fs.readFileSync(`${__dirname}/Users/${name}`)
        Data = JSON.parse(Userdata)
        if (Data.ID == UserID) {
            return res.send(Data)
        }
    });
})

// ImageUpload post method
app.post("/imageUpload", upload.single("image"), (req, res) => {
    const LoginData = JSON.parse(req.body.Data)
    const AuthCode = LoginData.Auth;
    const Expires = LoginData.Expires;
    const LoginPos = LoginData.LoginPos -1;
    const Username = LoginData.Username;

    if (Logins[LoginPos][2] !== AuthCode || Date.now() > Logins[LoginPos][3]) {
        fs.unlink(req.file.path, (err) => {
            if (err) {
                console.error(err);
            }
        });
        return res.status(401).send({ Status: "401", Message: "Unauthorized" });
    }

    if (!fs.existsSync(`${__dirname}/uploads/${Username}`)) {
        
    }
    if (!fs.existsSync(`${__dirname}/Images/${Username}`)) {
        
    }

    const oldPath = req.file.path;
    const newPath = `${__dirname}/uploads/${Username}/` + req.file.originalname;

    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            res.status(500).send({
                Status: "500",
                Message: "File upload failed",
            });
        } else {
            res.send({ Status: "200", Message: "File uploaded successfully" });
        }
    });
});

app.post("/SaveData", (req, res) => {
    const LoginData = JSON.parse(req.body.AuthCode);
    const AuthCode = LoginData.Auth;
    const Expires = LoginData.Expires;
    const LoginPos = LoginData.LoginPos -1;
    const Username = LoginData.Username;
    const UserID = LoginData.UserID;


    var UserData = fs.readFileSync(`${__dirname}/Users/${Username}.json`);
    var UserData = JSON.parse(UserData);

    const OldData = UserData

    if (Logins[LoginPos][2] !== AuthCode || Date.now() > Logins[LoginPos][3]) {
        return res.status(401).send({ Status: "401", Message: "Unauthorized" });
    }

    const Identities = [];
    const IdentitiesFlags = [];
    const IdentitiesInfo = [];
    const Names = [];
    const NamesL = [];
    const Pronouns = [];
    const PronounsL = [];
    const Honorifics = [];
    const HonorificsL = [];
    const Person = [];
    const PersonL = [];
    const Relationship = [];
    const RelationshipL = [];
    const Compliments = [];
    const ComplimentsL = [];

    keys = Object.keys(req.body);
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].startsWith("identity_name")) {
            Identities.push(req.body[keys[i]]);
        } else if (keys[i].startsWith("identity_image")) {
            IdentitiesFlags.push(req.body[keys[i]]);
        } else if (keys[i].startsWith("identity_url")) {
            IdentitiesInfo.push(req.body[keys[i]]);
        } else if (keys[i].startsWith("Name_name")) {
            Names.push(req.body[keys[i]]);
        } else if (keys[i].startsWith("Name_options")) {
            NamesL.push(req.body[keys[i]]);
        } else if (keys[i].startsWith("Pronouns_name")) {
            Pronouns.push(req.body[keys[i]]);
        } else if (keys[i].startsWith("Pronouns_options")) {
            PronounsL.push(req.body[keys[i]]);
        } else if (keys[i].startsWith("Honorifics_name")) {
            Honorifics.push(req.body[keys[i]]);
        } else if (keys[i].startsWith("Honorifics_options")) {
            HonorificsL.push(req.body[keys[i]]);
        } else if (keys[i].startsWith("Person_name")) {
            Person.push(req.body[keys[i]]);
        } else if (keys[i].startsWith("Person_options")) {
            PersonL.push(req.body[keys[i]]);
        } else if (keys[i].startsWith("Relationship_name")) {
            Relationship.push(req.body[keys[i]]);
        } else if (keys[i].startsWith("Relationship_options")) {
            RelationshipL.push(req.body[keys[i]]);
        } else if (keys[i].startsWith("Compliments_name")) {
            Compliments.push(req.body[keys[i]]);
        } else if (keys[i].startsWith("Compliments_options")) {
            ComplimentsL.push(req.body[keys[i]]);
        }
    }

    bday = req.body.birthday.split("-");

    JSONObj = {
        ID: UserID,
        Name: req.body.name,
        Birthday: bday[1] + "/" + bday[2] + "/" + bday[0],
        Timezone: OldData.Timezone,
        ProfilePic: OldData.ProfilePic,
        BGColor: req.body.BGColor,
        TextColor: req.body.TextColor,
        BackgroundImage: req.body.BackgroundImage,
        Identities: [],
        Names: [],
        Pronouns: [],
        Honerifics: [],
        Person: [],
        Compliments: [],
        Relationship: [],
        Created: OldData.Created
    };

    if (req.body["profile-pic"] !== "") {
        JSONObj.ProfilePic = `/Images/${Username}/${req.body["profile-pic"]}`;
        fs.copyFile(
            `uploads/${Username}/${req.body["profile-pic"]}`,
            `Images/${Username}/${req.body["profile-pic"]}`,
            () => {}
        );
    } else {
        JSONObj.ProfilePic = OldData.ProfilePic;
    }

    if (req.body.Timezone !== "") {
        JSONObj.Timezone = req.body.Timezone
    }

    if (req.body.BackgroundImage !== "") { 
        JSONObj.BackgroundImage = `/Images/${Username}/${req.body.BackgroundImage}`;
        fs.copyFile(
            `uploads/${Username}/${req.body.BackgroundImage}`,
            `Images/${Username}/${req.body.BackgroundImage}`,
            () => {}
        );
    } else if (req.body.BackgroundImage !== "__Remove") {
        JSONObj.BackgroundImage = OldData.BackgroundImage;
    } else {
        JSONObj.BackgroundImage = ""
    }

    for (let i = 0; i < Identities.length; i++) {
        JSONObj.Identities[i] = new Array();
        JSONObj.Identities[i][0] = Identities[i];
        if (IdentitiesFlags[i] !== "") {
            JSONObj.Identities[i][1] = `/Images/${Username}/Flags/${IdentitiesFlags[i]}`;
            fs.copyFile(
                `uploads/${Username}/${IdentitiesFlags[i]}`,
                `Images/${Username}/Flags/${IdentitiesFlags[i]}`,
                () => {}
            );
        } else {
            JSONObj.Identities[i][1] = OldData.Identities[i][1];
        }
        JSONObj.Identities[i][2] = IdentitiesInfo[i];
    }
    for (let i = 0; i < Names.length; i++) {
        JSONObj.Names[i] = new Array();
        JSONObj.Names[i][0] = Names[i];
        JSONObj.Names[i][1] = NamesL[i];
    }
    for (let i = 0; i < Pronouns.length; i++) {
        JSONObj.Pronouns[i] = new Array();
        JSONObj.Pronouns[i][0] = Pronouns[i];
        JSONObj.Pronouns[i][1] = PronounsL[i];
    }
    for (let i = 0; i < Honorifics.length; i++) {
        JSONObj.Honerifics[i] = new Array();
        JSONObj.Honerifics[i][0] = Honorifics[i];
        JSONObj.Honerifics[i][1] = HonorificsL[i];
    }
    for (let i = 0; i < Person.length; i++) {
        JSONObj.Person[i] = new Array();
        JSONObj.Person[i][0] = Person[i];
        JSONObj.Person[i][1] = PersonL[i];
    }
    for (let i = 0; i < Relationship.length; i++) {
        JSONObj.Relationship[i] = new Array();
        JSONObj.Relationship[i][0] = Relationship[i];
        JSONObj.Relationship[i][1] = RelationshipL[i];
    }
    for (let i = 0; i < Compliments.length; i++) {
        JSONObj.Compliments[i] = new Array();
        JSONObj.Compliments[i][0] = Compliments[i];
        JSONObj.Compliments[i][1] = ComplimentsL[i];
    }

    UserData[Username] = JSONObj;

    fs.writeFile(`${__dirname}/Users/${Username}.json`, JSON.stringify(UserData), "utf-8", () => {});

    res.status(200).send({Status:200,Message:"Saved"})
});

app.post("/ChangePassword", (req, res) => {
    const LoginData = JSON.parse(req.body.AuthCode);
    const AuthCode = LoginData.Auth;
    const Expires = LoginData.Expires;
    const LoginPos = LoginData.LoginPos -1;
    const Username = LoginData.Username;
    const UserID = LoginData.UserID;

    if (Logins[LoginPos][2] !== AuthCode || Date.now() > Logins[LoginPos][3]) {
        return res.status(401).send({ Status: "401", Message: "Unauthorized" });
    }

    let Passwords = fs.readFileSync("Password.json");
    Passwords = JSON.parse(Passwords);

    OldPassword = Passwords.Passwords[UserID]

    let reqPasswordHash = crypto
        .createHash("sha512")
        .update(req.body.OldPassword)
        .digest("hex");

    if (reqPasswordHash == OldPassword) {
        NewPass = crypto
            .createHash("sha512")
            .update(req.body.NewPassword)
            .digest("hex");
        Auth = gensecrets()
        NewLogin = [UserID, Username, Auth[0], Auth[1]]
        Logins.push(NewLogin)
        res.status(200).send({ Status: "200", "UserID": UserID, "Auth": Auth[0], "Expires": Auth[1], "Username": req.body.Username, "LoginPos": Logins.length, "Message": "Password Updated"}), Logins

        Passwords.Passwords[UserID] = NewPass
        return fs.writeFileSync("Password.json", JSON.stringify(Passwords));
    } else {
        return res.status(401).send({ Status: "401", Message: "Wrong Password" });
    }

    //fs.writeFile('Info.json', JSON.stringify(JSONObj), 'utf-8', () => {});
});

app.post('/NewUser', async (req, res) => {
    const Username = req.body.Username;
    const Password = req.body.Password;

    userlist = fs.readFileSync(__dirname + "/Users.json")
    userlist = JSON.parse(userlist)

    if (Username == undefined) return res.send("No Username")
    if (Password == undefined) return res.send("No Password")

    //var UserData = fs.readFileSync("Users.json");
    //var UserData = JSON.parse(UserData);

    UserFiles = await new Promise((resolve, reject) => {fs.readdir(`${__dirname}/Users`, async (err, files) => {await resolve(files)});})

    var NewUserData = fs.readFileSync("UserBlank.json");
    var NewUserData = JSON.parse(NewUserData);

    Passwords = fs.readFileSync("Password.json");
    Passwords = JSON.parse(Passwords);

    UserFiles.forEach(name => {
        if (Username == name.split(".json")[0]) {
            return res.status(418).send("Username Taken")
        }
    });
    a = new Date 
    NewUserData.ID = (UserFiles.length)
    NewUserData.Name = Username
    NewUserData.Created = `${a.getDate()}/${a.getMonth()}/${a.getFullYear()}` 

    fs.mkdirSync(`${__dirname}/uploads/${Username}`)
    fs.mkdirSync(`${__dirname}/Images/${Username}`)
    fs.mkdirSync(`${__dirname}/Images/${Username}/Flags`)

    let PassHashed = crypto
        .createHash("sha512")
        .update(Password)
        .digest("hex");

    Passwords.Passwords[UserFiles.length] = PassHashed

    UserFiles[UserFiles.length] = `${Username}.json`


    fs.writeFile(`${__dirname}/Users/${Username}.json`, JSON.stringify(NewUserData), ()=>{})
    fs.writeFileSync("Password.json", JSON.stringify(Passwords)) 
    fs.writeFileSync("Users.json", JSON.stringify(UserFiles)) 
    res.send({Status:"200"}) 
})

app.post('/DelUser', (req, res) => {
    const Username = req.body.Username;
    const Password = req.body.Password;

    if (Username == undefined) return res.status(400).send({ Status: "401", Message: "No Username" })
    if (Password == undefined) return res.status(400).send({ Status: "401", Message: "No Password" })

    var UserData = fs.readFileSync(`Users/${Username}.json`);
    var UserData = JSON.parse(UserData);

    Passwords = fs.readFileSync("Password.json");
    Passwords = JSON.parse(Passwords);

    let PassHashed = crypto
        .createHash("sha512")
        .update(Password)
        .digest("hex");

    try {
        if (Passwords.Passwords[UserData.ID] == PassHashed) {
            Passwords.Passwords[UserData.ID] = null
            UserData = {Name:"Deleted"}
            fs.rmSync(`${__dirname}/uploads/${Username}`, { recursive: true, force: true });
            fs.rmSync(`${__dirname}/Images/${Username}`, { recursive: true, force: true });
            fs.rmSync(`${__dirname}/Images/${Username}/Flags`, { recursive: true, force: true });
            fs.writeFileSync(`${__dirname}/Users/${Username}.json`, JSON.stringify(UserData))
            fs.writeFileSync("Password.json", JSON.stringify(Passwords)) 
            res.send({Status:"200"}) 
        } else {
            return res.status(400).send({ Status: "401", Message: "Password Incorrect" })
        }
    } catch (err) { console.log(err); return res.status(400).send({ Status: "500", Message: JSON.stringify(err) })}
})

const port = process.env.PORT || 3000;

function gensecrets() {
	let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 20) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
	const expires = Date.now() + 3600000;
	return [result, expires]
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
	Logins = new Array
});
(async () => {
    UserList = await fetch("/Users.json");
    UserList = await UserList.json();
    Usernames = new Array;
    for (i in UserList) {
        Usernames[i] = UserList[i].split(".json")[0]
    }

    Table = document.getElementById("TheTable")

    for (let i = (Usernames.length - 1); i != -1; i--) {
        for (k in UserList) {
            Users = await fetch(`/Users/${UserList[k]}`);
            Users = await Users.json();
            Username = Usernames[k]
            if (Users.ID == i) break
        }
        if (Users.Name !== "Deleted") {
            tr = document.createElement("tr");
            tr.innerHTML = `<th>${Username}</th><th>${Users.Name}</th><th><a href="/${Username}">link</a></th><th>${Users.Created}</th>`
            Table.append(tr)
        }
    }
})()
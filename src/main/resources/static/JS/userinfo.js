function fun() {





    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://userdetailsbybal.herokuapp.com/getallusers", true);
    // xhttp.open("GET", "http://localhost:8080/getallusers", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            // document.getElementById("result").innerHTML=this.responseText;
            var list = JSON.parse(this.responseText);
            createdivi();
            for (var i = 0; i < list.length; i++) {

                users(list[i]);
            }

        }
    };


    xhttp.send();


}

function users(data) {

    let list = []
    list.push("Name:");
    list.push(data.Name);
    list.push("Age:");
    list.push(data.Age);
    list.push("Email:");
    list.push(data.Email);
    list.push("Address:");
    list.push(data.Address);
    list.push("Phone Number:");
    list.push(data.Phone_number);

    let parent = document.getElementById("result")

    var maindiv = document.createElement("Table")
    maindiv.setAttribute("class", "area")


    for (let i = 0; i < list.length; i = i + 2) {
        let tr = document.createElement("Tr");
        let namearea = createTD(list[i]);
        let namearea2 = createTD(list[i + 1]);
        tr.appendChild(namearea);
        tr.appendChild(namearea2);
        maindiv.appendChild(tr);
    }

    let dlt_btn = document.createElement("Button")
    let texting = document.createTextNode("DELETE");
    dlt_btn.appendChild(texting)
    dlt_btn.setAttribute("class", "Delete")
    dlt_btn.setAttribute("onclick", "delet()")
    maindiv.appendChild(dlt_btn);

    let edit_btn = document.createElement("Button")
    let texto = document.createTextNode("EDIT");
    edit_btn.appendChild(texto)
    edit_btn.setAttribute("class", "edit")
    edit_btn.setAttribute("onclick", "edit()")
    maindiv.appendChild(edit_btn);

    parent.appendChild(maindiv)


}

function createTD(data) {
    let namearea = document.createElement("td");
    let text_na = document.createTextNode(data);
    namearea.appendChild(text_na)
    return namearea;
}

function delet() {
    let td_d = event.target.parentNode;
    let c = td_d.children;

    var xhttp1 = new XMLHttpRequest();
    xhttp1.open("DELETE", "https://userdetailsbybal.herokuapp.com/deleteuser", true);
    // xhttp1.open("DELETE", "http://localhost:8080/deleteuser", true);
    xhttp1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("UserDeleted succesfully")
            td_d.parentNode.removeChild(td_d);

        }
    };


    let o = c[2].children;
    xhttp1.send(o[1].textContent);


}

function edit() {
    let td_d = event.target.parentNode;
    let c = td_d.children;

    let list2 = ["name", "age", "email", "address", "ph_no"]
    for (let i = 0; i < c.length - 2; i++) {
        let o = c[i].children;
        document.getElementById(list2[i]).value = o[1].textContent;
    }





    var modal = document.getElementById("myModal")
    modal.style.display = "block";



}

function clos() {
    var modal = document.getElementById("myModal")
    modal.style.display = "none";

}

function updatedata() {
    let parent = document.getElementById("my_form");
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let ph_no = document.getElementById("ph_no").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "https://userdetailsbybal.herokuapp.com/update", true);
    // xhttp.open("PUT", "http://localhost:8080/update", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var modal = document.getElementById("myModal")
            modal.style.display = "none";
            fun()

        }
    };
    var data = {
        "Name": name,
        "Age": age,
        "Email": email,
        "Address": address,
        "Phone_number": ph_no
    };

    xhttp.send(JSON.stringify(data));


}

function searh() {
    let name = document.getElementById("search").value;
    let n = document.getElementById("search_result")
    if (n != null)
        n.remove()
    var xhttp3 = new XMLHttpRequest();
    xhttp3.open("POST", "https://userdetailsbybal.herokuapp.com/search", true);
    // xhttp3.open("POST", "http://localhost:8080/search", true);
    xhttp3.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var list = JSON.parse(this.responseText);

            document.getElementById("result").remove();

            createdivi()
            for (var i = 0; i < list.length; i++) {

                users(list[i]);

            }



        }
    };
    xhttp3.send(name);
}

function createdivi() {
    let divo = document.getElementById("result_set");
    let divo2 = document.createElement("div");
    divo2.setAttribute("id", "result");
    divo.appendChild(divo2);
}

function searh2(data) {
    let n = document.getElementById("search_result")
    if (n != null)
        n.remove()
    let name = data.textContent;
    var xhttp3 = new XMLHttpRequest();
    xhttp3.open("POST", "https://userdetailsbybal.herokuapp.com/search", true);
    // xhttp3.open("POST", "http://localhost:8080/search", true);
    xhttp3.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var list = JSON.parse(this.responseText);

            document.getElementById("result").remove();

            createdivi()
            for (var i = 0; i < list.length; i++) {

                users(list[i]);

            }



        }
    };
    xhttp3.send(name);
}

function searchbyrname() {
    let name = document.getElementById("search").value;
    let n = document.getElementById("search_result")
    if (n != null)
        n.remove()
    let parent = document.getElementById("search_area_parent")
    var xhttp4 = new XMLHttpRequest();
    xhttp4.open("POST", "https://userdetailsbybal.herokuapp.com/searchbyname", true);
    // xhttp4.open("POST", "http://localhost:8080/searchbyname", true);
    xhttp4.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let parent2 = document.createElement("div");
            parent2.setAttribute("id", "search_result")
            if (this.responseText == "[]") {
                addnames("No name found...", parent2)
            }
            var list = JSON.parse(this.responseText);


            for (var i = 0; i < list.length; i++) {

                addnames(list[i], parent2);

            }
            parent.appendChild(parent2);



        }
    };
    xhttp4.send(name);

}

function addnames(data, parent) {

    let newa = document.createElement("a");
    let newa_text = document.createTextNode(data);
    newa.appendChild(newa_text)
    if (data != "No name found...")
        newa.setAttribute("onclick", "searh2(this)");

    parent.appendChild(newa);

}
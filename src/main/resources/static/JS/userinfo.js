

function fun()
{





    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://userdetailsbybal.herokuapp.com/getallusers", true);
    // xhttp.open("GET", "http://localhost:8080/getallusers", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            // document.getElementById("result").innerHTML=this.responseText;
            var list=JSON.parse(this.responseText);
            for(var i=0;i<list.length;i++)
            {

                users(list[i]);
            }

        }
    };


    xhttp.send();


}

function users(data)
{
    let name=data.Name;
    let age=data.Age;
    let email=data.Email;
    let address=data.Address;
    let ph_no=data.Phone_number;

    let parent=document.getElementById("result")

    let maindiv=document.createElement("DIV")
    maindiv.setAttribute("class","area")


    let namearea=document.createElement("h3");
    let text_na=document.createTextNode(name);
    namearea.appendChild(text_na)
    maindiv.appendChild(namearea)

    let agearea=document.createElement("h3");
    let text_aa=document.createTextNode(age);
    agearea.appendChild(text_aa)
    maindiv.appendChild(agearea)

    let emailarea=document.createElement("h3");
    let text_ea=document.createTextNode(email);
    emailarea.appendChild(text_ea)
    maindiv.appendChild(emailarea)
    //
    let addressarea=document.createElement("h3");
    let text_=document.createTextNode(address);
    addressarea.appendChild(text_)
    maindiv.appendChild(addressarea)


    let phn_a=document.createElement("h3");
    let text_pa=document.createTextNode(ph_no);
    phn_a.appendChild(text_pa)
    maindiv.appendChild(phn_a)

    let dlt_btn=document.createElement("Button")
    let texting=document.createTextNode("DELETE");
    dlt_btn.appendChild(texting)
    dlt_btn.setAttribute("class","Delete")
    dlt_btn.setAttribute("onclick","delet()")
    maindiv.appendChild(dlt_btn);

    let edit_btn=document.createElement("Button")
    let texto=document.createTextNode("EDIT");
    edit_btn.appendChild(texto)
    edit_btn.setAttribute("class","edit")
    edit_btn.setAttribute("onclick","edit()")
    maindiv.appendChild(edit_btn);

    parent.appendChild(maindiv)


}
function delet()
{
    let td_d = event.target.parentNode;
     let c = td_d.children;
    // for(let i=0;i<c.length-2;i++)
    // {
    //     alert(c[i].textContent);
    // }
    var xhttp1 = new XMLHttpRequest();
    xhttp1.open("DELETE", "https://userdetailsbybal.herokuapp.com/deleteuser", true);
    // xhttp1.open("DELETE", "http://localhost:8080/deleteuser", true);
    xhttp1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        alert("UserDeleted succesfully")

        }
    };


    xhttp1.send(c[2].textContent);

    td_d.parentNode.removeChild(td_d);
}
function edit()
{
    let td_d = event.target.parentNode;
    let c = td_d.children;
    // for(let i=0;i<c.length-2;i++)
    // {
    //     alert(c[i].);
    //  }
    var  modal=document.getElementById("myModal")
    modal.style.display = "block";


    // var xhttp1 = new XMLHttpRequest();
    // xhttp1.open("DELETE", "http://localhost:8080/deleteuser", true);
    // xhttp1.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         alert("UserDeleted succesfully")
    //
    //     }
    // };
    // xhttp1.send(c[2].textContent);

}
function clos()
{
    var  modal=document.getElementById("myModal")
    modal.style.display = "none";
}

function updatedata()
{
    let parent=document.getElementById("my_form");
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let email=document.getElementById("email").value;
    let address=document.getElementById("address").value;
    let ph_no=document.getElementById("ph_no").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "https://userdetailsbybal.herokuapp.com/update", true);
    // xhttp.open("PUT", "http://localhost:8080/update", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText)
            if(this.responseText==="false")
            {
                alert("UserInvalid");
                return
            }
            else{


            }

        }
    };
    var data={
        "Name":name,
        "Age":age,
        "Email":email,
        "Address":address,
        "Phone_number":ph_no
    };

    xhttp.send(JSON.stringify(data));


}
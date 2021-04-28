function fun()
{


    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:8080/getallusers", true);
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

    parent.appendChild(maindiv)


}

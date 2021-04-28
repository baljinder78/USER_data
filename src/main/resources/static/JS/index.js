function adddata()
{

    let parent=document.getElementById("my_form");
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let email=document.getElementById("email").value;
    let address=document.getElementById("address").value;
    let ph_no=document.getElementById("ph_no").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://userdetailsbybal.herokuapp.com/add", true);
    // xhttp.open("POST", "http://localhost:8080/add", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText)
            if(this.responseText==="false")
            {
                 alert("UserInvalid");
                 window.location="http://localhost:8080/"
                return
            }
            else{
                alert("hogya");

                //  parent.setAttribute("action","http://localhost:8080/userinfo");
                // window.location="http://localhost:8080/userinfo";

                //console.log(localStorage.getItem("user_name"));

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
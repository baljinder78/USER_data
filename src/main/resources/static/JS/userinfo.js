function fun()
{


    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:8080/getallusers", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            document.getElementById("result").innerHTML=this.responseText;

        }
    };


    xhttp.send();


}

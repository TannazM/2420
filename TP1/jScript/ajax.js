function loadDoc(filename) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("general").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", filename , true);
  xhttp.send();
}

function loadDoc() {
  /**var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("generalBtn").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "fs_general.php", true);
  xhttp.send();
}


$(document).ready(function(){
    $("button").click(function(){
        $("#div1").load("fs_general.php");
    });
});
**/

$.ajax(){
   		url:"fs_general.php",
   		type:'GET',
   		success: function(data){
      			 //$('[name="factsage"]').html($(data).find('[name="factsage"]').html());
			alert (data);
			$(".frame").html(data);
   		}
}
</script>

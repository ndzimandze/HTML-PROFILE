/**
    * @description      : 
    * @author           : juju
    * @group            : 
    * @created          : 11/06/2023 - 10:08:50
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/06/2023
    * - Author          : juju
    * - Modification    : 
**/
















function myFunction() {
    /* Get the checkbox*/
    var checkBox = document.getElementById("myCheck");
    /* Get the output text*/
    var text = document.getElementById("text");
  
    /* If the checkbox is checked, display the output text*/
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
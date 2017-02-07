
//function is called $ and replaces document.getElementById in this script file
var $ = function(id){
  return document.getElementById(id)
};

var joinList = function(){
    var email_address1 = $("email_address1").value;
    var email_address2 = $("email_address2").value;
    var firstName = $("first_name").value;
    var isValid = true;

    if(email_address1 == ""){
      $("email_address1_error").firstChild.nodeValue =
        "This field is required.";
        isValid = false;
    } else{
      $("email_address1_error").firstChild.nodeValue = "";
    }

    if(email_address2 == ""){
      $("email_address2_error").firstChild.nodeValue =
      "This field is required.";
    }else if(email_address1 != email_address2){
      $("email_address2_error").firstChild.nodeValue =
      "Email addresses must match";
      isValid = false;
    }else{
      $("email_address2_error").firstChild.nodeValue ="";
    }

    if(firstName == ""){
      $("last_name_error").firstChild.nodeValue =
      "Please enter last name.";
      isValid = false;
    }else{
      $("first_name_error").firstChild.nodeValue = "";
    }

    if(isValid){
      $("email_form").submit();
    }
};//end of joinList function


window.onload = function(){
  $("join_list").onclick = joinList;
  //$("email_address1").focus();
};

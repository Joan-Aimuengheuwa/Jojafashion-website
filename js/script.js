var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};

$('.container > div').each(function(){
    var width=$(".fillmult").data('width');
    $(".fillmult").animate({ width: width }, 2500);
    $(".fillmult").after( '<span class="perc">' + width + '</span>');
    $('.perc').delay(3000).fadeIn(500);
}); 

$('.container > div').each(function(){
    var width=$(".fillmult2").data('width');
    $(".fillmult2").animate({ width: width }, 2500);
    $(".fillmult2").after( '<span class="perc">' + width + '</span>');
    $('.perc').delay(3000).fadeIn(1000);
}); 

$('.container > div').each(function(){
    var width=$(".fillmult3").data('width');
    $(".fillmult3").animate({ width: width }, 2500);
    $(".fillmult3").after( '<span class="perc">' + width + '</span>');
    $('.perc').delay(3000).fadeIn(1000);
}); 


function validate(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length <5) {
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(name.search(/[0-9]/)!=-1) {
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;

    }
    if(isNaN(phone) || phone.length != 11){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length > 250){
      text = "Please Enter Less Than 250 Words";
      error_message.innerHTML = text;
      return false;
    }else {
    alert("Form Submitted Successfully!");
    return true;
    }
  }
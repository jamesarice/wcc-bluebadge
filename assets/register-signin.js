var PrototypeApp = PrototypeApp || {};
PrototypeApp.signIn = function(e){
    e.preventDefault();
    document.getElementById("js-signin").style.display = "none"
    document.getElementById("js-idp-sign-list").style.display="block";
}

$(document).ready(function(){

  pause_open = true;

  $('.sign-in-button').on('click', function (event) {
    if(pause_open) {
      event.preventDefault();
    }
    $("#permissions-signin").find(".button").on('click', function (second_event) {
      second_event.preventDefault();
      pause_open = false;
      $(event.target).trigger('click');
    });
    $("#permissions-signin").modal();
  });

});
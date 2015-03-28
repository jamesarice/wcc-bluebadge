$(document).ready(function(){

  $('.apply-blue-badge').on('click', function (event) {
    event.preventDefault();
    $("#loading-wait").modal();
    setTimeout(function(){
      document.location.href = '/wcc/blue-badge-confirmation.html';
    },3000);
  });

});
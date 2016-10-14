$(document).ready(function() {

    setMainDimensions();
    setCurrentDate();
    setBoxDimensions();
});

function setBoxContent() {
  //set content for each box depending on position and date
};

function setBoxDimensions() {
  var height = $(".centerFrame").height();
  var width = $(".centerFrame").width();
  $(".boxes").css("height", height*0.4);
  $(".boxes").css("width", width*0.15);
  $("#box3").css("height", height*0.9);
  $("#box3").css("width", width*0.4);
};

function setMainDimensions() {

  var wHeight = $(window).height();

  $(".topHud").css("height",wHeight*0.1);
  $(".centerFrame").css("height",wHeight*0.6);
  $(".bottomHud").css("height",wHeight*0.3);

  $(".bottomHud img").css("height", wHeight*0.23);
};

var months = [
"January", "February", "March",
"April", "May", "June", "July",
"August", "September", "October",
"November", "December"];

function setCurrentDate() {
  var d = new Date();
  var month = months[d.getMonth()];
  var day = d.getDate();
  var year = d.getFullYear();
  document.getElementById("currentDate").innerHTML = month + " " + day + ", " + year;
};

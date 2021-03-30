var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var span1 = document.getElementsByClassName("close")[1];

var count=0;
btn.onclick = function() {
  modal.style.display = "block";
  count=1;
}
span.onclick = function() {
  modal.style.display = "none";
  count=0;
}
window.onclick = function(event) 
{
  if (event.target == modal && count==1) {
    modal.style.display = "none";
  }
  else if(event.target == modal1 && count==0) {
    modal1.style.display = "none";
    count=0;
  }
  else if(event.target == modal3 && count==3) 
  {
    modal3.style.display = "none";
    count=0;
  }
}
btn1.onclick = function() {
  modal1.style.display = "block";
  count=0;
}
span1.onclick = function() {
  modal1.style.display = "none";
}
myBtn13.onclick = function() {
  modal.style.display = "block";
  modal1.style.display = "none";
  count=1;
}



var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("myBtn3");
var span3 = document.getElementsByClassName("close")[2];
 function func() {
  modal3.style.display = "block";
  count=3;
}
span3.onclick = function() {
  modal3.style.display = "none";
  count=0;
}





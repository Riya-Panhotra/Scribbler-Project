
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("myBtn3");
var span3 = document.getElementsByClassName("close")[2];
var count1=0;
 btn3.onclick  = function() {
  modal3.style.display = "block";
  count1=3;
}
span3.onclick = function() {
  modal3.style.display = "none";
  count1=0;
}
window.onclick = function(event) 
{
 if(event.target == modal3 && count1==3) 
  {
    modal3.style.display = "none";
    count1=0;
  }
}
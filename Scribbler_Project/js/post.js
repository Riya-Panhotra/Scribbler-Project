var like=0;
var flag=0;
function changeText()
{
if(flag==0)
{
     var x=document.getElementById("temp").innerHTML;
    var title=document.getElementById('blogTitleNew').innerHTML;
    document.getElementById('blogTitleNew').style.display="none";
    document.getElementById('titleArea').value=title;
    document.getElementById('titleArea').style.display="block";
       document.getElementById("text").innerHTML='Save';
    document.getElementById("text2").innerHTML=x;
    // ------------------------------------------------------------now for description by ashish-------------------------------
    var desc=document.getElementById('desc1').innerHTML;
    document.getElementById('textarea').value=desc;
    document.getElementById('desc1').style.display="none";
    document.getElementById('textarea').style.display="block";
    document.getElementById("textarea").style.width="95%";
    document.getElementById("textarea").style.height="260px";

    flag=1;
}
else
{
    var d=document.getElementById("temp2").innerHTML;
    document.getElementById("text").innerHTML='Edit';
    document.getElementById("text2").innerHTML=d;
    var title1=document.getElementById('titleArea').value;
    document.getElementById('blogTitleNew').innerHTML=title1;
    document.getElementById('titleArea').style.display="none";
    document.getElementById('blogTitleNew').style.display="block";
    var desc111=document.getElementById('textarea').value;
    document.getElementById('desc1').innerHTML=desc111;
    document.getElementById('desc1').style.display="block";
    document.getElementById('textarea').style.display="none";
    flag=0;
}
}
function liker1()
{
    like++;
document.getElementsByClassName('likeText')[0].innerHTML="Liked!";
if(like==1)
{
    document.getElementById('like6').innerHTML=like+" person likes this!";
}
else
{
    document.getElementById('like6').innerHTML=like+" people have liked this!";
}
document.getElementById('commentBox').style.display="block";
}
function cmnt()
{
   
    var p=document.getElementById('commentArea').style.display="block";
    var e=document.getElementById('commentArea').innerHTML;
    var data=document.getElementById('cmntText').value;
    document.getElementById('commentArea').innerHTML="<p style='background-color:white; margin:10px; padding-top:11px;height:35px;'>"+data+"</p>"+e;
}

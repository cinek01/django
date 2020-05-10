function show_home()
{
  document.getElementById("first").style.display="none";
	document.getElementById("second").style.display="none";
	document.getElementById("third").style.display="none";
}
function show_first()
{
  if (document.getElementById("first").style.display=="block"){
	document.getElementById("first").style.display="none";
	document.getElementById("second").style.display="none";
	document.getElementById("third").style.display="none";
}
else
{
  document.getElementById("first").style.display="block";
  document.getElementById("second").style.display="none";
  document.getElementById("third").style.display="none";
}
}
function show_second()
{
  if (document.getElementById("second").style.display=="block"){
  document.getElementById("first").style.display="none";
  document.getElementById("second").style.display="none";
  document.getElementById("third").style.display="none";
}
else
{
  document.getElementById("first").style.display="none";
  document.getElementById("second").style.display="block";
  document.getElementById("third").style.display="none";
}
}
function show_third()
{
  if (document.getElementById("third").style.display=="block"){
  document.getElementById("first").style.display="none";
  document.getElementById("second").style.display="none";
  document.getElementById("third").style.display="none";
}
else
{
  document.getElementById("first").style.display="none";
  document.getElementById("second").style.display="none";
  document.getElementById("third").style.display="block";
}
}
var first= false;
var second= false;
var third= false;
location.hash = "";
location.hash = "#home";
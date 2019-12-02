function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = digits(m);
  s = digits(s);
  document.getElementById('clock').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime);
}
function digits(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

function pic1(){
  var x = document.getElementById("wf1");
  if (x.style.visibility==="hidden"){
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}

function pic2(){
  var x = document.getElementById("wf2");
  if (x.style.visibility==="hidden"){
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}

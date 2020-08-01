let input = prompt("คะแนนที่ได้")
document.getElementById("input").innerHTML = "คะแนนของคุณ"+" "+input+" "+"คะแนน"
if( input >= 80){
  document.getElementById("result").innerHTML = "คุณได้เกรด A"
}else if( input >= 70){
  document.getElementById("result").innerHTML = "คุณได้เกรด B"
}else if( input >= 60){
  document.getElementById("result").innerHTML = "คุณได้เกรด C"
}else if( input >= 50){
  document.getElementById("result").innerHTML = "คุณได้เกรด D"
}else{
  document.getElementById("result").innerHTML = "คุณได้เกรด F"
}
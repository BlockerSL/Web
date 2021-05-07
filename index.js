    function sahand()
{
  var  Tag=document.getElementById("Tag").value;
  if(Tag=="I"){
 

  open("https://sahand-chemist-i.netlify.app/");

 
  }
  
  else{
    alert("fail");
  }
  
}




function Sahand(){
  

document.write("<TABLE BORDER=ON>");
document.write("<TH>Sahand</TH><TH>Sahands</TH>");
for(x = 1; x <=3; x++){ 
  document.write("<TR><TD>",x, "</TD>");
  for(y = 0; y<=2;y++){ 
    document.write("<TD>", table[x][y], "</TD>");
  }
  document.write("</TR>");
}
document.write("</TABLE>");
}

part1 = new Array("Bro<sub>4</sub>","Bro<sub>3</sub>","Bro<sub>2</sub>");
part2 = new Array("45","47","65");
brakeParts = new Array("", part1, part2);

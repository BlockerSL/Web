    function sahand()
{
  var  Tag=document.getElementById("Tag").value;
  if(Tag=="I"){
 

   displayInventory(table);

 
  }
  
  else{
    alert("fail");
  }
  
}




function displayInventory(table){<!--from w w  w. j a  va 2  s  . c  o  m-->
document.write("<TABLE BORDER=ON>");
document.write("<TH>Item Number</TH><TH>Item Name</TH><TH>Model Number</TH><TH>Quantity</TH>");
for(x=1; x<=3; x++) {
document.write("<TR><TD>",x,"</TD>");
for(y=0; y<=2; y++){
document.write("<TD>",table[x][y],"</TD>");
}
document.write("</TR>");
}
document.write("</TABLE>");
}
part1 = new Array("Bro<sub>4</sub>","3",78);
part2 = new Array("B","2",45);
part3 = new Array("C","1","14");
brakeParts = new Array("",part1,part2,part3);

displayInventory(brakeParts);


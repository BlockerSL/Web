    function sahand()
{
  var  Tag=document.getElementById("Tag").value;
  if(Tag=="I"){
 

S1()

 
  }
  
  else{
    alert("fail");
  }
  
}
function S1()
{
var users = ['Bro<sup>-</sup> ', 'Bro<sub>2</sub><sup>-</sup>', 'Bro<sub>3</sub><sup>-</sup>','Bro<sub>4</sub><sup>-</sup>'];
    var ages = ['ژوور بڕۆمات','بڕۆمات','بڕۆمیت','ژێر بڕۆمیت'];

    // Getting output element
    var output = document.getElementById('output');

    // Creating table tags
    var table = "<table><thead><tr><th>ID</th><th>Name</th><th>Age</th></tr></thead><tbody>";

    for (var i = 0; i < users.length; i++) {
      table += "<tr><td>" + (i + 1) + "</td><td>" + users[i] + "</td><td>" + ages[i] + "</td><td>"  + "</td></tr>";
    }

    table += "</tbody></table>";

    // Binding output element with table var
    output.innerHTML = table;
}

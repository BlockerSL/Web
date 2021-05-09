function sahand()
{
  var Tag = document.getElementById("Tag").value;
  if (Tag == "Cl") {

  window.open('https://sahand-chemist-i.netlify.app', '_blank');
  }
  else if (Tag == "Br"){
    window.open('https://sahand-chemist-br.netlify.app', '_blank');
  }
  
  else {
    alert("incorect Name");
    
  }
  }

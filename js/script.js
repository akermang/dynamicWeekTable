var table1= document.getElementById("table1");

for(i = 0; i < 16; i++){
  var tr= document.createElement("tr");
  for(j = 0; j < 8; j++){
    var td= document.createElement("td");
    textArea= document.createElement("textarea");
    button= document.createElement("button");
    button.innerText= "Save Text"
    button.addEventListener('click', save);
    td.appendChild(textArea);
    td.appendChild(button);
    tr.appendChild(td);
  }
  table1.appendChild(tr);

};

function save(){
  alert("saved")
};

var table1= document.getElementById("table1");

function init() {
  var data = getData();
}

for(i = 0; i < 16; i++){
  var tr= document.createElement("tr");
  for(j = 0; j < 8; j++){

    var td=       document.createElement("td");
    var textArea= document.createElement("textarea");
    var button=   document.createElement("button");

    button.innerText= "Save Text"
    button.addEventListener('click', save.bind(this, textArea, j, i));

    td.appendChild(textArea);
    td.appendChild(button);
    tr.appendChild(td);
  }
  table1.appendChild(tr);
};

function save(textArea, cellIndex, rowIndex, e){
  var text = textArea.value;
  var d = {
    cellIndex: cellIndex,
    rowIndex: rowIndex,
    text: text
  };
  post(d);
};

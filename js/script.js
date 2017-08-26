var table1= document.getElementById("table1");

function init() {
  createTable();
  populateTable();
}

function createTable() {
  for(i = 0; i < 16; i++){
    var tr= document.createElement("tr");
    for(j = 0; j < 8; j++){

      var td=       document.createElement("td");
      var tdId = 8*i+j;
      td.setAttribute("id", tdId);
      var textArea= document.createElement("textarea");
      var button=   document.createElement("button");

      button.innerText= "Save Text";
      button.addEventListener('click', save.bind(this, textArea,tdId));

      td.appendChild(textArea);
      td.appendChild(button);
      tr.appendChild(td);
    }
    table1.appendChild(tr);
  };

};

function save(textArea, tdId, e){
  var text = textArea.value;

  var d = {
    tdId: tdId,
    text: text
  };
  post(d);
  populateTable();
};

function populateTable() {
  var data = getData();
  var table = document.getElementById("table1");
  var tds = document.getElementsByTagName('td');
  var data = getData();

  for(var i = 0; i < data.length; i++) {
    var item = data[i];
    var td = tds[item.tdId];
    td.children[0].value = item.text;     
  }
}

var table1= document.getElementById("table1");

function init() {
  createTable();
  populateTable();
}

function createTable() {
  for(i = 0; i < 7; i++){
    var tr= document.createElement("tr");
    for(j = 0; j < 8; j++){

      var td = document.createElement("td");      
      var tdId = 8*i+j;
      var textArea = document.createElement("textarea");
      
      textArea.setAttribute('class', 'ta');
      td.setAttribute("id", tdId);      

      td.addEventListener("click",openTextArea.bind(this, textArea, td));
      textArea.addEventListener('blur', save.bind(this, textArea, td));

      tr.appendChild(td);
    }
    table1.appendChild(tr);
  };

};

var selectedCellId = null;

function openTextArea(textArea, td){  

  if(selectedCellId !== td.id) {
    textArea.value = td.innerText;
  }

  var hasTextArea = td.querySelector('textarea');
  
  if(!hasTextArea) { 
    td.appendChild(textArea); 
    textArea.focus();       
    selectedCellId = td.id; 
  }
}

function save(textArea, td, e){
  var text = textArea.value;

  var d = {
    tdId: td.id,
    text: text
  };
  
  td.removeChild(textArea);
  td.innerText = text;

  post(d);
};

function populateTable() {
  var data = getData();
  var table = document.getElementById("table1");
  var tds = document.getElementsByTagName('td');
  var data = getData();

  for(var i = 0; i < data.length; i++) {
    var item = data[i];
    var td = tds[item.tdId];
    td.innerHTML = item.text;
  }
}

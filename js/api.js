function getData(){
  var storedData = localStorage.getItem("data");
  if(storedData == null){
    localStorage.setItem("data", JSON.stringify(mockData));
    return mockData;
  }
  return JSON.parse(storedData);
};

function post(object){
  var data = getData();
  checkNewData(data,object);


  function checkNewData(array,object){
    var check = 1;
    item = array.forEach(function(item,i){
      if(item.tdId == object.tdId){
        item.text = object.text;
        var check = 0;
        console.log(object.tdId);
        console.log(check);
        console.log(item.tdId);
      }
    });
  };

  if(check = 1){
    data.push(object);
  };
  localStorage.setItem("data", JSON.stringify(data));
};

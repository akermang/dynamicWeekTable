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
  data.push(object);
  localStorage.setItem("data", JSON.stringify(data));
}

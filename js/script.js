const itemText =[];

function input(id) {
   const data = document.getElementById(id).value;
   return data;
}
function doesExists(data) {
  return itemText.includes(data);
}

function createElement(data) {
   const item = document.createElement('td');
   item.innerText = data;
   return item;
}

function addProduct() {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
 


  var addrw = document.getElementById("table");
  var newrw = addrw.insertRow(1);

  var cel1 = newrw.insertCell(0);
  var cel2 = newrw.insertCell(1);
  var cel3 = newrw.insertCell(2);

  cel1.innerHTML = id;
  cel2.innerHTML = name;
  cel3.innerHTML = price;
  return false;
}

function resetAll() {
    document.getElementById("inputProduct").reset();
}

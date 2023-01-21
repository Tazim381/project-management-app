const itemText = [];

function checkValidity(id, name, price) {
  if (id === "" || name === "" || price === "") {
    alert("Emty string is not allowed");
    return 0;
  }
  if (price < 0) {
    alert("price should be a positive number");
    return 0;
  }
  if (price > 100000) {
    alert("price must be less than  100000 ");
    return 0;
  }
  if (name.length > 60) {
    alert("product name should be less than 60 character");
    return 0;
  }
}

function constractObjectArray(id,name,price) {
  let item = {
    p_id: id,
    p_name: name,
    p_price: price,
  };
  itemText.push(item);
}

function addProduct() {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;

  if ((checkValidity(id, name, price))==0) {
    return;
  }

  constractObjectArray(id,name,price);

  console.log(itemText);

  



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

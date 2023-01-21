const itemText = [];

function showError(value) {
  const id = document.getElementById(value);
  id.style.border = "2px solid";
  id.style.borderColor = "red";
  const valueError = value + "Error";
  console.log(valueError);
  const error = document.getElementById(valueError);
  error.textContent = `Please insert correct ${value}`;
  error.style.color = "red";
}

function checkInputValidity(id, name, price) {
  if (id === "" || name === "" || price === "") {
    if (id === "") showError("id");
    if (name === "") showError("name");
    if (price === "") showError("price");
    alert("Emty string is not allowed");
    return 0;
  }
  if (price < 0) {
    showError("price");
    alert("price should be a positive number");
    return 0;
  }

  if (price > 100000) {
    showError("price");
    alert("price must be less than  100000 ");
    return 0;
  }
  if (name.length > 60) {
    showError("name");
    alert("product name should be less than 60 character");
    return 0;
  }
}

function constractObjectArray(id, name, price) {
  let item = {
    productId: id,
    productName: name,
    productPrice: price,
  };
  itemText.push(item);
}

function checkUniqueId(id, itemText) {
  const result = 1;
  itemText.forEach(function (arrayItem) {
    var x = arrayItem.productId;
    if (x === id) {
      showError("id");
      alert("Id already exist");
      result = 0;
      return;
    }
  });
  return result;
}

function addProduct() {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;

  if (checkInputValidity(id, name, price) == 0) {
    return;
  }

  if (checkUniqueId(id, itemText) == 0) {
    return;
  }

  constractObjectArray(id, name, price);

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

const itemText = [];

function showError(value) {
  const id = document.getElementById(value);
  id.style.border = "2px solid";
  id.style.borderColor = "red";
  const valueError = value + "Error";
  const error = document.getElementById(valueError);
  error.textContent = `Please insert correct ${value}`;
  error.style.color = "red";
}

function dontShowError(value) {
  const id = document.getElementById(value);
  id.style.border = "1px solid";
  id.style.borderColor = "black";
  const valueError = value + "Error";
  const error = document.getElementById(valueError);
  error.textContent = ``;
  error.style.color = "";
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
  } else {
    dontShowError("price");
  }

  if (price > 100000) {
    showError("price");
    alert("price must be less than  100000 ");
    return 0;
  } else {
    dontShowError("price");
  }

  if (name.length > 60) {
    showError("name");
    alert("product name should be less than 60 character");
    return 0;
  } else {
    dontShowError("name");
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
    } else {
      dontShowError("id");
    }
  });
  return result;
}

function insertItem() {
  var addrw = document.getElementById("table");
  var tableRows = addrw.getElementsByTagName('tr');
  var rowCount = tableRows.length;
  console.log(rowCount);
  for (var x=rowCount-1; x>0; x--) {
     document.getElementById("table").deleteRow(x);
  }
 

  itemText.forEach(function (arrayItem) {
  var newrw = addrw.insertRow(1);

  var cel1 = newrw.insertCell(0);
  var cel2 = newrw.insertCell(1);
  var cel3 = newrw.insertCell(2);
  var cel4 = newrw.insertCell(3);
  var cel5 = newrw.insertCell(4);
  
    cel1.innerHTML = arrayItem.productId;
    cel2.innerHTML = arrayItem.productName;
    cel3.innerHTML = arrayItem.productPrice;
    cel4.innerHTML = '<button id="edit">Edit</button>';
    cel5.innerHTML = `<button id="delete" onclick='deleteItem(${arrayItem.productId})'>Delete</button>`;
  });
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

  
  insertItem();

  return false;
}


function deleteItem(id) {
  if(confirm("are you sure to delete id "+`${id}` +" ? ")) {
  let newId = id.toString();
  let iterator = 0;
  itemText.forEach(function (arrayItem) {
    const x = arrayItem.productId;
    if (x === newId) {
      console.log("yes");
      console.log(iterator);
      itemText.splice(iterator, 1);
      console.log(itemText);
      insertItem();
    }
    iterator++;
  });
}
}


function resetAll() {
  document.getElementById("inputForm").reset();
}
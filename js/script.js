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
    alert("Emty string is not allowed");
    if (id === "") showError("id");
    if (name === "") {
      showError("name");
      showError("productName");
    } 
    if (price === "") {
      showError("price");
      showError("productPrice");
    } 
    return 0;
  }
  if (price < 0) {
    alert("price should be a positive number");
    showError("price");
    showError("productPrice");
    return 0;
  } else {
    dontShowError("price");
  }

  if (price > 100000) {
    showError("price");
    showError("productPrice");
    alert("price must be less than  100000 ");
    return 0;
  } else {
    dontShowError("price");
  }
  if (name.length > 60) {
    showError("name");
    showError("productName");
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
  let newId = id.toString();
  // itemText.forEach(function (arrayItem) {
  //   let x = arrayItem.productId;
  //   if (x === id) {
  //     showError("id");
  //     alert("Id already exist");
  //     result = 0;
  //     return;
  //   } else {
  //     dontShowError("id");
  //   }
  // });
  if (itemText.find(arrayItem => arrayItem.productId === newId)) {
      showError("id");
      alert("Id already exist");
      result = 0;
      return;  
  }
  else {
    dontShowError("id");
  }
  return result;
}


function insertItem() {
  var addrw = document.getElementById("table");
  var tableRows = addrw.getElementsByTagName('tr');
  var rowCount = tableRows.length;
  
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
    cel4.innerHTML = `<button id="edit" onclick='editItem(${arrayItem.productId})'>Edit</button>`;
    cel5.innerHTML = `<button id="delete" onclick='deleteItem(${arrayItem.productId}, this)'>Delete</button>`;
  });
}


function addProduct() {
  const id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  name = name.trim();
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


function deleteItem(id, row) {
  if(confirm("are you sure to delete id "+`${id}` +" ? ")) {
  let newId = id.toString();
  // let iterator = 0;
  // itemText.forEach(function (arrayItem) {
  //   const x = arrayItem.productId;
  //   if (x === newId) {
      
  //     itemText.splice(iterator, 1);
  //     console.log(itemText);
  //     let index = row.parentNode.parentNode.rowIndex;
  //     document.getElementById("table").deleteRow(index);
      
  //   }
  //   iterator++;
  // });
  const iterator =  itemText.findIndex(function(item){
    if (item.productId === newId) {
     return true;
    }
 });

      itemText.splice(iterator, 1);
      //console.log(itemText);
      let index = row.parentNode.parentNode.rowIndex;
      console.log(iterator);
      console.log(index);
      document.getElementById("table").deleteRow(index);
}
}

function editItem(id){
  
  if(confirm("are you sure to edit id "+`${id}` +" ? ")) {
  document.getElementById("inputProduct").hidden = true;
  document.getElementById("editContact").hidden = false;
  let newId = id.toString();
  // let iterator = 0;
  // for(iterator=0; iterator<itemText.length; iterator++) {
  //   const x = itemText[iterator].productId;
  //   if (x === newId) {
  //       break;
  //   }
  // }

  const iterator =  itemText.findIndex(function(item){
     if (item.productId === newId) {
      return true;
     }
  });

  console.log(iterator);
  console.log(itemText[iterator]);
  document.getElementById("editContact").style.display = '';
  document.getElementById("editContact").innerHTML =
        '<section class="inputProduct">'+
        '<h3>Update Value</h3>'+
        '<div>'+
        '<label>Product Id</label>'+'<br>'+
        '<input type="number"  id="ProductId" readonly="readonly" value="' +itemText[iterator].productId+ '">' +
        '<span id="productIdError" ></span>'+
        '</div>'+
        '<div>'+
        '<label>Product Name</label>'+'<br>'+
        '<input type="text"  id="productName" value="' +itemText[iterator].productName + '">' +
        '<span id="productNameError" ></span>'+
        '</div>'+
        '<div>'+
        '<label>Product Price</label>'+'<br>'+
        '<input type="number"  id="productPrice" value="' + itemText[iterator].productPrice+ '">' +
        '<span id="productPriceError" ></span>'+
        '</div>'+
        '<div>'+ 
        `<button id="add" onclick='updateItem(${iterator})' >Update</button>`+
        `<button id="back" onclick='backButton()' >Back</button>`+
       '</div>'+
       '</section>';
}
}

function updateItem(iterator) {
   //const id = document.getElementById("productId").value;
   const name = document.getElementById("productName").value;
   const price = document.getElementById("productPrice").value;
   itemText[iterator].productName = name.trim();
   itemText[iterator].productPrice = price;
    if (checkInputValidity(id, name, price) == 0) {
    return;
  }
  insertItem();  
}


function backButton() {
  document.getElementById("inputProduct").hidden = false;
  document.getElementById("editContact").hidden = true;
}

function resetAll() {
  document.getElementById("inputForm").reset();
  
}
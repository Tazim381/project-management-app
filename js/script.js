const itemText =[];

function addProduct() {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
 
  let item = {
    p_id:id,
    p_name:name,
    p_price: price
  };

  itemText.push(item);

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

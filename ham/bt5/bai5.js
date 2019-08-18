let product = [
  "Sony Xperia",
  "Nokia 6",
  "Xiaomi Redmi Note 4",
  "Apple iPhone 6S"
];
display(product);

function add(x) {
  x = document.getElementById("txtInput").value;
  if (check(x)) return alert("Nhập lại sản phẩm!");
  else {
    product.push(x);
    display(product);
    document.getElementById("txtInput").value = "";
  }
}
function check(x) {
  for (let i = 0; i < product.length; i++) {
    if (x == product[i] || x == "") return true;
  }
  return false;
}

function deleteProduct(x) {
  product.splice(x, 1);
  display(product);
}

function edit(x) {
  let a = prompt("Nhập lại sản phẩm: ");
  if (a !== "" && a !== null) {
    product[x] = a;
    display(product);
  } else {
    display(product);
  }
}

function display(x) {
  let text = "";
  for (let i = 0; i < product.length; i++) {
    text += "<tr>";
    text += "<td id='" + i + "'>" + product[i] + "</td>";
    text +=
      "<td>" +
      "<button onclick='edit(" +
      i +
      ")' >" +
      "edit" +
      "</button>" +
      "</td>";
    text +=
      "<td>" +
      "<button onclick='deleteProduct(" +
      i +
      ")'>" +
      "delete" +
      "</button>" +
      "</td>";
    text += "</tr>";
  }
  document.getElementById("tbody").innerHTML = text;
  document.getElementById("abc").innerHTML = product.length + " products";
}

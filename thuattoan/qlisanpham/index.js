let products = ["Sony Xperia", "Samsung Galaxy", "Nokia 6"];
display(products);

function display(products) {
  let text = "";
  for (let i = 0; i < products.length; i++) {
    text += "<tr>";
    text += "<td id='" + i + "'>" + products[i] + "</td>";
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
    document.getElementById("idtbody").innerHTML = text;
    document.getElementById("productAmount").innerHTML =
      products.length + " products";
  }
}

var targetNode;

function init() {
  targetNode = document.getElementById("hasil").firstChild;
}

function hitungKurs(id) {
  var inputEl = document.getElementById(id);
  var nominal = inputEl.value;
  var hasilUsd = parseFloat(nominal) / 18246;
  var hasilFormatted = hasilUsd.toFixed(2);

  targetNode.data = hasilFormatted;

  var listRiwayat = document.getElementById("riwayat");
  var itemBaru = document.createElement("li");
  var teksRiwayat = document.createTextNode("Rp" + nominal + " US$" + hasilFormatted);

  itemBaru.appendChild(teksRiwayat);
  listRiwayat.appendChild(itemBaru);
}
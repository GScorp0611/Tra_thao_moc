function addProduct() {
  const name = document.getElementById('productName').value;
  const image = document.getElementById('productImage').value;
  const price = document.getElementById('productPrice').value;

  if (!name || !image || !price) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  const productRef = database.ref('products').push();
  productRef.set({ name, image, price });

  alert("Thêm thành công!");
  document.getElementById('productName').value = "";
  document.getElementById('productImage').value = "";
  document.getElementById('productPrice').value = "";

  getProducts();
}

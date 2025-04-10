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

function getProducts() {
  database.ref('products').on('value', function(snapshot) {
    const data = snapshot.val();
    const list = document.getElementById('productList');
    list.innerHTML = '';

    for (let id in data) {
      const p = data[id];
      list.innerHTML += `
        <div class="product-item">
          <h3>${p.name}</h3>
          <img src="${p.image}" width="100">
          <p>${p.price} VNĐ</p>
          <button onclick="deleteProduct('${id}')">Xóa</button>
        </div>
      `;
    }
  });
}

function deleteProduct(id) {
  database.ref('products/' + id).remove();
  alert("Đã xóa sản phẩm!");
}

getProducts();

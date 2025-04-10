// Thêm sản phẩm
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

// Hiển thị danh sách sản phẩm
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
          <button onclick="showUpdateForm('${id}', '${p.name}', '${p.image}', '${p.price}')">Sửa</button>
        </div>
      `;
    }
  });
}

// Xóa sản phẩm
function deleteProduct(id) {
  database.ref('products/' + id).remove();
  alert("Đã xóa sản phẩm!");
}

// Hiện form cập nhật
function showUpdateForm(id, name, image, price) {
  document.getElementById('updateSection').style.display = 'block';

  document.getElementById('updateProductName').value = name;
  document.getElementById('updateProductImage').value = image;
  document.getElementById('updateProductPrice').value = price;

  document.getElementById('updateBtn').setAttribute('onclick', `updateProduct('${id}')`);
}

// Cập nhật sản phẩm
function updateProduct(id) {
  const name = document.getElementById('updateProductName').value;
  const image = document.getElementById('updateProductImage').value;
  const price = document.getElementById('updateProductPrice').value;

  if (!name || !image || !price) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  database.ref('products/' + id).update({
    name,
    image,
    price
  });

  alert("Cập nhật thành công!");
  document.getElementById('updateSection').style.display = 'none';

  getProducts();
}

getProducts();

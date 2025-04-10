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
    clearForm();
    getProducts();
  }
  
  // Xóa sản phẩm
  function deleteProduct(id) {
    if (confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
      database.ref('products/' + id).remove();
      alert("Đã xóa sản phẩm!");
    }
  }
  
  // Load sản phẩm
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
            <button onclick="editProduct('${id}', '${p.name}', '${p.image}', '${p.price}')">Sửa</button>
            <button onclick="deleteProduct('${id}')">Xóa</button>
          </div>
        `;
      }
    });
  }
  
  // Sửa sản phẩm
  function editProduct(id, name, image, price) {
    document.getElementById('productName').value = name;
    document.getElementById('productImage').value = image;
    document.getElementById('productPrice').value = price;
  
    const btnAdd = document.querySelector('button[onclick="addProduct()"]');
    btnAdd.style.display = 'none';
  
    let updateBtn = document.getElementById('updateBtn');
    if (!updateBtn) {
      updateBtn = document.createElement('button');
      updateBtn.id = 'updateBtn';
      updateBtn.innerText = 'Cập nhật';
      updateBtn.style.marginTop = '10px';
      updateBtn.onclick = function() {
        updateProduct(id);
      };
      document.querySelector('.form-add').appendChild(updateBtn);
    }
  }
  
  // Cập nhật sản phẩm
  function updateProduct(id) {
    const name = document.getElementById('productName').value;
    const image = document.getElementById('productImage').value;
    const price = document.getElementById('productPrice').value;
  
    if (!name || !image || !price) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }
  
    database.ref('products/' + id).update({ name, image, price });
  
    alert("Cập nhật thành công!");
  
    clearForm();
  
    document.getElementById('updateBtn').remove();
    document.querySelector('button[onclick="addProduct()"]').style.display = 'inline-block';
  
    getProducts();
  }
  
  // Clear form input
  function clearForm() {
    document.getElementById('productName').value = "";
    document.getElementById('productImage').value = "";
    document.getElementById('productPrice').value = "";
  }
  
  getProducts();

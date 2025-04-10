// Kết nối Firestore
const db = firebase.firestore();

const productList = document.getElementById('product-list');
const productForm = document.getElementById('product-form');

// Load danh sách sản phẩm
async function renderProducts() {
  productList.innerHTML = '';
  const snapshot = await db.collection('products').get();
  snapshot.forEach(doc => {
    const data = doc.data();
    productList.innerHTML += `
      <div>
        <h3>${data.name}</h3>
        <p>${data.price} VNĐ</p>
        <button onclick="deleteProduct('${doc.id}')">Xoá</button>
      </div>
    `;
  });
}

// Thêm sản phẩm
productForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = productForm['name'].value;
  const price = parseFloat(productForm['price'].value);

  if (name && price) {
    await db.collection('products').add({ name, price });
    alert('Thêm sản phẩm thành công!');
    productForm.reset();
    renderProducts();
  } else {
    alert('Vui lòng nhập đầy đủ thông tin!');
  }
});

// Xoá sản phẩm
async function deleteProduct(id) {
  const confirmDelete = confirm('Bạn có chắc chắn muốn xoá sản phẩm này?');
  if (confirmDelete) {
    await db.collection('products').doc(id).delete();
    renderProducts();
  }
}

renderProducts();

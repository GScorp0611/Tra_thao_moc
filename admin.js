// admin.js

const productList = document.getElementById('product-list');
const productForm = document.getElementById('product-form');

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

productForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = productForm['name'].value;
  const price = productForm['price'].value;

  await db.collection('products').add({ name, price });
  productForm.reset();
  renderProducts();
});

async function deleteProduct(id) {
  await db.collection('products').doc(id).delete();
  renderProducts();
}

renderProducts();

// Kết nối Firebase
const productList = document.querySelector('.product-list');

// Lấy dữ liệu từ Realtime Database
database.ref('products').on('value', function(snapshot) {
  const data = snapshot.val();
  productList.innerHTML = ''; // Clear dữ liệu cũ

  for (let id in data) {
    const p = data[id];
    productList.innerHTML += `
      <div class="product-item">
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>${p.price} VNĐ</p>
      </div>
    `;
  }
});

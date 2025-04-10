function loadProducts() {
  database.ref('products').on('value', function(snapshot) {
    const data = snapshot.val();
    const list = document.getElementById('productShowcase');
    list.innerHTML = '';

    for (let id in data) {
      const p = data[id];
      list.innerHTML += `
        <div class="product-item">
          <h3>${p.name}</h3>
          <img src="${p.image}" width="100">
          <p>${p.price} VNĐ</p>
        </div>
      `;
    }
  });
}

loadProducts();

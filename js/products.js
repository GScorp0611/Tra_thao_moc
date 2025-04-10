import { database } from 'firebase-config.js';
import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

// Lấy danh sách sản phẩm từ Firebase
const productList = document.getElementById('product-list');

const productsRef = ref(database, 'products'); // Đường dẫn đến dữ liệu sản phẩm

onValue(productsRef, (snapshot) => {
  productList.innerHTML = ''; // Clear danh sách cũ
  snapshot.forEach(childSnapshot => {
    const product = childSnapshot.val();

    productList.innerHTML += `
      <div class="product-item">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price} VNĐ</p>
      </div>
    `;
  });
});

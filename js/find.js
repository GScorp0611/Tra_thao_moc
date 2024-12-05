document.getElementById('search-btn').addEventListener('click', function() {
    var searchInput = document.getElementById('search-input').value.toLowerCase();
    var products = document.querySelectorAll('.product');

    products.forEach(function(product) {
        var productName = product.querySelector('h3').textContent.toLowerCase();
        var productDescription = product.querySelector('p').textContent.toLowerCase();

        if (productName.includes(searchInput) || productDescription.includes(searchInput)) {
            product.style.display = 'block'; // Hiển thị sản phẩm nếu tìm thấy
        } else {
            product.style.display = 'none'; // Ẩn sản phẩm nếu không khớp
        }
    });
});

// Nếu cần thêm các tính năng JavaScript, ví dụ như xử lý form, animation, hoặc các sự kiện khác
// Ví dụ: Đơn giản là hiển thị thông báo khi form được gửi
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ trả lời bạn sớm.');
});
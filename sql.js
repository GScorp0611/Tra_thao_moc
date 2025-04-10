const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: '34.45.138.252',  // Địa chỉ IP Public của Cloud SQL
    user: 'root',           // Tên người dùng MySQL
    password: 'MaiTin@10112003',        // Mật khẩu MySQL
    database: 'mysql',  // Tên database
    connectTimeout: 10000   // Timeout là 10 giây
});

app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('API server running');
});

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Lucky@28',
    database: 'signup'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

app.post('/api/signup', (req, res) => {
    const { email, password } = req.body;

    // Server-side validation
    if (!email || !password) {
        return res.json({ success: false, message: 'Email and password are required' });
    }

    if (password.length < 8) {
        return res.json({ success: false, message: 'Password must be at least 8 characters' });
    }

    const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
    db.query(query, [email, password], (error, results) => {
        if (error) {
            res.json({ success: false, message: 'An error occurred' });
        } else {
            res.json({ success: true });
        }
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
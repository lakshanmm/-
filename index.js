const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});

app.get('/pair', (req, res) => {
    res.sendFile(path.join(__dirname, 'pair.html'));
});

app.get('/code', (req, res) => {
    const { number } = req.query;
    if (!number) {
        return res.status(400).json({ error: 'Number is required' });
    }
    res.json({ code: '123456', message: 'This is a test response' });
});

app.get('/ping', (req, res) => {
    res.json({ 
        status: 'active', 
        message: 'HASHAN-MD Server is running',
        timestamp: new Date().toISOString()
    });
});

module.exports = app;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`✅ HASHAN-MD Server running on port ${PORT}`);
    });
}

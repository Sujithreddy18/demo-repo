const express = require('express');
const app = express();

app.get('/health-checkup', function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username !== 'sujith' || password !== 'pass') {
        res.status(400).json({"msg": "Invalid credentials"});
    } 
    if (kidneyId == 1 || kidneyId == 2) {
        res.json({"msg": "Your kidney is fine"});
    } 
    else {
        res.status(400).json({"msg": "Invalid kidney ID"});
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

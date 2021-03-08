const express = require('express');
require('./db/conn')
const app = express();
const port = process.env.PORT || 3000;

// create new students
app.post('/students', (req, res) => {
    res.send('hello from the other side.');
})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})
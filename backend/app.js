const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors())
app.get('/', (req, res) => {
    res.json('Welcome to streaming-app');
});
app.use('/videos', require('./routes/video'))

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});
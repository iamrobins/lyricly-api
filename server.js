const express = require('express');
const cors = require('cors');
const favicon = require('serve-favicon')
const path = require('path');

// const searchSong = require('./searchSong');
const searchDetails = require('./controllers/searchDetails');
const fetchSong = require('./controllers/fetchSong');
const instantDelete = require('./controllers/instantDelete');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to Lyricly API");
})

// app.get('/:speech', searchSong);
app.get('/play/:songId', fetchSong);
app.get('/del/:songId', instantDelete); //not using delete method
app.get('/:speech', searchDetails);

app.listen(port, () => {
    console.log(`Server is running on port number: ${port}`);
});
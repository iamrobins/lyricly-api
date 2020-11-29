const fs = require('fs');
const path = require('path');

const fetchSong = (req, res) => {

    const { songId } = req.params;
    const songPath = path.join(__dirname, '../', `${songId}.webm`);

    setTimeout(() => {
        if (fs.existsSync(songPath)) {
            res.set('content-type', 'audio/webm');
            // res.append('content-range', 'bytes');
            res.sendFile(songPath);
            console.log('Message From fetchSong.js: fetched from server storage');
        } else {
            res.set('content-type', 'text/html');
            res.status(204).send('Song Link Expires, No Content');
        }
    }, 3000);
}

module.exports = fetchSong;
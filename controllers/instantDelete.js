const fs = require('fs');
const path = require('path');

const instantDelete = (req, res) => {
    const { songId } = req.params;
    const songPath = path.join(__dirname, '../', `${songId}.webm`);
    console.log(songPath);

    try {
        fs.unlinkSync(songPath);
        console.log('Message From instantDelete.js: Song Instantly Deleted');
        res.status(204);
        res.send('Instantly Deleted');
    } catch (err) {
        console.log('Message From instantDelete.js: Error Occured While Instant Deleting');
        res.status(204);
        res.send('Error While Instant Delete');
    }

}

module.exports = instantDelete;
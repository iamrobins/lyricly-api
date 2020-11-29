const fs = require('fs');
const deleteSong = (songPath) => {
    setTimeout(() => {
        try {
            if (fs.existsSync(songPath)) {
                fs.unlinkSync(songPath);
                console.log('Message From deleteSong.js: Song Found and Deleted');
            }
        } catch (err) {
            console.log(err);
            console.log('Message From deleteSong.js: Error Occured While Delay Deleting');
        }
    }, 600000);
}

module.exports = deleteSong;
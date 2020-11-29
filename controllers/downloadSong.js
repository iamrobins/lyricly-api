const fs = require('fs');
const ytdl = require('ytdl-core');

const downloadSong = (songId, songPath) => {
    ytdl(`http://www.youtube.com/watch?v=${songId}`, {filter: 'audioonly'})
    .pipe(fs.createWriteStream(songPath)).on('finish', () => {
        console.log('Message From downloadSong.js: Song Fresh Downloaded');
    });

}


module.exports = downloadSong;
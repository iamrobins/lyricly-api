const fs = require('fs');
const path = require('path');
const youtube_sr = require('youtube-sr');
const downloadSong = require('./downloadSong');
const deleteSong = require('./deleteSong');

const initSearch = (song_name) => {
    return youtube_sr.search(song_name, { limit: 2 })
}

const searchDetails = async (req, res) => {
    const { speech } = req.params;

    try {
        const speechData = await initSearch(speech);
        const songId = speechData[0].id;
        const title = speechData[0].title;
        const duration = speechData[0].durationFormatted;
        const thumbnail = speechData[0].thumbnail.url;
        
        const songPath = path.join(__dirname, '../', `${songId}.webm`); //Make a path where the file will downloaded

        DownloadAndDelete(songId, songPath);

        res.json({
            songId: songId,
            title: title,
            image: thumbnail,
            duration: duration
        })

    } catch (error) {
        console.log('Message From searchDetails.js: Invalid Word');
        res.send('Please enter a valid sentence'); 
        res.end();
    }
}


const DownloadAndDelete = (songId, songPath) => {
    if (!fs.existsSync(songPath)) {
        downloadSong(songId, songPath);
        deleteSong(songPath);
        console.log(`Message From searchDetails.js: Song is scheduled for deletion`);
    } else { 
        console.log('Message From searchDetails.js: Song Already Exists');
    }
}

module.exports = searchDetails;
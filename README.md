# lyricly-api
<img src="api-pics/main.png">

>This api allows you to get any youtube video in audio format.


#### Requesting a song/video will get you a JSON response with following data (id, title, image, duration)
##### route: address/input
<img src="api-pics/search.png">

#### Use the id property to play the song
##### route: address/play/id
<img src="api-pics/play.png">

#### There are two types of deletion, 1. Automatic deletion with a timer, 2. Instant deletion using route
##### route: address/del/id for instant deletion
<img src="api-pics/instant-delete.png">
<img src="api-pics/no-content.png">

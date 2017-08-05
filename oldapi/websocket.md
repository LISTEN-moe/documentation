## Socket endpoint `/api/v2/socket`

Upon opening a connection to the socket server, you'll be greeted with a JSON string that you need to parse, containing playback information. An example of the parsed JSON object looks like this:

```json
    {
        "song_id": 1732,
        "artist_name": "fhána",
        "song_name": "ワンダーステラ",
        "anime_name": "Fate/Kaleid Liner Prisma Illya 2Wei Herz!",
        "requested_by": "kanacchi",
        "listeners": 75,
        "last": {
            "song_name": "すりーぷ!",
            "artist_name": "かめりあ&ななひら"
        },
        "second_last": {
            "song_name": "READY!!",
            "artist_name": "765PRO ALLSTARS"
        }
    }
```

Every time there's an update of the playback information, the socket will send you a JSON string just like the one above with the updated information for you to parse.

----

### Authenticating to the socket

The socket can give you more information about the current queue pool as well, provided you authenticate your user against it. To authenticate your websocket connection you need to send it a JSON string with the following format:

```json
{
    "token": "YOUR_AUTH_TOKEN"
}
```

If the authentication is successful, you'll receive another JSON string with the basic playback information along with an extended object with personalized information relevant to your user id:

```json
    {
        "song_id": 1732,
        "artist_name": "fhána",
        "song_name": "ワンダーステラ",
        "anime_name": "Fate/Kaleid Liner Prisma Illya 2Wei Herz!",
        "requested_by": "kanacchi",
        "listeners": 75,
        "last": {
            "song_name": "すりーぷ!",
            "artist_name": "かめりあ&ななひら"
        },
        "second_last": {
            "song_name": "READY!!",
            "artist_name": "765PRO ALLSTARS"
        },
        "extended": {
            "favorite": false,
            "queue": {
                "songsInQueue": 12,
                "hasSongInQueue": true,
                "inQueueBeforeUserSong": 11,
                "userSongsInQueue": 1
            }
        }
    }
```
Now that you are authenticated, every song update will also bring the extended information shown above. Note that if your connection is closed to the websocket server, you'll need to authenticate again.

***NOTE: If the authentication fails, the json is malformed, or any other error occurs when parsing the data then the server will close your current connection***

----

### Retrieving data

If by any chance you need to retrieve data and you can't wait until the next song change, you can always send to the socket the string `update` and a JSON string will be sent back to you. Again, if your socket connection was previously authenticated, you'll also receive the extended information with it.

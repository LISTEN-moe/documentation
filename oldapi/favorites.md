## Favorite songs `/api/user/favorites`

Gets a list of all the user's favorited songs

Type:

* `GET`

Required parameters

* `authorization` *[ type: string ]*

Returns:

* `songs` *[ type: array ]*
	* `id` *[ type: integer ]*
	* `artist` *[ type: string ]*
	* `title` *[ type: string ]*
	* `anime` *[ type: string ]* ***[ exists only if song is from an anime ]***
	* `enabled` *[ type: bool ]* ***[ exists only if song is on cooldown ]***
* `extra` *[ type: array ]*
	* `requests` *[ type: integer ]*

## Favorite a song `/api/songs/favorite`

Toggles the favorited status of a song. If the song is already on favorites, it will remove it and vice-versa.

Type:

* `POST`

Required parameters

* `authorization` *[ type: string ]*
* `song` *[ type: integer ]*

Returns:

* `favorite` *[ type: bool ]*

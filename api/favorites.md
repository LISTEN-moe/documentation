---
title: Favourites
---

# Favourites Get

## GET `/api/favorites/:username` | `/api/favorites/@me`

### Headers
* `Authorization: your.jwt.token`
or
* `Key: yourapikey`

### On Success
**HTTP Code:** 200

```json
{
	"code": 200,
	"message": "Successfully fetched your favorites.",
	"songs": [
		{
			"id": 11873,
			"title": "春風 SHUN PU",
			"source": "",
			"duration": 0,
			"lastPlayed": "1970-01-01T00:00:00.000Z",
			"artists": [
				{
					"name": "豊崎 愛生",
					"nameRomaji": "",
					"artistImage": "mirror.to.the.artist.image.com"
				},
				...
			],
			"albums": [
				{
					"name": "love your Best",
					"coverIamge": "mirror.to.the.album.image.com"
				},
				...
			]
		},
		...
	]
}
```
OR if you have no favourites:

```json
{
	"code": 200,
	"message": "You do not have any favorites.",
	"songs": []
}
```

### Possible Errors

* No user provided `400 BAD REQUEST`
* No user found `404 NOT FOUND`

# Favourite Add

## POST `/api/favourites/add/:songId`

### Headers
* `Authorization: your.jwt.token`
or
* `Key: yourapikey`

### URL Parameters
* `/:songId` The id of the song you would like to favourite.

### On Success
**HTTP Code:** 200

```json
{
	"code": 200,
	"message": "Sucessfully added the song to your favorites."
}
```

### Possible Errors

* No song id provided `400 BAD REQUEST`
* No song found `404 NOT FOUND`
* Song has already been favourited `400 BAD REQUEST`

# Favourite Remove

## POST `/api/favourites/remove/:songId`

### Headers
* `Authorization: your.jwt.token`
or
* `Key: yourapikey`

### URL Parameters
* `/:songId` The id of the song you would like to unfavourite.

### On Success
**HTTP Code:** 200

```json
{
	"code": 200,
	"message": "Sucessfully removed song from your favorites."
}
```

### Possible Errors

* No song id provided `400 BAD REQUEST`
* No song found `404 NOT FOUND`
* Song has not been favourited `400 BAD REQUEST`

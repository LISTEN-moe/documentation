---
title: Favourites
---

# Favourites @me

## GET `/api/favourites/@me`

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
	"message": "You don\'t have any favorites.",
	"songs": []
}
```

### Possible Errors
**None**

# Favourite Add

## POST `/api/favourites/add/:songId`

### Headers
* `Authorization: your.jwt.token`
or
* `Key: yourapikey`

### URL Parameters
* `/:songId` The id of the song you'd like to favourite.

### On Success
**HTTP Code:** 200

```json
{
	"code": 200,
	"message": "Successfully favourited the song."
}
```

### Possible Errors

* Invalid song id `400 BAD REQUEST`
* Song was already favourited `400 BAD REQUEST`

# Favourite Remove

## POST `/api/favourites/remove/:songId`

### Headers
* `Authorization: your.jwt.token`
or
* `Key: yourapikey`

### URL Parameters
* `/:songId` The id of the song you'd like to unfavourite.

### On Success
**HTTP Code:** 200

```json
{
	"code": 200,
	"message": "Successfully unfavourited the song."
}
```

### Possible Errors

* Invalid song id `400 BAD REQUEST`
* Song isn't favourited `400 BAD REQUEST`

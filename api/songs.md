---
title: Songs
---

# Songs

## GET `/api/songs`

### Headers
* `Authorization: your.jwt.token`
or
* `Key: yourapikey`

### On Success
**HTTP Code:** 200

```json
{
	"code": 200,
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

### Possible Errors
**None**

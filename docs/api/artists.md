# Artists

## Get all artists

```
Type: GET
Route: /artists
```

Response `200`

```json
{
	"message": "Successfully retrieved all artists.",
	"artists": [
		{
			"id": 1,
			"image": null,
			"name": "Aiobahn",
			"nameRomaji": null,
			"releaseCount": 1,
			"slug": "Aiobahn",
			"songCount": 9
		},
		...
	]
}
```

Possible errors

```json
# Code 403
{ "message": "Not authorized." }
```

## Delete a favorited song

```
Type: GET
Route: /artists/{id}
```

URI Parameters
```
Name: id
Type: String
Required: True
```

Response `200`

```json
{
	"message": "Successfully retrieved artist.",
	"artist": {
		"albums": [
			{
				"artistAlbum": {
					"artistId": 1,
					"albumId": 1
				},
				"id": 1,
				"image": "Märchen-EP_cover.jpg",
				"name": "Märchen EP",
				"nameRomaji": null,
				"releaseDate": "1970-01-01T00:00:00.000Z",
				"type": 1
			},
			...
		],
		"id": 1,
		"image": null,
		"lastPlayed": "1970-01-01T00:00:00.000Z",
		"name": "Aiobahn",
		"nameRomaji": null,
		"played": 15,
		"slug": "Aiobahn",
		"songs": [
			{
				"albums": [
					{
						"albumId": 1,
						"songId": 1,
						"trackNumber": 1
					},
					...
				],
				"artistSong": {
					"artistId": 1,
					"songId": 1
				},
				"artists": [
					{
						"artistSong": {
							"artistId": 1,
							"songId": 1
						},
						"id": 1,
						"name": "Aiobahn",
						"nameRomaji": null
					},
					...
				],
				"duration": 176,
				"id": 1,
				"lastPlayed": "1970-01-01T00:00:00.000Z",
				"played": 1,
				"snippet": "1-1. ヘンゼルとグレーテルの森_snippet.mp3",
				"title": "ヘンゼルとグレーテルの森",
				"titleRomaji": null,
				"uploader": {
					"uuid": "345c45aa-5h76-9zh4-6tr7-6tkl52rn5783",
					"username": "testuser",
					"displayName": "TestUser"
				}
			},
			...
		]
	}
}
```

Possible errors

```json
# Code 400
{ "message": "No params provided." }
{ "message": "Invalid params provided." }

# Code 403
{ "message": "Not authorized." }

# Code 404
{ "message": "No artist found." }
```

# Songs

## Song list

```
Type: GET
Route: /songs
```

Response `200`

```json
{
	"message": "Successfully retrieved songs.",
	"songs": [
		{
			"albums": [ "Märchen EP" ],
			"albumsId": [ 1 ],
			"albumsCover": [ "Märchen-EP_cover.jpg" ],
			"albumsReleaseDate": [ "1970-01-01T00:00:00.000Z" ],
			"albumsRomaji": [ null ],
			"albumsSearchRomaji": [ null ],
			"albumsTrackNumber": [ 1 ],
			"albumsType": [ 1 ],
			"artists": [ "Aiobahn" ],
			"artistsId": [ 1 ],
			"artistsRomaji": [ null ],
			"artistsSearchRomaji": [ null ],
			"duration": 176,
			"enabled": true,
			"favorite": false,
			"groups": [],
			"groupsId": [],
			"groupsRomaji": [],
			"groupsSearchRomaji": [],
			"id": 1,
			"lastPlayed": "1970-01-01T00:00:00.000Z",
			"snippet": "1-1. ヘンゼルとグレーテルの森_snippet.mp3",
			"sources": [ null ],
			"sourcesRomaji": [ null ],
			"tags": [],
			"title": "ヘンゼルとグレーテルの森",
			"titleRomaji": null
			"titleSearchRomaji": null,
			"uploaderUuid": "345c45aa-5h76-9zh4-6tr7-6tkl52rn5783",
			"uploaderUsername": "testuser",
			"uploaderDisplayName": "TestUser"
		},
		...
	]
}
```

## User uploads

```
Type: GET
Route: /songs/{username}/uploads
```

URI Parameters:
```
Name: username
Type: String
Required: True
```

Response `200`

```json
{
	"message": "Successfully retrieved uploads.",
	"uploads": [
		{
			"albums": [
				{
					"id": 1,
					"name": "Märchen EP",
					"nameRomaji": null,
					"image": "Märchen-EP_cover.jpg",
					"releaseDate": "1970-01-01T00:00:00.000Z"
				},
				...
			],
			"artists": [
				{
					"id": 1,
					"name": "Aiobahn",
					"nameRomaji": null,
					"image": null
				},
				...
			],
			"duration": 176,
			"groups": [],
			"id": 1,
			"lastPlayed": "1970-01-01T00:00:00.000Z",
			"source": [],
			"title": "ヘンゼルとグレーテルの森",
			"titleRomaji": null,
			"titleSearchRomaji": null
			"uploader": {
				"uuid": "345c45aa-5h76-9zh4-6tr7-6tkl52rn5783",
				"username": "testuser",
				"displayName": "TestUser"
			}
		},
		...
	]
}
# or
{
	"message": "This user does not have any uploads."
	"uploads": []
}
```

Possible errors
```json
# Code 400
{ "message": "No params provided." }
{ "message": "Invalid params provided." }
{ "message": "Not a valid username." }

# Code 404
{ "message": "No user found." }
```

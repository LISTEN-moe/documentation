# Favorites

## Favorite a song

```
Type: POST
Route: /favorites/{id}
```

URI Parameters
```
Name: id
Type: String
Required: True
```

Response `204`

Possible errors

```json
# Code 400
{ "message": "No params provided." }
{ "message": "Invalid params provided." }

# Code 403
{ "message": "Not authorized." }

# Code 404
{ "message": "No song found." }
```

## Delete a favorited song

```
Type: DELETE
Route: /favorites/{id}
```

URI Parameters
```
Name: id
Type: String
Required: True
```

Response `204`

Possible errors

```json
# Code 400
{ "message": "No params provided." }
{ "message": "Invalid params provided." }

# Code 403
{ "message": "Not authorized." }

# Code 404
{ "message": "No song found." }
{ "message": "No favorite found." }
```

## Get favorite songs

```
Type: GET
Route: /favorites/{username}
```

URI Parameters
```
Name: username
Type: String
Required: True
```

Response `200`

```json
{
	"message": "Successfully retrieved favorites.",
	"favorites": [
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
			"notes": null,
			"source": [],
			"tags": [],
			"title": "ヘンゼルとグレーテルの森",
			"uploader": {
				"uuid": ,
				"username": "testuser",
				"displayName": "TestUser"
			}
		},
		...
	]
}
# or
{
	"message": "This user does not have any favorites.",
	"favorites": []
}
```

Possible errors

```json
# Code 400
{ "message": "No params provided." }
{ "message": "Invalid params provided." }
{ "message": "Not a valid username." }

# Code 403
{ "message": "Not authorized." }

# Code 404
{ "message": "No user found." }
```

## Add tags to a favorite

Adding tags to a song is a great way of keeping track of a specific group of songs. Only you can see your tags and they are taken into account when fetching the song list.

```
Type: PUT
Route: /favorites/{id}/tags
```

URI Parameters
```
Name: id
Type: String
Required: True
```

Body
```json
{
	"tags": [
		"an",
		"array",
		"of",
		"tags"
	]
}
```

Response `200`

```json
{
	"message": "Successfully updated tags on favorite.",
	"tags": [
		"an",
		"array",
		"of",
		"tags"
	]
}
```

Possible errors

```json
# Code 400
{ "message": "No params provided." }
{ "message": "Invalid params provided." }
{ "message": "No body provided." }
{ "message": "Invalid body provided." }

# Code 403
{ "message": "Not authorized." }

# Code 404
{ "message": "No favorite found." }
```

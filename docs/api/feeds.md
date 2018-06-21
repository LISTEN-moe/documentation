# Feeds

## Get user's feed

```
Type: GET
Route: /users/{userame}/feed
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
	"message": "Successfully retrieved feeds.",
	"feeds": [
		{
			"id": 54323,
			"type": 1,
			"content": "Feed content",
			"createdAt": "2018-06-04T04:25:51.506Z",
			"editedAt": "2018-06-04T04:25:51.506Z",
			"author": {
				"uuid": "345c45aa-5h76-9zh4-6tr7-6tkl52rn5783",
				"username": "testuser",
				"displayName": "TestUser",
				"avatarImage": "testuser-512x512.jpg"
			},
			"user": {
				"uuid": "345c45aa-5h76-9zh4-6tr7-6tkl52rn5782",
				"username": "anothertestuser",
				"displayName": "AnotherTestUser",
				"avatarImage": "anothertestuser-512x512.jpg"
			},
			"followTarget": [],
			"song": null,
			"upload": null,
			"comments": 1
		},
		...
	]
}
```
::: tip
Depending the `type` property returned, the response structure changes a bit. Here's a breakdown of what's different on each case.
:::

```
Type 1: Someone commented on the user's feed.
Type 2: The user favorited a song
Type 3: The user uploaded a song
Type 4: The user approved an upload (only admins)
```

**When type is 2 or 4**

```json
"content": null,
"song": {
	"title": "sigh",
	"titleRomaji": null,
	"artists": [
		{
			"id": 2761,
			"name": "Luschka",
			"nameRomaji": null
		}
	]
},
"upload": null
```

**When type is 3**

```json
"content": null,
"song": null,
"upload": {
	"title": "ぼなぺてぃーと♡S -Hall staff ver.-",
	"titleRomaji": null,
	"artists": [
		"桜ノ宮苺香 (CV: 和氣あず未)",
		"日向夏帆 (CV: 鬼頭明里)",
		"星川麻冬 (CV: 春野 杏)",
		"天野美雨 (CV: 種﨑敦美)",
		"神崎ひでり (CV: 徳井青空)"
	],
	"artistsRomaji": [
		"Maika Sakuranomiya (CV: Azumi Waki)",
		"Kaho Hinata (CV: Akari Kito)",
		"Hoshikawa Mafuyu (CV: Haruno Anzu)",
		"Amano Miu (CV: Atsumi Tanezaki)",
		"Hideri Kanzaki (CV: Sora Tokui)"
	],
	"artistGroups": [],
	"artistGroupsRomaji": []
},
```


## Delete a feed

```
Type: DELETE
Route: /feeds/{id}
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
{ "message": "No feed found." }
```

## Get feed comments

```
Type: GET
Route: /feeds/{id}/comments
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
	"message": "Successfully retrieved comments.",
	"comments": [
		{
			"id": 1,
			"parentId": 0,
			"content": "some-content",
			"createdAt": "1970-01-01T00:00:00.000Z",
			"editedAt": "1970-01-01T00:00:00.000Z",
			"user": {
				"uuid": "345c45aa-5h76-9zh4-6tr7-6tkl52rn5783",
				"username": "testuser",
				"displayName": "TestUser",
				"avatarImage": "testuser-512x512.jpg"
			}
		},
		...
	]
}

{
	"message": "No comments found.",
	"comments": []
}
```

Possible errors

```json
# Code 400
{ "message": "No params provided." }
{ "message": "Invalid params provided." }

# Code 404
{ "message": "No feed found." }
```

## Post a new comment

```
Type: POST
Route: /feeds/{id}/comments
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
	"parentId": 0,
	"content": "Your comment."
}
```

Response `200`
```json
{
	"message": "Successfully commented on the feed",
	"comment": {
		"id": 1,
		"parentId": 0,
		"content": "some-content",
		"createdAt": "1970-01-01T00:00:00.000Z",
		"editedAt": "1970-01-01T00:00:00.000Z",
		"user": {
			"uuid": "345c45aa-5h76-9zh4-6tr7-6tkl52rn5783",
			"username": "testuser",
			"displayName": "TestUser",
			"avatarImage": "testuser-512x512.jpg"
		}
	}
}
```

Possible errors

```json
# Code 400
{ "message": "No params provided." }
{ "message": "Invalid params provided." }
{ "message": "No body provided." }
{ "message": "Invalid body provided." }

# Code 404
{ "message": "No comment found." }
{ "message": "No feed found." }
```

# News

## Get all the posts

```
Type: GET
Route: /posts
```

Response `200`
```json
{
	"message": "Successfully retrieved posts.",
	"posts": [
		{
			"id": 1,
			"type": 1,
			"slug": "some-slug",
			"title": "some-title",
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
```

## Get a specific post

```
Type: GET
Route: /posts/{slug}
```

URI Parameters
```
Name: slug
Type: String
Required: True
```

Response `200`
```json
{
	"message": "Successfully retrieved post.",
	"post": [
		{
			"id": 1,
			"type": 1,
			"slug": "some-slug",
			"title": "some-title",
			"content": "some-content",
			"createdAt": "1970-01-01T00:00:00.000Z",
			"editedAt": "1970-01-01T00:00:00.000Z",
			"user": {
				"uuid": "345c45aa-5h76-9zh4-6tr7-6tkl52rn5783",
				"username": "testuser",
				"displayName": "TestUser",
				"avatarImage": "testuser-512x512.jpg"
			},
			"comments": [
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
				},
				...
			]
		},
		...
	]
}
```

Possible errors

```json
# Code 400
{ "message": "No params provided." }
{ "message": "Invalid params provided." }

# Code 404
{ "message": "No post found." }
```

## Post a new comment

```
Type: POST
Route: /posts/{id}/comments
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
	"message": "Successfully commented on the post",
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
{ "message": "No post found." }
```

## Get comments on a post

```
Type: GET
Route: /posts/{id}/comments
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
# or
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
{ "message": "No post found." }
```

# Users

## Get user information

```
Type: GET
Route: /users/{username}
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
	"message": "Successfully retrieved user.",
	"user": {
		"uuid": "345c45aa-5h76-9zh4-6tr7-6tkl52rn5783",
		"email": "testUser@gmail.com",
		"username": "testuser",
		"displayName": "TestUser",
		"avatarImage": null,
		"bannerImage": null,
		"bio": null,
		"roles": [
			{
				"id": 5,
				"name": "user",
				"slug": "user",
				"color": null,
				"songRequests": 0
			},
			...
		],
		"settings": {
			"mfa": true
		},
		"userSettings": {},
		"requestsRemaining": 5,
		"additionalRequests": 0,
		"uploadLimit": 30,
		"favorites": 0,
		"uploads": 0
	}
}
```

Possible errors

```json
# Code 400
{ "message": "No params provided." }
{ "message": "Invalid params provided." }

# Code 404
{ "message": "No user found." }
```

## Update profile biography

```
Type: PATCH
Route: /users/{username}
```

URI Parameters
```
Name: username
Type: String
Required: True
```

Body
```json
{
	"bio: "Some info stuff."
}
```
Response `204`

Possible errors

```json
# Code 400
{ "message": "No params provided." }
{ "message": "Invalid params provided." }
{ "message": "No body provided." }

# Code 403
{ "message": "Not authorized." }
```

## Activate 2FA

This endpoint lets you generate a QR code for you to scan with your 2FA app ([Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en), [Authy](https://authy.com/)) which generates a one-time token to send via the API on the next request.

```
Type: GET
Route: /users/{username}/mfa
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
	"otpauthURL": "base64 encoded QR image"
}
```

Possible errors

```json
# Code 400
{ "message": "No params provided." }
{ "message": "Invalid params provided." }
{ "message": "MFA already activated." }

# Code 403
{ "message": "Not authorized." }
```

## Finish activating 2FA

This endpoint expects the code generated on the previous step by the authenticator app.

```
Type: POST
Route: /users/{username}/mfa
```

URI Parameters
```
Name: username
Type: String
Required: True
```

Body
```json
{
	"token": "your_token"
}
```

Response `200`

```json
{
	"message": "Successfully enabled mfa. You will now be logged out."
}
```

Possible errors

```json
# Code 400
{ "message": "No params provided." }
{ "message": "Invalid params provided." }
{ "message": "No body provided." }
{ "message": "Invalid body provided." }
{ "message": "MFA already activated." }

# Code 401
{ "message": "Invalid OTP provided." }

# Code 403
{ "message": "Not authorized." }
```

## Disable 2FA

```
Type: DELETE
Route: /users/{username}/mfa?token={token}
```

URI Parameters
```
Name: username
Type: String
Required: True

Name: token
Type: String
Required: True
```

Response `200`

```json
{
	"message": "Successfully disabled mfa. You will now be logged out."
}
```

Possible errors

```json
# Code 400
{ "message": "No params provided." }
{ "message": "Invalid params provided." }
{ "message": "No body provided." }
{ "message": "Invalid body provided." }
{ "message": "No MFA activated." }

# Code 403
{ "message": "Not authorized." }
```

## Get user roles

```
Type: GET
Route: /users/{username}/roles
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
	"message": "Successfully retrieved roles.",
	"roles": [
		{
			"id": 5,
			"name": "user",
			"slug": "user",
			"color": null,
			"songRequests": 0,
			"enabled": false,
			"userRole": {
				"userId": 1,
				"roleId": 5
			}
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

# Code 403
{ "message": "Not authorized." }

# Code 404
{ "message": "No user found." }
```

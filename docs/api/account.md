# Account

## Register

```
Type: POST
Route: /register
```

Body

```json
{
	"email": "testUser@gmail.com",
	"username": "TestUser",
	"password": "superSecurePassword"
}
```

Response `200`

```json
{ "message": "You have successfully created a new account." }
```

Possible errors

```json
# Code 400
{ "message": "Invalid e-mail address provided." }
{ "message": "An account with that email address and/or username already exists." }
```

## Login

```
Type: POST
Route: /login
```

Body

```json
{
	"username": "TestUser",
	"password": "superSecurePassword"
}
# or
{
	"username": "testUser@gmail.com",
	"password": "superSecurePassword"
}
```

Response `200`

```json
{
	"message": "Successfully logged in.",
	"token": "JWT",
	"apiKey": "your-api-key" #Only if requested via developer access
}
# or
{
	"message": "Please provide the 2FA code to log in.",
	"mfa": true,
	"token": "JWT" #This token is only valid for ~2m from this point on
}
```
Possible errors
```json
# Code 400
{ "message": "No body provided." }
{ "message": "Invalid body provided." }

# Code 401
{ "message": "Invalid authorization." }

# Code 403
{ "message": "This account has been deactivated." }
```

## Login 2FA

```
Type: POST
Route: /login/mfa
```

Additional headers

```
Authorization: Bearer Temp2FAJWT
```

Body

```json
{
	"token": "OPTCode"
}
```

Response `200`

```json
{
	"message": "Successfully logged in.",
	"token": "mfa.JWT",
	"apiKey": "your-api-key" # Only if requested via developer access
}
```
Possible errors
```json
# Code 400
{ "message": "No body provided." }
{ "message": "Invalid body provided." }

# Code 401
{ "message": "Invalid authorization." }

# Code 403
{ "message": "This account has been disabled." }

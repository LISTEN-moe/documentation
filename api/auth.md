---
title: Auth
---

# Auth Register

## POST `/api/auth/register`

### Request body
```json
{
	"email": "email@domain.com",
	"username": "username",
	"password": "password123"
}
```

* Both `email` and `username` have to be unique.
* `email` may not exceed the character limit of 70.
* `password` may not exceed the character limit of 40.
* `username` may only contain alphanumeric symbols or `.`, `-` and `_` and may not exceed the character limit of 32.

### On Success
**HTTP Code:** 201

```json
{
	"code": 201,
	"message": "You have successfully created a new account. Please verify your account before you login."
}
```

### Possible Errors

* Incomplete Request Body `400 BAD REQUEST`
* Invalid email/username or password `401 UNAUTHORIZED`
* Email or Username already in use `409 CONFLICT`

# Auth Login

## POST `/api/auth/login`

### Request body
```json
{
	"email": "email@domain.com",
	"password": "password123"
}
```
OR

```json
{
	"username": "username",
	"password": "password123"
}
```

Accepts either username & password or email address & password.

### On Success
**HTTP Code:** 200

```json
{
	"code": 200,
	"message": "Successfully logged in.",
	"token": "your.jwt.token"
}
```

### Possible Errors

* Incomplete Request Body `400 BAD REQUEST`
* Invalid email address, username or password `401 UNAUTHORIZED`
* Account not verified before requesting token `401 UNAUTHORIZED`

# Auth Verify

## GET `/api/auth/verify/:key`

### URL Params
`/:key` verification key sent via email.

### On Success
**HTTP Code:** 200

```json
{
	"code": 200,
	"message": "Your account has been successfully verified."
}
```

### Possible Errors

* No verification key provided `400 BAD REQUEST`
* Invalid verification key `401 UNAUTHORIZED`
* Account is already verified `409 CONFLICT`

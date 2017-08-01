---
title: Users
---

# User @me

## GET `/api/users/@me`

### Headers
* `Authorization: your.jwt.token`
or
* `Key: yourapikey`

### On Success
**HTTP Code:** 200

```json
{
	"code": 200,
	"message": "Successfully fetched your user.",
	"user": {
		"uuid": "1234fhzt-56574dfgbgdth4-sfs56-zhftdgnhr56zu45",
		"email": "email@domain.com",
		"username": "Sagiri",
		"avatarImage": "mirror.to.your.avatar.image.com",
		"bannerImage": "mirror.to.your.banner.image.com",
		"roles": [
			"user"
		],
		"uploads": 100,
		"favorites": 567
	}
}
```

### Possible Errors
**None**

# User

## GET `/api/users/:username`

### Headers
* `Authorization: your.jwt.token`
or
* `Key: yourapikey`

### URL Parameters
* `/:username` The username of the user you'd like to fetch data on.

### On Success
**HTTP Code:** 200

```json
{
	"code": 200,
	"message": "Successfully fetched the user.",
	"user": {
		"uuid": "fes46hz-gdrge5r343563-sefsef5-gdgerdherdhrh5",
		"username": "Masamune",
		"avatarImage": "mirror.to.the.avatar.image.com",
		"bannerImage": "mirror.to.the.banner.image.com",
		"roles": [
			"user"
		],
		"uploads": 45,
		"favorites": 1345
	}
}
```

### Possible Errors

* User doesn't exist `404 NOT FOUND`

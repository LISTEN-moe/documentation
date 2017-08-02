---
title: Users
---

# User Get

## GET `/api/users/:username` | `/api/users/@me`

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
		"email": "email@domain.com", // Only if the user chooses to enable viewing the email, otherwise @me only
		"username": "Sagiri",
		"avatarImage": "mirror.to.your.avatar.image.com",
		"bannerImage": "mirror.to.your.banner.image.com",
		"roles": [
			"user"
		],
		"settings": {}, // @me only
		"uploadLimit": 30, // @me only
		"uploads": 100,
		"favorites": 567
	}
}
```

### Possible Errors

* No user provided `400 BAD REQUEST`
* No user found `404 NOT FOUND`

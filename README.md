# Welcome to the Listen.moe v3/v4 Documentation

TODO: Write introduction

This is pretty much WIP still, but as an early look at what changes will happen this will suffice.

- Crawl

## Old v3 documentation:

The list of public endpoints include:

* `POST /api/authenticate`

Once authenticated, the following endpoints are available:

* `GET /api/user`
* `GET /api/user/favorites`
* `POST /api/songs/favorite`
* `POST /api/songs/request`


Every request that completes succesfully will return a json with the parameter `success: true` and different extra parameters depending on the endpoint.

If the request fails due to bad credentials, wrong song id, or any other reason then the parameter `success` will return `false` and a descriptive `message` indicating what went wrong.

Example:
```json
{
	"success": false,
	"message": "invalid-password"
}
```

Note that all the POST requests need to be either `json` or `application/x-www-form-urlencoded`

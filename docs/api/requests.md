# Requests

## Request a song

```
Type: POST
Route: /requests/{id}
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

# Code 403
{ "message": "Not authorized." }
{ "message": "All requests used for today." }
{ "message": "Song already queued." }

# Code 404
{ "message": "No song found." }
```

## Remove a request from the queue

```
Type: DELETE
Route: /requests/{id}
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

# Code 403
{ "message": "Not authorized." }

# Code 404
{ "message": "No request found." }
```

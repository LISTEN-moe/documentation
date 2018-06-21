# Introduction

The LISTEN.moe API allows users and developers alike to access a wide range of features offered through the website such as getting the list of songs to even enabling 2FA on your account! Every single request to the API must have the following headers present, otherwise the request will be dropped.

```
Content-Type: application/json
Accept: application/vnd.listen.v4+json
```
----

After you successfully log in by hitting the `login` endpoint, we keep track of your session by issuing a JSON Web Token that you need to save locally and attach on every subsequent request, otherwise you won't be able to interact with the API. To do so, attach the issued token to your request header like so:

```
Content-Type: application/json
Accept: application/vnd.listen.v4+json
Authorization: Bearer JWT
```

----

Be aware that every endpoint base url is `https://listen.moe/api`, meaning that if you need to make a http request to the login endpoint you should be pointing it to `https://listen.moe/api/login`.

::: warning
Every request to the API needs a valid Authorization header unless stated otherwise, just like the login or register routes.
:::

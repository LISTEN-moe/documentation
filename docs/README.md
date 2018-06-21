# Welcome to the docs

Developers can use this resource to build third party apps, bots or services that interact with the LISTEN.moe ecosystem. The documentation is divided in 2 parts which are [API](api/) and [WebSocket](ws/) docs. While most of the user related features requires intereaction through the API, everything about playback, queue and past songs is done through our WebSocket.

If you need access to the raw streams you can find them at:

| Type       | Jpop                                | Kpop                                     | Quality |
| ---------- |:-----------------------------------:| ----------------------------------------:| -------:|
| Vorbis     | [link](https://listen.moe/stream)   | [link](https://listen.moe/kpop/stream)   | 128kbps |
| Opus       | [link](https://listen.moe/opus)     | [link](https://listen.moe/kpop/opus)     | 128kbps |
| MP3        | [link](https://listen.moe/fallback) | [link](https://listen.moe/kpop/fallback) | 128kbps |

::: tip
Keep in mind that the Vorbis stream carries metadata of the current song and has the best quality bandwidth-wise, so it's always encouraged to use this one.
:::

In case you want to listen to the radio in your own player you can either use one of the url provided above or download the respective **.m3u** files for [jpop](https://listen.moe/m3u8/jpop.m3u) and [kpop](https://listen.moe/m3u8/kpop.m3u)

Without further ado, let's dive into the docs.

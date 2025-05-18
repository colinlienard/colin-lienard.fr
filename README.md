<div align="center">

# [colin-lienard.fr](https://colin-lienard.fr/)

My portfolio built with `nuxt` and `@nuxt/content`

![Deployment](https://img.shields.io/website?up_color=blue&url=https%3A%2F%2Fcolin-lienard.fr%2F) ![License](https://img.shields.io/github/license/ColinLienard/outerlife)

</div>

---

## ⚒️ Tech stack

- **UI** → [Vue.js](https://vuejs.org/)
- **Framework** → [Nuxt.js](https://nuxtjs.org/)
- **Content** → [Nuxt Content](https://content.nuxtjs.org/)
- **Langage** → [Typescript](https://www.typescriptlang.org/)
- **Smooth scrolling** → [Locomotive scroll](https://github.com/locomotivemtl/locomotive-scroll)
- **Deployment** → [Vercel](https://vercel.com/)
- **Styling** → [Sass](https://sass-lang.com/)
- **Package Manager** → [pnpm](https://pnpm.io/)

## 🍱 Adding content

### Projects

Add a new `.md` file in `/content/projects/` and follow the same patern as the other projects. Add images in `/public/images/projects/`.

### Skills

Add a new item in `/content/skills.yaml` and an image in `/public/images/skills/`.

## ⚡ Running locally

```bash
# Installation (recommended for nuxt3)
pnpm i --shamefully-hoist

# Development server
pnpm dev
```

Add a `.env` file with the following content:

```env
NUXT_PUBLIC_SPOTIFY_CLIENT_ID=...
NUXT_PUBLIC_SPOTIFY_CLIENT_SECRET=...
NUXT_PUBLIC_SPOTIFY_REFRESH_TOKEN=...
```

## 🎸 Get a new Spotify refresh token

### Request user authorization

Go to the following url:

```
https://accounts.spotify.com/authorize?client_id=<client_id>&response_type=code&redirect_uri=http://localhost:3000/&scope=user-read-currently-playing%20user-top-read
```

You will be redirected to `localhost` width a code in the url params.

### Request access and refresh tokens

Encode the following in base64 using [this website](https://www.base64encode.org/):

```
<client_id>:<client_secret>
```

Then run the following in a terminal with the encoded string and the code:

```bash
curl -H "Authorization: Basic <encoded>" -d grant_type=authorization_code -d code=<code> -d redirect_uri=http://localhost:3000/ https://accounts.spotify.com/api/token
```

You will get a response with a refresh token. Save it in an environment variable. It will never expire.

## 📄 License

[MIT](./LICENSE) © Colin Lienard

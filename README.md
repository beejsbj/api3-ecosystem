# API3 Ecosystem with Nuxt3

https://api3-ecosystem.netlify.app/

## Setup with docker

### Prepare docker image

```bash
# docker
docker build . -t api3-ecosystem-image

```

### Run docker image

```bash
# docker
docker run -p  3000:3000 -p  80:80 api3-ecosystem-image

```

### Local setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

```

### Development Server

Start the development server on `http://localhost:3000`

```bash
yarn dev
```

### Production build

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

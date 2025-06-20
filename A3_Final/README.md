# Team 38 A3 Final Project: Pokemon

## Docker Compose

To run the docker compose, from this directory run
`docker-compose up`

All of the containers specified in the docker-compose should start up

Go to `http://localhost:3000` once the application has started up to visit the site.

Please go to `/pokemon` and click "Add Pokemon" add two pokemons and then go to `/battle`, click two Pokemon and start battle, scroll down to see the battle log. Battle stats can be seen in `/statistics`

You can run an auto battler from `/battle` which will trigger a battle every ~2s.

Tournaments can be created and viewed at `/tournaments`

Caching performance testing is located at `/admin/performance`

## Works Cited

- We utilized a boilerplate multi-stage NextJS Dockerfile for our NextJS web / backend containerization provided from Vercel at this [Repository](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile)

# Stow DDex Compose

This repository allows you to run the and watch the whole ddex stack in one fell swoop.

## Installation Steps

This repository requires you to have local versions of `docker` and `git`. If you don't get on that.

1. Run `chmod +x ./initialize.sh`
2. Run `./initialize.sh` to download application repositories
3. Add a `NPM_TOKEN` environment variable to your shell with a valid `@linniaprotocol` npm as its value
3. Choose which environment you want to run from the `.env` files, then rename that file to `.env`
4. If choosing `.env.local`, make sure you have a local testnet running at port `7545` with the contracts deployed
5. Run `docker-compose up`

And you should be good to go!

## Configuring your containers

To change the ports that each of the services run at, change the leftmost number of the `ports` property in the corresponding service
in the `docker-compose.yml`. For all other configurations, change the `.env` file itself.
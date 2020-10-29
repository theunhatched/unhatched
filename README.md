[![Coverage Status](https://coveralls.io/repos/github/theunhatched/unhatched/badge.svg?branch=main)](https://coveralls.io/github/theunhatched/unhatched?branch=main)


## Setup

1. Clone the repo

```
❯ git clone git@github.com:theunhatched/unhatched.git
```

2. Ensure you have Node installed. You'll want the version in .tool-versions, which will be automatically selected if you use [asdf](https://gist.github.com/philihp/7453e9051663a52f442ed6a7afdddd61)... using other versions should work too, probably.

```
❯ node -v
v14.4.0
```

3. Go into the folder and install dependencies

```
❯ cd unhatched
❯ npm install
```

4. Download, install, and setup Docker.

```
❯ brew cask install docker
```

5. Start Posgres and Hasura with Docker. This will download containers listed in `docker-compose.yaml`. The `-d` here runs this as a daemon.

```
❯ docker-compose up -d
```

4. Now run the development server.

```bash
❯ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploying Changes

Changes merged into master will automatically deploy, and Github will protect you from accidentally pushing to it. To get changes into master, create a pull request.
.

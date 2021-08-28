# Typescript Webpack Starter

Base template for react projects. Includes webpack, babel, tailwind, redux, prisma, docker deployment, and CI with github actions.

## Setup 🛠

Install node dependencies

```
npm install
```

If you plan to use docker-compose for your dev setup, [install docker for your OS](https://docs.docker.com/get-docker/)

This repo uses `env-cmd` to support cross platform development.
Make sure you create a `.env` before running

```
cp .env-sample .env
```

Setup the sample prisma db

```
npm run db
```

## Dev 💻

<details>
  <summary>Run with webpack</summary>
  <pre>npm run start</pre>
</details>

<details>
  <summary>Run with docker</summary>
  <pre>npm run up</pre>
</details>

## CSS with Tailwind 📝

[Tailwind](https://tailwindcss.com/docs) is a css framework that prevents you from having to write your own css classes 🤮.

Look at [CardList.tsx](https://github.com/rmbh4211995/ts-webpack-starter/blob/master/client/src/components/CardList.tsx) for an example.

## API with Graphql

[Graphql](https://graphql.org/) is a query lanage for your API. It uses a very readable syntax to fetch your data.
[Apollo](https://www.apollographql.com/docs/) is a tooling suite that helps you interact with your graphql server easily.

Look at [GraphqlUserList.tsx](https://github.com/rmbh4211995/ts-webpack-starter/blob/master/client/src/components/GraphqlUserList.tsx) and [server/index.ts](https://github.com/rmbh4211995/ts-webpack-starter/blob/master/server/index.ts) to see how it works.

## Database Access with Prisma 📂

[Prisma](https://www.prisma.io/docs/getting-started) is a newer ORM to help you access your database from Node.js.
It even generates types for your tables! 😊

Look at [prisma/queries/index.ts](https://github.com/rmbh4211995/ts-webpack-starter/blob/master/prisma/queries/index.ts) and [server/graphql/resolvers.ts](https://github.com/rmbh4211995/ts-webpack-starter/blob/master/sever/graphql/resolvers.ts) to see how it fits together with graphql.

To configure add to your `.env`

```
DATABASE_URL="your-database-url"
```

Update your `.schema.prisma`

```
datasource db {
  provider = "your-db-here" // postgres, sqlite, mysql, etc
  ...
}
```

Migrate primsa schema -> databse schema

```
npx primsa migrate dev
```

Sync your db schema

```
npx prisma db pull
```

Generate your unique client

```
npx prisma generate
```

View your database with prisma

```
npx prisma studio
```

## State management with React Redux 🔐

[React Redux](https://react-redux.js.org/introduction/getting-started) is a well known library for managing application "state" or data.
If you are interested in using this library, refer to `client/src/store`

## CD with Github Actions / Docker 🌐

[Github Actions](https://docs.github.com/en/actions/quickstart) are customizable workflows that help you automate processes (like continuous deployment).

The supplied github action uses [docker-compose](https://github.com/docker/compose) to deploy your app to your AWS EC2 Instance.

Go to `Github -> Settings -> Secrets -> Add Repository Secret` and add the following secrets.

```
AWS_IP=your-ec2-aws-ip-address
AWS_KNOWN_HOSTS=rsa-encrypted-host-fingerprints
AWS_SSH_KEY=ssh-key-pair-pem
AWS_USER=ec2-user-name
```

## Questions 🙋‍♂️

### Why aren't you using the offical webpack-hot-middleware?

The webpack-hot-middleware package currently has a bug with webpack v5 that causes HMR to stop working.

You can read about the [issue here](https://github.com/webpack-contrib/webpack-hot-middleware/issues/390)

This repo uses a branch until the issue is fixed.

`"webpack-hot-middleware": "git+https://github.com/lukeapage/webpack-hot-middleware#2cdfe0d0111dab6432b8683112fd2d17a5e80572"`

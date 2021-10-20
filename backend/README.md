# Express-Sequelize Backend

This file documents the API routes made available by running this server.

## Setup

To start, you'll need to install our backend dependencies. If you're in the root
of this project, you'll need to move (`cd`) into the backend directory, before
running `npm install`.

Then, you'll need to create a `.env` file based on the `.env.example` file
that's available in this directory. Be sure to create a password for your
database user.

Using `psql` in the terminal, create a user with a password and `createdb` that
matches the one described in the `.env` file. We'll be using `dotenv` with
`sequelize` to pass our environment variables declared in the `.env` to our
`sequelize` commands.

After quitting out of the `psql` instance, you can run the following commands to
finish database setup.

* `npm run db:setup`

This command will run the following three in order:

* `npx dotenv sequelize db:create`
* `npx dotenv sequelize db:migrate`
* `npx dotenv sequelize db:seed:all`

Because we specified that the port for the backend should be `5000`, we will
need to set up the `proxy` key in our frontend `package.json` so that our
frontend can pass any `/api` calls to the backend server.

Place the following at the bottom of your `frontend/package.json` file.

```json
    "proxy": "http://localhost:5000"
```

## API Documentation

### `POST /api/test`

A test route to check that the request body is getting parsed correctly.

**Returns** a JSON response of the following format with the JSON payload sent
in the request built into the response as `req.body`:

```javascript
{
  requestBody: req.body
}
```

### `GET /api/articles`

A route to fetch all the articles in the database.

**Returns** a JSON response of the array of articles (`Article[]`) fetched from the database.

### `POST /api/articles`

A route to create a new article in the database, if the payload sent passes
the validations.

**Returns** a JSON response of the single article object that was created if the
payload passes validations. If the payload did not pass validations, then the
response will be in the following format:

```javascript
{
  title: string;
  message: string;
  errors: string[];
  stack: string;
}
```

# Express-Sequelize Backend

This file documents the API routes made available by running this server.

## Setup

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

**Returns** a JSON response of the array of articles fetched from the database.

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

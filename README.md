# Thunks

<details open>

<summary>Set Up</summary>

### Backend

1. `cd` into the `backend` directory
2. Run `npm install` to install dependencies
3. Create a `.env` file based off the `.env.example` found in the backend
   directory
4. Using `psql`, create a user in your database based off the username and password you gave
   in the `.env` file

```sql
CREATE USER article_app WITH PASSWORD '«your password here»' CREATEDB;
```

5. Exit the `psql` interface with `\q`
6. Run `npm run db:setup`
7. Run `npm start` to start the application

### Frontend

1. Open another terminal
2. `cd` into the `frontend` directory
3. Run `npm install` to install dependencies

</details>

## What is a Thunk?

Simply put, it is
> A function that is returned from another function (known as a thunk creator).
>
> [Dave Ceddia]

In terms of its origin,
> The term originated as a humorous, incorrect past participle of "think". That
> is, a "thunk value" becomes available after its calculation routine is
> thought through, or executed.
>
> [Wikipedia][wikipedia-thunk]

To read more on the `redux-thunk` middleware, check out their
[repo][redux-thunk-git].

## When should you use a thunk?

The usual case is going to be when you need to make a fetch to some API, be it
your own backend, or some third party. This includes the API routes you wrote in
your Express servers. This is how we will connect the React frontend with our
Express backend, or with whatever backend you want to use.

## Where does a thunk occur in the Redux flow?

### Our standard Redux flow

![redux][redux-gif]

In our vanilla React-Redux application, our data flow still happens
synchronously, and can only happen synchronously.

1. The user has an interaction with our View, a deposit in this case, which
   fires the `event`.
2. Our application will then `dispatch` an `action` with the correct type.
3. The `dispatch` sends that `action` to our `reducer`.
4. Our `reducer` will take in the current `state` and the dispatched `action`
   and return a new `state` depending on what the `action.type` was.
5. The state will be reflected in the View where the user can continue
   interacting with our application.

### Our Redux flow + Thunk

![redux-thunk][redux-thunk-gif]

With thunk as one of our Redux middleware functions, we are able to add async
logic to our store, which enables us to communicate with our Express backend
server which can manipulate data on our database through asynchronous `fetch`
calls.

1. The user has an interaction with out View, some kind of `event`.
2. Our application notices the `event` and calls `dispatch` passing in an
   `action` or `thunk` in this case.
3. The `dispatch` sends the `thunk` through middleware functions, one of which
   is the `redux-thunk` middleware, which sees that the `thunk` is a function
   and calls our `thunk` passing in `dispatch` and `getState` from the Redux
   store.
4. Because the `thunk` was called, whatever asynchronous logic inside our
   `thunk` will be run, and because our `thunk` was passed the `dispatch` from
   our Redux store earlier, it can `dispatch` an `action` to update the state
   according to whatever data or response it got back from its asynchronous
   logic, or it might not `dispatch` anything and just `return` some arbitrary
   value.
5. If a `dispatch` of an `action` does occur in the `thunk`, then the `action`
   will be passed to our `reducer` along with the current state.
6. The `reducer` will then return a new `state` depending on what the
   `action.type` was.
7. The state will be reflected in the View where the user can continue
   interacting with our application.

## Why?

It just seems like we're adding an extra step into something that's already
complex. You might ask, "Can't I just make my fetch calls in my component and
then when that call is done, update my Redux store?"

> While it's possible to make these API calls from your component and dispatch
> synchronously on success, for consistency and reusability, it's preferable to
> have the source of every change to our application state be an action creator.
> Thunks are a new kind of action creator that will allow you to do that.
>
> App Academy Open

> In React/Redux, thunks enable us to avoid directly causing side effects in our
> actions, action creators, or components. Instead, anything impure will be
> wrapped in a thunk. Later, that thunk will be invoked by middleware to
> actually cause the effect. By transferring our side effects to running at a
> single point of the Redux loop (at the middleware level), the rest of our app
> stays relatively pure. Pure functions and components are easier to reason
> about, test, maintain, extend, and reuse.
>
> [Medium Article]

## How?

1. Install the `redux-thunk` middleware.
    * It *basically* looks like this.
    ```js
    function thunkMiddleware(store) {
      return function wrapDispatch(next) {
        return function handleAction(action) {
          if (typeof action === 'function') {
            return action(store.dispatch, store.getState);
          }

          return next(action);
        }
      }
    }
    ```

    * With arrow function notation, this cleans up a bit.
    ```js
    const thunk = ({ dispatch, getState }) => (next) => (action) => {
      if (typeof action === 'function')  {
        return action(dispatch, getState);
      }
      return next(action);
    };
    ```
2. Import the `redux-thunk` middleware in our `src/store/index.js` file.
3. Add it to our store as a middleware function.
4. Write our thunk creator function which returns a thunk
5. Dispatch our thunk by invoking the thunk creator inside of a dispatch call
6. Use our `useSelector` hook to subscribe to our Redux store and grab our data
   from there
7. Test our code. Does our Redux store update according to expectations?

## More Resources

If you're interested in reading more about Redux middleware and how they play
with the Redux store, then check out Redux's documentation on
[Middleware][redux-middleware] and [how the Redux store works with
middleware][redux-store-docs].

[Dave Ceddia]: https://daveceddia.com/what-is-a-thunk/
[wikipedia-thunk]: https://en.wikipedia.org/wiki/Thunk
[redux-thunk-git]: https://github.com/reduxjs/redux-thunk
[redux-gif]: ./redux.gif
[redux-thunk-gif]: ./redux-thunk.gif
[Medium Article]: https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60#:~:text=Thunks%20in%20React%20%26%20Redux,be%20wrapped%20in%20a%20thunk.
[redux-middleware]: https://redux.js.org/understanding/history-and-design/middleware
[redux-store-docs]: https://redux.js.org/tutorials/fundamentals/part-4-store

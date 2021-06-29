# Instructions

## Planning and Thoughts

### WHY THUNKS?

In general, you could do `fetch` calls from your React components and just
render that data received from that call within your component. Straightforward
and to the point, right? Sure, but what if you need that same data somewhere
else? Or what if you need it again because your user comes back to this page in
a few seconds? And that list can go on.

To centralize the data and keep the flow of data moving only in one direction,
we utilize thunks to apply data we have received from outside out frontend React
application into our components in said application.

While we could do the data fetch in our component and then dispatch an action
creator from our component, we would still end up repeating that fetch code in,
possibly, a number of places. With thunks, we can move that logic somewhere
else, and just dispatch the thunk from our component instead. This allows for
cleaner, DRY-er code while also separating our concerns, making it easier to
test and ensure that our code, and in turn our application, works.

### Steps

In this lecture, we will:

1. Install the `redux-thunk` middleware.
2. Import the `redux-thunk` middleware in our `src/store/index.js` file.
3. Add it to our store as a middleware function.
4. Take a look at the structure of a Thunk Creator in the
   `src/store/articleReducer.js` file.
5. Change the use of the action creator in the components to use our thunk
   creator instead.
6. Move the asynchronous logic away from our React components into the
   `articleReducer.js` file.
7. Test it. Did it break?
8. Let's rewrite the Thunk Creator with `fetch` and have it actually do thunk
   things.
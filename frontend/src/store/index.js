import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

// 2. Import redux-thunk

import articleReducer from './articleReducer';
import fruitReducer from './fruitReducer';

const rootReducer = combineReducers({
  articleState: articleReducer,
  fruitState: fruitReducer,
});

let enhancer;

if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
  // 3. Add the middleware function to our store
  enhancer = composeEnhancers(applyMiddleware(logger));
} else {
  // 3. Add the middleware function to our store
  enhancer = applyMiddleware();
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;

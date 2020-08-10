import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';

const configureStore = () => {
  let middlewares = [];

  if (process.env.NODE_ENV !== 'production') {
    middlewares = [logger];
  }

  middlewares = applyMiddleware(...middlewares);

  return createStore(
    reducers,
    middlewares,
  );
};
const store = configureStore();

export default store;

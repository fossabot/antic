import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import monitorReducerEnhancer from "./enhancers/monitorReducer";
import loggerMiddleware from "./middleware/logger";
import rootReducer from "./reducers";

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);

// 正式环境不记录 https://github.com/reduxjs/redux/issues/2359
let composedEnhancers;
if (process.env.NODE_ENV === "development") {
  composedEnhancers = compose(
    middlewareEnhancer,
    monitorReducerEnhancer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  );
}

const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;

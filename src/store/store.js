import { compose } from "redux";
import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./rootreducer";

const middlewares = [logger]

const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(rootReducer,undefined,composedEnhancers);
import { createStoreHook, applyMiddleware } from "react-redux/es/exports";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStoreHook(rootReducer, applyMiddleware(...middlewares))

export default store;
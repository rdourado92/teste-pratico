import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import sagas from "./sagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

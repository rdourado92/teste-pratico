import { takeLatest, all } from "redux-saga/effects";

import { login } from "./auth";
// import { login } from "./pedido";

export default function* rootSaga() {
  yield all([takeLatest("SIGNIN_REQUEST", login)]);
}

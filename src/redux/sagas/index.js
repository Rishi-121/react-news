import { all, fork } from "redux-saga/effects";

import * as newsSagas from "./NewsSagas";

export default function* rootSaga() {
  yield all([...Object.values(newsSagas)].map(fork));
}

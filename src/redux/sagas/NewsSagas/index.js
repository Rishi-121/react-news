import { put, takeLatest, call } from "redux-saga/effects";
import {
  dataFetchInitiated,
  dataFetchSuccess,
  dataFetchFailure,
} from "../../actions/sagaActions";
import axios from "axios";

const size = 21;

function* handleDataFetchSaga(action) {
  try {
    yield put(dataFetchInitiated());

    const { section, page } = action.payload;

    const response = yield call(
      axios.get,
      `http://newsapi.org/v2/top-headlines?country=in&category=${section}&pageSize=${size}&page=${page}&apiKey=${process.env.REACT_APP_API_KEY}`
    );

    yield put(dataFetchSuccess(section, response.data));
  } catch (error) {
    yield put(dataFetchFailure(error));
  }
}

export function* watchForHandleDataFetch() {
  yield takeLatest("HANDLER_CLICKED", handleDataFetchSaga);
}

import { all, call, fork, put, select, takeEvery } from "redux-saga/effects";
// @ts-ignore
import logger from "utils/logger";
import callApi from "../../utils/callApi";
import { ApplicationState } from "../index";
import { fetchError, fetchSuccess } from "./actions";
import { HeroesActionTypes } from "./types";

const API_ENDPOINT =
  process.env.REACT_APP_API_ENDPOINT || "https://api.opendota.com";

function* handleFetch() {
  const state = yield select((state: ApplicationState) => state.todo);
  logger.debug(state);
  console.log(state);
  try {
    const res = yield call(callApi, "get", API_ENDPOINT, "/heroStats");
    if (res.error) {
      logger.debug(res);
      yield put(fetchError(res.error));
    } else {
      logger.debug(res);
      yield put(fetchSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack!));
    } else {
      yield put(fetchError("An unknown error occurred"));
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(HeroesActionTypes.FETCH_REQUEST, handleFetch);
}

function* heroesSaga() {
  yield all([fork(watchFetchRequest)]);
}

export default heroesSaga;

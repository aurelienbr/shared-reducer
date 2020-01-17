import { fork, spawn, all } from 'redux-saga/effects';

import todoSaga from './todoSaga';

export default function * () {
  yield fork(bootstrap);
}

function * bootstrap () {
  try {
    yield all([spawn(todoSaga)]);
  } catch (e) {
    // @TODO
  }
}

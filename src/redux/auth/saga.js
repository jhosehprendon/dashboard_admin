import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { getToken, clearToken } from '../../helpers/utility';
import actions from './actions';
import axios from 'axios';

// auth0 or express JWT
const fakeApiCall = true; 

export function* loginRequest() {
  yield takeEvery(actions.CHECKING_STATE, function*() {
    if (fakeApiCall) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token: 'secret token',
        profile: 'Profile'
      });
    } else {
      yield put({ type: actions.LOGIN_ERROR });
    }
  });
}  

// export function* loginRequest() {
//   console.log("TEST!!!!!!!!") 
//   yield takeEvery('CHECKING_STATE', function*() {
//     if (fakeApiCall) {
//       yield put({
//         type: actions.LOGIN_SUCCESS,
//         token: 'secret token',
//         profile: 'Profile'
//       });
//     } else {
//       yield put({ type: actions.LOGIN_ERROR });
//     }
//   });
// }

export function* checkInitialStateSaga() {
  
  yield takeEvery(actions.CHECKING_STATE, function*(payload) {
    console.log('CHECK INITIAL STATE TRIGGERED')
    const initialState = yield call(axios.get('http://api-test.efundex.com/admin/api/initial-state')
  );
    yield put({ type: actions.INITIAL_STATE_CHECKED, token: initialState.data.csrf_tokens.login })
  })
  
}

export function* loginSuccess() {
  yield takeEvery(actions.LOGIN_SUCCESS, function*(payload) {
    yield localStorage.setItem('id_token', payload.token);
  });
}

export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function*() {});
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, function*() {
    clearToken();
    yield put(push('/'));
  });
}
export function* checkAuthorization() {
  yield takeEvery(actions.CHECK_AUTHORIZATION, function*() {
    const token = getToken().get('idToken');
    if (token) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token,
        profile: 'Profile'
      });
    }
  });
}
export default function* rootSaga() {
  yield all([
    fork(checkAuthorization),
    fork(loginRequest),
    fork(loginSuccess),
    fork(loginError),
    fork(logout),
    fork(checkInitialStateSaga)
  ]);
}

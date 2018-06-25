
const actions = {
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGOUT: 'LOGOUT',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  CHECKING_STATE: 'CHECKING_STATE',
  INITIAL_STATE_CHECKED: 'INITIAL_STATE_CHECKED',
  checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),
  checkInitialState: () => ({
    type: actions.CHECKING_STATE
  }),
  login: () => ({
    type: actions.CHECKING_STATE
  }),
  logout: () => ({
    type: actions.LOGOUT
  })
};
export default actions;

import produce from "immer";

export const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  me: null, // 자신의 정보
  loginData: {},
  /*<--아이디 중복체크-->*/
  idAvailable: null,
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

/* --ID 중복체크-- */
export const ID_CHECK_REQUEST = "ID_CHECK_REQUEST";
export const ID_CHECK_FAILURE = "ID_CHECK_FAILURE";
export const ID_CHECK_AVAILABLE = "ID_CHECK_AVAILABLE";
export const ID_CHECK_EXISTING = "ID_CHECK_EXISTING";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const idCheckRequestAction = (ID) => ({
  type: ID_CHECK_REQUEST,
  ID: ID,
});

export const loginRequestAction = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});

export const signUpRequestAction = (data) => ({
  type: SIGN_UP_REQUEST,
  data: data,
});

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        console.log("Request Login");
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInDone = false;
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.logOutError = null;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutDone = false;
        draft.logOutError = action.error;
        break;
      case ID_CHECK_AVAILABLE:
        draft.idAvailable = true;
        break;
      case ID_CHECK_EXISTING:
        draft.idAvailable = false;
        break;
      case ID_CHECK_FAILURE:
        console.log("ID ACCESS FAILED", action.result);
        draft.idLoading = false;
        break;
      case SIGN_UP_REQUEST:
        console.log("SIGN UP REQUEST", action.data);
        draft.signUpLoading = true;
        break;
      case SIGN_UP_SUCCESS:
        console.log("SIGN UP SUCCESS", action.userID);
        draft.signUpDone = true;
        draft.me = action.userID;
        break;
      case SIGN_UP_FAILURE:
        console.log("SIGN UP FAILURE", action.data);
        draft.signUpError = true;
        break;
      default:
        break;
    }
  });

export default reducer;

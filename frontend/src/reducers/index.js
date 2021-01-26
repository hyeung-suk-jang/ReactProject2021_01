import { combineReducers } from 'redux';

import user from './user';

// combineReducers
// user와 post에서 export하는 것이 함수이기 때문에 사용

const rootReducer = combineReducers({user});

export default rootReducer;

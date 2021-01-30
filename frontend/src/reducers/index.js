import { combineReducers } from 'redux';

import user from './user';
import book from './book';

// combineReducers
// user와 post에서 export하는 것이 함수이기 때문에 사용

const rootReducer = combineReducers({user, book});

export default rootReducer;

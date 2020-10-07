import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { googleSearchReducer } from 'reducers/googleSearchReducer';

const reducers = combineReducers({
	googleSearch: googleSearchReducer,
});

export default createStore(reducers, applyMiddleware(thunkMiddleware));

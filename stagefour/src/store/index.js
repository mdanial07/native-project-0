import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import SignupReducer  from './reducers/signupReducer'

const middleware = applyMiddleware(thunk);

const rootReducer = combineReducers({
    Signup: SignupReducer,
    
});

const store = createStore(
    rootReducer,
    compose(
        middleware,
    )
);


export default store;
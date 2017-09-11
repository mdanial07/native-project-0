import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import SignupReducer  from './reducers/signupReducer'
import LoginReducer  from './reducers/loginReducer';
import PatientsReducer  from './reducers/patientsReducer'



const middleware = applyMiddleware(thunk);

const rootReducer = combineReducers({
    Signup: SignupReducer,
    Patients: PatientsReducer,
    Login: LoginReducer,
    
});

const store = createStore(
    rootReducer,
    compose(
        middleware,
    )
);


export default store;
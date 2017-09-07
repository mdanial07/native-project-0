import * as firebase from "firebase";
import SignupAction from '../actions/signupAction'

export class SignupMiddleware {
    static createUser(users) {
        return (dispatch) => {
            firebase.database().ref('patientsApp/').push({users});

            console.log(users);
        }
    }
    static getAllUsers(){
        return(dispatch) => {
            firebase.database().ref('/patientsApp' ).on('value', (data) => {
                let userData = data.val();
                console.log(userData)
                dispatch(SignupAction.getSignup(userData));  
            })
        }
    }
}
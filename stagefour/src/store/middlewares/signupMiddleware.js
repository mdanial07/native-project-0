import * as firebase from "firebase";
import SignupAction from '../actions/signupAction'

export class SignupMiddleware {
    static createUser(doctors) {
        return (dispatch) => {
            // firebase.database().ref('patientsApp/').push({ doctors });
            
            let email = doctors.email
            let pass = doctors.pass;
            firebase.auth().createUserWithEmailAndPassword(email, pass)
                .then((user) => {
                    uid = user.uid;
                    doctors._id = uid
                    firebase.database().ref(`Doctors/${uid}`).set(doctors);

                })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                });

            console.log(doctors);
        }
    }
    static getAllUsers() {
        return (dispatch) => {
            firebase.database().ref('/Doctors').on('value', (data) => {
                let userData = data.val();

                let array = [];
                for (var data in userData) {
                    array.push(userData[data])
                }
                console.log(array)
                dispatch(SignupAction.getSignup(array));
            })
        }
    }
}
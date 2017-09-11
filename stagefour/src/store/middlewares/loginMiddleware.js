
import * as firebase from "firebase";
import LoginAction from '../actions/loginAction'
import { AsyncStorage } from 'react-native'

export class LoginMiddleware {
    static loginUser(props, doctors) {
        console.log(props);
        return (dispatch) => {
            // firebase.database().ref('patientsApp/').push({ doctors });

            let email = doctors.email
            let pass = doctors.pass;
            firebase.auth().signInWithEmailAndPassword(email, pass)
                .then(() => {
                    // console.log("dadnadiadadadadad")
                    props.navigation.navigate('homePage')
                })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                });
        }
    }


    static getAllDoctors(currentEmail) {
        return (dispatch) => {
            firebase.database().ref('/Doctors').on('value', (data) => {
                let userData = data.val();
                let array = [];
                for (var data in userData) {
                    array.push(userData[data])
                }
                console.log(array)
                var sortData = {}

                array.map((doc, i) => {
                    console.log(currentEmail, doc.email)
                    if (doc.email === currentEmail) {
                        return (
                            sortData = {
                                _id: doc._id,
                                email: doc.email,
                                pass: doc.pass,
                                fname: doc.fname,
                                sname: doc.sname,
                            }
                        )
                    }
                })

                var sortArray = []

                sortArray.push(sortData);

                // AsyncStorage.getItem('patientapp', (err, result) => {
                //     if (result !== null) {
                //         AsyncStorage.removeItem('patientapp', result);
                //     }
                // });
                console.log(sortData);
                AsyncStorage.setItem('patientapp', JSON.stringify(sortData))
                console.log(array)
                dispatch(LoginAction.getDoctors(array));
            })
        }
    }
}
import * as firebase from "firebase";
import PatientsAction from '../actions/patientsAction'

export class PatientsMiddleware {
    static createPatient(patient) {
        return (dispatch) => {
            firebase.database().ref('Patients/').push(patient);
            console.log(patient);
        }
    }

    static getAllPatietns() {
        return (dispatch) => {
            firebase.database().ref('/Patients').on('value', (data) => {
                let userData = data.val();

                let array = [];
                for (var data in userData) {
                    array.push(userData[data])
                }
                console.log("dsadsa",array)
                dispatch(PatientsAction.getAllPatients(array));
            })
        }
    }
}
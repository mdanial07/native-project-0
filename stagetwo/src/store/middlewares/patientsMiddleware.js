import * as firebase from "firebase";
import PatientsAction from '../actions/patientsAction'
import axios from "axios"

export class PatientsMiddleware {
    static createPatient(patient) {
        return (dispatch) => {
            console.log(patient)
            axios.post('https://patientapplication.herokuapp.com/api/createPatientProfile', patient)
                .then((response) => {
                    console.log("Patient added successfully")
                    console.log(response)
                })
            // let docId = patient.docId
            // firebase.database().ref(`Patients/${docId}`).push(patient);
            // console.log(patient);
        }
    }


    // static getAllPatients() {
    //     let allPatientData = []
    //     return (dispatch) => {
    //         axios.get(`https://patient-server.herokuapp.com/api/getAllPatient/${uid}`)
    //             .then((responce) => {
    //                 allPatientData = responce.data
    //             })
    //             .then(() => {
    //                 dispatch(Actions.getAllPatientData(allPatientData))
    //             })
    //     }
    // }
    static getAllPatietns() {
        return (dispatch) => {
            console.log("dadada")
            axios.get('https://patientapplication.herokuapp.com/api/getAllPatient')
                .then((response) => {
                    console.log(response)
                    allPatientData = response.data
                    dispatch(PatientsAction.getAllPatients(allPatientData));
                })
            // firebase.database().ref(`/Patients/${docId}`).on('value', (data) => {
            //     let userData = data.val();

            //     let array = [];
            //     for (var data in userData) {
            //         array.push(userData[data])
            //     }
            //     console.log("dsadsa", array)
            //     dispatch(PatientsAction.getAllPatients(array));
            // })
        }
    }
}
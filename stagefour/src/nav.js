import { StackNavigator, TabNavigator } from "react-navigation"


import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"
import HomePage  from "./Components/HomePage/homePage"
import PatientRegForm from "./Components/RegForm/regForm"
import PatientList from "./Components/PatientsList/patientsList"

const Naviagte = StackNavigator({
    patientList: {screen: PatientList},
    regFrom: {screen: PatientRegForm},
    homePage: {screen: HomePage},
    signup: { screen: Signup },
    login: { screen: Login },
})

export default Naviagte;

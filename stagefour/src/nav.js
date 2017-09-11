import { StackNavigator, TabNavigator } from "react-navigation"


import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"
import HomePage from "./Components/HomePage/homePage"
import PatientRegForm from "./Components/RegForm/regForm"
import PatientList from "./Components/PatientsList/patientsList"
// import PatientList from "./Components/PatientsList/patientssList"
import TabsNav from './Components/TabsNav/tabsNav'

const Naviagte = StackNavigator({
    homePage: { screen: HomePage },
    login: { screen: Login },
    tabsnav: { screen: TabsNav },
    patientList: { screen: PatientList },   
    regFrom: { screen: PatientRegForm },
    signup: { screen: Signup },
})

export default Naviagte;

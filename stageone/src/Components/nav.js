import { StackNavigator, TabNavigator } from "react-navigation"

import Signup from "./Signup/Signup"
import Login from "./Login/Login"
import HomePage from "./HomePage/homePage"
import PatientList from "./PatientsList/patientsList"
import PatientRegForm from "./PatientRegForm/patientregform"
import Logout from './Logout/Logout'
import TabsNav from './TabsNav/TabsNav'

import Screen from "../Components/screen"
import Secondscreen from "../Components/secondscreen"


// const Nav = TabNavigator({
//     // logout: { screen: Logout },
// },
// )

const Nav1 = StackNavigator({
    login: { screen: Login },
    tabsRoute: { screen: TabsNav },
    // patientRegRoute: { screen: PatientRegForm },
    // patientRoute: { screen: PatientList },
    // homeRoute: { screen: HomePage },
    // homeRoute: { screen: HomePage },
    // Tab: { screen: Nav },
    // signup: { screen: Signup },

})

export default Nav1;

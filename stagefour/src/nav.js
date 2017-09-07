import { StackNavigator, TabNavigator } from "react-navigation"


import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"
import HomePage  from "./Components/HomePage/homePage.js"

const Naviagte = StackNavigator({
    homePage: {screen: HomePage},
    signup: { screen: Signup },
    login: { screen: Login },
})

export default Naviagte;

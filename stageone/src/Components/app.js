import React, { Component } from 'react'

import { View, Text } from "react-native"
import Nav1 from "../Components/nav"
import { Container, Header, Root } from 'native-base'
import Login from './Login/Login'


class App extends Component {
    render() {
        return (
            <Root>
                <Nav1 />
            </Root>
        )
    }
}
export default App
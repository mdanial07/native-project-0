import React, { Component } from 'react'

import { View, Text, Button } from "react-native"


class Screen extends Component {

    static navigationOptions = {
        title: "SignUp"
    }

    render() {
        return (

            <View>
                <Button title="rabar" onPress={() => { this.props.navigation.navigate('route') }}></Button>
            </View>
        )
    }
}
export default Screen
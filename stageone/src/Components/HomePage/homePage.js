import React, { Component } from 'react'
import { View, Text, Button, DrawerLayoutAndroid, Image, StyleSheet } from "react-native";
import { Container, Header, Content, List, ListItem, Icon, Left, Body, Right, Switch } from "native-base";

import PatientRegForm from '../PatientRegForm/patientregform'
// import { navigationView } from '../Navigation/navigationView'
// import ScrollableTab from 'react-native-scrollable-tab';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', pass: '' }

    }

    static navigationOptions = {
        title: 'Home',
        header: null
    }

    render() {

        // var navigationView = (
        //     <View style={{ flex: 1, backgroundColor: '#fff' }}>
        //         <Button title="Login" onPress={() => { this.props.navigation.navigate('login') }}></Button>
        //         <Button title="Signup" onPress={() => { this.props.navigation.navigate('signup') }}></Button>
        //         <Button title="Patient Reg Form" onPress={() => { this.props.navigation.navigate('patientRegRoute') }}></Button>
        //         <Button title="Patient List" onPress={() => { this.props.navigation.navigate('patientRoute') }}></Button>
        //     </View>
        // );
        return (
            // <Image source={require('../Images/bg.jpg')} style={styles.bgImage}>

            <View>
                <List>
                    <ListItem icon>
                        <Left>
                            <Icon name="plane" />
                        </Left>
                        <Body>
                            <Text>Airplane Mode</Text>
                        </Body>
                        <Right>
                            <Switch value={false} />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="wifi" />
                        </Left>
                        <Body>
                            <Text>Wi-Fi</Text>
                        </Body>
                        <Right>
                            <Text>GeekyAnts</Text>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="bluetooth" />
                        </Left>
                        <Body>
                            <Text>Bluetooth</Text>
                        </Body>
                        <Right>
                            <Text>On</Text>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                </List>
            </View>




            // </Image>
        )
    }
}
export default HomePage;


const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        resizeMode: 'stretch',

    }
})
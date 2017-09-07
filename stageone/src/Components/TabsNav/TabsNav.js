import React, { Component } from 'react'
import { View, Text, Button, DrawerLayoutAndroid, Image, StyleSheet } from "react-native"
import {
    Container,
    Header,
    Content, Form,
    Item, Input,
    Label, ListItem,
    List, Left,
    Body, Right,
    Thumbnail, InputGroup,
    Icon,
    Tabs,
    Tab, TabHeading,
} from 'native-base';
import PatientList from '../PatientsList/patientsList'
import PatientRegForm from '../PatientRegForm/patientregform'
import HomePage from '../HomePage/homePage'

class TabsNav extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', pass: '' }

    }

    static navigationOptions = {
        header: null
    }

    render() {
        console.disableYellowBox = true;
        

        return (
            <Container>
                <Content>
                    <Tabs>
                        <Tab heading={ <TabHeading><Icon name="person" /><Text style={{color:'#fff'}}> Patients</Text></TabHeading>} >
                            <PatientList />
                        </Tab>
                        <Tab heading={ <TabHeading><Icon name="logo-buffer" /><Text style={{color:'#fff'}}> Reg Form</Text></TabHeading>}>
                            <PatientRegForm />
                        </Tab>
                        <Tab heading={ <TabHeading><Icon name="ios-menu" /><Text style={{color:'#fff'}}></Text></TabHeading>}>
                            <HomePage tabsRoute={this.props.navigation.navigate} />
                        </Tab>
                    </Tabs>
                </Content>
            </Container>
        )
    }
}
export default TabsNav;


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
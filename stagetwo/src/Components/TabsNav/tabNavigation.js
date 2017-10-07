import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import { StyleSheet, View, } from 'react-native';

import PatientList from '../PatientsList/patientList'
import PatientRegForm from '../RegForm/regForm'
import HomePage from '../HomePage/homePage'
import Profile from '../Profile/profile'

class TabNavigation extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        console.disableYellowBox = true;

        return (

            <Container>
                <Tabs initialPage={1}>
                    <Tab heading={<TabHeading><Icon name="ios-people" /><Text>Patients</Text></TabHeading>}>
                        <PatientList />
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="wpforms" /><Text>Reg Form</Text></TabHeading>}>
                        <PatientRegForm />
                    </Tab>
                    {/* <Tab heading={<TabHeading><Icon name="person" /><Text>Profile</Text></TabHeading>}>
                        <Profile navigation={this.props.navigation} />
                    </Tab> */}
                </Tabs>
            </Container>

        )
    }
}
export default TabNavigation;


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
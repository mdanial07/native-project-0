import React, { Component } from 'react';
import { Container, Header, Tabs, Content, TabHeading, Button, Icon, Text, Footer, FooterTab, } from 'native-base';
import { StyleSheet, View, } from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import PatientList from '../PatientsList/patientsList'
import PatientRegForm from '../RegForm/regForm'
import HomePage from '../HomePage/homePage'

class TabsNav extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', onClickbutton: 'patientList', pass: '', showToast: false }

    }

    static navigationOptions = {
        header: null
    }

    render() {
        console.disableYellowBox = true;
        console.log("eweqwewq" + this.state.onClickbutton)


        return (
            <Container>
                {
                    this.state.onClickbutton === 'patientList' ? <PatientList /> : this.state.onClickbutton === 'reg-form' ? <PatientRegForm /> : this.state.onClickbutton === 'homePage' ? <HomePage /> : null
                }

                <Content>
                    {/* <Tabs>
                        <Tab heading={<TabHeading><Icon name="person" /><Text>Patients</Text></TabHeading>}>
                            <PatientList />
                        </Tab>
                        <Tab heading={<TabHeading><Icon name="apps" /></TabHeading>}>
                            <HomePage />
                        </Tab>
                        <Tab heading={<TabHeading><Text>Reg Form</Text></TabHeading>}>
                            <PatientRegForm />
                        </Tab>
                    </Tabs> */}
                </Content>
                <BottomNavigation
                    labelColor="white"
                    rippleColor="white"
                    style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
                    
                >
                    <Tab
                        barBackgroundColor="#37474F"
                        label="Movies & TV"
                        icon={<Icon size={24} color="white" name="tv" />}
                        onPress={() => this.setState({ onClickbutton: 'patientList' })}
                    >

                    </Tab>
                    <Tab
                        barBackgroundColor="#37474F"
                        label="Music"
                        icon={<Icon size={24} color="white" name="music-note"/>}
                        onPress={() => this.setState({ onClickbutton: 'reg-form' })}
                    >

                    </Tab>

                    <Tab
                        barBackgroundColor="#37474F"
                        label="Books"
                        icon={<Icon size={24} color="white" name="book" />}
                    >

                    </Tab>

                    <Tab
                        barBackgroundColor="#37474F"
                        label="Newsstand"
                        icon={<Icon size={24} color="white" name="newspaper" />}
                    >
                        <HomePage />
                    </Tab>


                </BottomNavigation>

                {/* <Footer>
                    <FooterTab>
                        <Button vertical active onPress={() => this.setState({ onClickbutton: 'patientList' })} >
                            <Icon active name="navigate" />
                            <Text>Patients</Text>
                        </Button>
                        <Button vertical onPress={() => this.setState({ onClickbutton: 'reg-form' })}>
                            <Icon name="camera" />
                            <Text>Reg. Form</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" onPress={() => { this.props.navigation.navigate('homePage') }} />
                            <Text>Contact</Text>
                        </Button>
                        <Button vertical onPress={() => this.setState({ onClickbutton: 'homePage' })}  >
                            <Icon name="person" />
                            <Text>Profile</Text>
                        </Button>
                    </FooterTab>
                </Footer> */}
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
import React, { Component } from 'react';
import { connect } from "react-redux";
import { PatientsMiddleware } from '../../store/middlewares/patientsMiddleware';
import { StyleSheet, Text, View, } from 'react-native';
import {
    Container, Header, Content, List, ListItem, Left, Body, Segment, Right, Thumbnail, Item, Input, Icon,
    Button, InputGroup,
    Tab, TabHeading
} from 'native-base';
import Tabs from 'react-native-tabs'
import DatePicker from 'react-native-datepicker'


function mapDispatchToProps(dispatch) {
    return {
        getAllPatietns: () => dispatch(PatientsMiddleware.getAllPatietns()),

    }
}
function mapStateToProps(state) {
    return {
        patients: state.Patients.patients,
    }
}

class PatientList extends Component {

    constructor(props) {
        super(props);
        var today = new Date();
        var todayDate = today.toISOString().substring(0, 10);
        this.state = { search: '', page: 'second', date: todayDate }
    }
    static navigationOptions = {
        header: null,
    }

    componentWillMount() {

        this.props.getAllPatietns();
        console.disableYellowBox = true;
    }

    render() {
        console.log(this.props.patients)

        let patientsbyName = this.props.patients.filter((patient) => {
            return (
                patient.pname.toLocaleLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1
            )
        });

        let patientsbyDate = this.props.patients.filter((patient) => {
            return (
                patient.date.toLocaleLowerCase().indexOf(this.state.date.toLocaleLowerCase()) !== -1
            )
        });


        console.log(patientsbyName)
        return (
            <Container>
                <Tabs>
                    <Tab heading={<TabHeading><Icon name="ios-search-outline" /><Text style={{ color: '#fff' }}> Search by Name</Text></TabHeading>} >
                        <Header searchBar rounded>
                            <Item>
                                <Icon name="ios-search" />
                                <Input placeholder="Search...." style={{ marginTop: 10 }} onChangeText={(search) => this.setState({ search })} />
                                <Icon name="ios-people" />
                            </Item>
                        </Header>
                        <List>

                            {
                                patientsbyName.map((pat, i) => {
                                    return (<ListItem avatar key={i}>
                                        <Left>
                                            <Thumbnail
                                                style={{ width: 50, height: 50 }}
                                                source={{ uri: 'https://www.arthrosurface.com/wp-content/uploads/2013/05/SurgeonPatient.png' }}
                                            />
                                        </Left>
                                        <Body>
                                            <Text>{pat.pname}</Text>
                                            <Text note>Diseases: {pat.dis}</Text>
                                        </Body>
                                        <Right>
                                            <Text note>{pat.date}</Text>
                                        </Right>
                                    </ListItem>
                                    )
                                })
                            }
                        </List>
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="md-calendar" /><Text style={{ color: '#fff' }}> Search by Date</Text></TabHeading>} >
                        <Header searchBar rounded>
                            <Item>
                                <DatePicker
                                    style={{ width: '90%' }}
                                    date={this.state.date}
                                    mode="date"
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 36
                                        }
                                        // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(d) => { this.setState({ date: d }) }}
                                />
                                <Icon name="ios-search" />
                                {/* <Input placeholder="Search" onChangeText={(search) => this.setState({ search })} />
                                    <Icon name="ios-people" /> */}
                            </Item>
                        </Header>
                        {/* <List>
                            {
                                patientsbyDate.map((pat, i) => {
                                    return (<ListItem avatar key={i}>
                                        <Left>
                                            <Thumbnail
                                                style={{ width: 50, height: 50 }}
                                                source={{ uri: 'https://www.arthrosurface.com/wp-content/uploads/2013/05/SurgeonPatient.png' }}
                                            />
                                        </Left>
                                        <Body>
                                            <Text>{pat.pname}</Text>
                                            <Text note>Diseases: {pat.dis}</Text>
                                        </Body>
                                        <Right>
                                            <Text note>{pat.date}</Text>
                                        </Right>
                                    </ListItem>
                                    )
                                })
                            }
                        </List> */}
                    </Tab>
                </Tabs>
            </Container>
        );

        //     <Footer>
        //     <FooterTab>
        //         <Button vertical active>
        //             <Icon active name="navigate" />
        //             <Text>Patients</Text>
        //         </Button>
        //         <Button vertical>
        //             <Icon name="camera" />
        //             <Text>Reg. Form</Text>
        //         </Button>
        //         <Button vertical>
        //             <Icon name="person" />
        //             <Text>Contact</Text>
        //         </Button>
        //         <Button vertical onPress={() => { this.props.navigation.navigate('signup') }} >
        //             {/* <PatientList /> */}
        //             <Icon name="person" />
        //             <Text>Profile</Text>
        //         </Button>
        //     </FooterTab>
        // </Footer>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientList)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
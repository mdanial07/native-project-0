import React, { Component } from 'react'
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
    Tab, TabHeading
} from 'native-base';

import { View, Text, Button, TextInput, AsyncStorage, Image,StyleSheet } from "react-native"
import DatePicker from 'react-native-datepicker'
import Signup from '../Signup/Signup'

class PatientList extends Component {

    constructor(props) {
        super(props);
        var today = new Date();
        var todayDate = today.toISOString().substring(0, 10);
        this.state = { email: '', pass: '', patients: [], search: '', date: todayDate, }
    }

    static navigationOptions = {
        title:'Patients',        
        header: null,
    }

    componentWillMount() {
        console.disableYellowBox = true;
        
        AsyncStorage.getItem('abc123', (err, result) => {
            if (result !== null) {
                let data = JSON.parse(result);
                this.setState({ patients: data });
                console.log(this.state.patients);
            }
        });
        this.setState({ date: '' })
        console.log(this.state.date)
    }

    componentWillReceiveProps() {
        AsyncStorage.getItem('abc123', (err, result) => {
            if (result !== null) {
                let data = JSON.parse(result);
                this.setState({ patients: data });
                console.log(this.state.patients);
            }
        });
        this.setState({ date: '' })
        console.log(this.state.date)
    }


    render() {

        let patientsbyName = this.state.patients.filter((patient) => {
            return (
                patient.pname.toLocaleLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1
            )
        });

        let patientsbyDate = this.state.patients.filter((patient) => {
            return (
                patient.date.toLocaleLowerCase().indexOf(this.state.date.toLocaleLowerCase()) !== -1
            )
        });

        return (
            <Container>
                <Content>
                    <Tabs>
                        <Tab heading={ <TabHeading><Icon name="ios-search-outline" /><Text style={{color:'#fff'}}> Search by Name</Text></TabHeading>} >
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
                                                <Image
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
                        <Tab heading={ <TabHeading><Icon name="md-calendar" /><Text style={{color:'#fff'}}> Search by Date</Text></TabHeading>} >
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
                            <List>
                                {
                                    patientsbyDate.map((pat, i) => {
                                        return (<ListItem avatar key={i}>
                                            <Left>
                                                <Image
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
                    </Tabs>
                    {/* 
                            <ListItem avatar>
                                <Body>
                                    <Text>Nouroz</Text>
                                    <Text note>Doing what you like will always keep you happy . .</Text>
                                </Body>
                                <Right>
                                    <Text note>3:43 pm</Text>
                                </Right>
                            </ListItem>
                            <ListItem avatar>
                                <Body>
                                    <Text>Kumar</Text>
                                    <Text note>Doing what you like will always keep you happy . .</Text>
                                </Body>
                                <Right>
                                    <Text note>3:43 pm</Text>
                                </Right>
                            </ListItem>
                            <ListItem avatar>
                                <Body>
                                    <Text>Kumar Pratik</Text>
                                    <Text note>Doing what you like will always keep you happy . .</Text>
                                </Body>
                                <Right>
                                    <Text note>3:43 pm</Text>
                                </Right>
                            </ListItem>
                            <ListItem avatar>
                                <Body>
                                    <Text>Kumar Pratik</Text>
                                    <Text note>Doing what you like will always keep you happy . .</Text>
                                </Body>
                                <Right>
                                    <Text note>3:43 pm</Text>
                                </Right>
                            </ListItem>
                            <ListItem avatar>
                                <Body>
                                    <Text>Kumar Pratik</Text>
                                    <Text note>Doing what you like will always keep you happy . .</Text>
                                </Body>
                                <Right>
                                    <Text note>3:43 pm</Text>
                                </Right>
                            </ListItem>
                            <ListItem avatar>
                                <Body>
                                    <Text>Kumar Pratik</Text>
                                    <Text note>Doing what you like will always keep you happy . .</Text>
                                </Body>
                                <Right>
                                    <Text note>3:43 pm</Text>
                                </Right>
                            </ListItem>
                            <ListItem avatar>
                                <Body>
                                    <Text>Kumar Pratik</Text>
                                    <Text note>Doing what you like will always keep you happy . .</Text>
                                </Body>
                                <Right>
                                    <Text note>3:43 pm</Text>
                                </Right>
                            </ListItem> 
                    */}


                </Content>
            </Container>
        )
    }
}
export default PatientList;


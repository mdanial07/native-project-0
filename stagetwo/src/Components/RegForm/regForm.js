import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label, Card, CardItem, Button, Toast } from 'native-base';
import { List, ListItem, Left, Body, Segment, Right, Thumbnail, Icon } from 'native-base';
import { View, Text, AsyncStorage, StyleSheet, Image, } from "react-native"
import DatePicker from 'react-native-datepicker'
import { connect } from "react-redux";
import { PatientsMiddleware } from '../../store/middlewares/patientsMiddleware';
import Hr from 'react-native-hr';

import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
// import Icon from 'react-native-vector-icons/MaterialIcons'

function mapDispatchToProps(dispatch) {
    return {
        createPatient: (users) => dispatch(PatientsMiddleware.createPatient(users)),
    }
}
function mapStateToProps(state) {
    return {
        signup: state.Signup.signup,
    }
}


class PatientRegForm extends Component {

    constructor(props) {
        super(props)
        var today = new Date();
        var todayDate = today.toISOString().substring(0, 10);
        this.state = {
            pname: '',
            dis: '',
            med: '',
            cost: '',
            date: todayDate,
            patient: [],
            docID: '',
            showToast: false
        }
    }

    static navigationOptions = {

        header: null
    }

    componentWillMount() {
        console.disableYellowBox = true;
        AsyncStorage.getItem('patientapp', (err, result) => {
            if (result !== null) {
                console.log(result)
                let data = JSON.parse(result);
                this.setState({ docID: data._id })
            }
        });
    }

    addPatient = () => {
        if (this.state.pname == '' || this.state.dis == '' || this.state.med == '' || this.state.cost == '') {
            // console.log(this.props, "props")

            Toast.show({
                text: 'Please fill form !',
                position: 'bottom',
                buttonText: 'Okay'
            });
        }

        else {
            var obj = {
                name: this.state.pname,
                dis: this.state.dis,
                med: this.state.med,
                cost: this.state.cost,
                date: this.state.date,
            }

            this.props.createPatient(obj);

            Toast.show({
                text: 'Patient SuccessFully Added',
                position: 'bottom',
                buttonText: 'Okay'
            });
            this.setState({
                pname: '',
                dis: '',
                med: '',
                cost: '',
            })
        }

    }

    render() {
        return (
            // <Image source={require('../Images/bg.jpg')} style={styles.bgImage}>

            <Container>
                <View>
                    <Header searchBar rounded>
                        <Text style={{ color: '#fff', fontSize: 24, marginTop: 10 }}>
                            Registration Form
                        </Text>
                    </Header>
                    {/* <Hr lineColor='#b3b3b3' text='Registration Form' textColor='steelblue'
                        textStyle={{
                            color: "red",
                            height: 20,

                        }} /> */}

                    <View style={styles.bgImage}>

                        <Item floatingLabel style={{ marginTop: 10 }}>
                            <Label>Patient Name</Label>
                            <Input required onChangeText={(pname) => this.setState({ pname })} value={this.state.pname} />
                        </Item>
                        <Item floatingLabel style={{ marginTop: 10 }}>
                            <Label>Diseases</Label>
                            <Input onChangeText={(dis) => this.setState({ dis })} value={this.state.dis} />
                        </Item>
                        <Item floatingLabel style={{ marginTop: 10 }}>
                            <Label>Medication Provide</Label>
                            <Input onChangeText={(med) => this.setState({ med })} value={this.state.med} />
                        </Item>
                        <Item floatingLabel style={{ marginTop: 10 }}>
                            <Label>Cost</Label>
                            <Input onChangeText={(cost) => this.setState({ cost })} value={this.state.cost} />
                        </Item>
                        <DatePicker
                            style={{ width: '100%', marginTop: 20 }}
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
                            }}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />
                        <Button block rounded style={{ backgroundColor: 'rgba(45,92,227, 0.7 )', marginLeft: '15%', marginTop: 20, width: '70%' }} onPress={this.addPatient}>
                            <Text style={{ color: '#fff', }} >Patient Registration</Text>
                        </Button>

                    </View>
                </View>

            </Container>

            //            </Image>

        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PatientRegForm)



const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgImage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        marginLeft: 40,

    }
})
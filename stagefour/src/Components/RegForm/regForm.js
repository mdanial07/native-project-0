import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label, Card, CardItem, Body, Button, Toast } from 'native-base';
import { View, Text, AsyncStorage, StyleSheet, Image } from "react-native"
import DatePicker from 'react-native-datepicker'
import { connect } from "react-redux";
import { PatientsMiddleware } from '../../store/middlewares/patientsMiddleware';

// import Hr from 'react-native-hr';

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
            showToast: false
        }
    }

    static navigationOptions = {

        header: null
    }

    componentWillMount() {
        console.disableYellowBox = true;

        // AsyncStorage.getItem('abc123', (err, result) => {
        //     if (result !== null) {
        //         let data = JSON.parse(result);
        //         this.setState({ patient: data });
        //         console.log(this.state.patient, 'dadadadada');
        //         // AsyncStorage.removeItem('abc123', result);   
        //     }
        // });

    }

    addPatient = () => {

        var obj = {
            pname: this.state.pname,
            dis: this.state.dis,
            med: this.state.med,
            cost: this.state.cost,
            // date: this.state.date,
        }

        this.props.createPatient(obj)
        

        // var patients = this.state.patient;
        // // this.setState({ patient: patients })
        // if (this.state.pname == '' || this.state.dis == '' || this.state.med == '' || this.state.cost == '') {
        //     // console.log(this.props, "props")

        //     Toast.show({
        //         text: 'Please fill form !',
        //         position: 'bottom',
        //         buttonText: 'Okay'
        //     });
        // }
        // else {
        //     var obj = {
        //         pname: this.state.pname,
        //         dis: this.state.dis,
        //         med: this.state.med,
        //         cost: this.state.cost,
        //         // date: this.state.date,
        //     }
        //     patients.push(obj)
        //     console.log(patients);
        //     AsyncStorage.setItem('abc123', JSON.stringify(patients));
        //     Toast.show({
        //         text: 'Patient has been added !',
        //         position: 'bottom',
        //         buttonText: 'Okay'
        //     });
        //     this.setState({
        //         pname: '',
        //         dis: '',
        //         med: '',
        //         cost: '',
        //     })
        //     // this.props.navigation.navigate('patientRoute');
        // }


    }

    render() {
        return (
            <Image source={require('../Images/bg.jpg')} style={styles.bgImage}>

                <View>
                    <Card style={{ width: 300, marginTop: '10%' }}>
                        <CardItem>
                            <Body>
                                {/* <Hr lineColor='#b3b3b3' text='Registration Form' textColor='steelblue'
                                    textStyle={{
                                        color: "red",
                                        height: 20,

                                    }} /> */}
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
                                        // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(date) => { this.setState({ date: date }) }}
                                />
                                {/* <Button title="Add Patient" block onPress={this.addPatient}></Button> */}
                                <Button block rounded style={{ backgroundColor: 'rgba(45,92,227, 0.7 )', marginLeft: '15%', marginTop: 20, width: '70%' }} onPress={this.addPatient}>
                                    <Text style={{ color: '#fff', }} >Patient Registration</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>

                    {/* <Button title="Patient List" onPress={() => { this.props.navigation.navigate('patientRoute') }}></Button> */}


                </View >
            </Image>

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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        resizeMode: 'stretch',

    }
})
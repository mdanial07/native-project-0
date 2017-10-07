import React, { Component } from 'react';
import { connect } from "react-redux";
import { PatientsMiddleware } from '../../store/middlewares/patientsMiddleware';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import {
    Container, Header, Content, List, ListItem, Left, Body, Segment, Right, Thumbnail, Item, Input, Icon,
    Button, InputGroup,
    Tab, Tabs, TabHeading
} from 'native-base';
// import Tabs from 'react-native-tabs'
import DatePicker from 'react-native-datepicker'
import { Dropdown } from 'react-native-material-dropdown';

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
        this.state = { search: '', page: 'second', date: '', patients: [] }
    }
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        console.disableYellowBox = true;
        this.props.getAllPatietns();

    }

    componentWillReceiveProps(nextProps) {
        console.log("before")
        if (nextProps.patients.length !== undefined) {
            console.log("after")
            console.log("ancacacac", nextProps.patients)
            this.setState({ patients: nextProps.patients });
        }
    }
    shouldComponentUpdate() {
        console.log('should update')
        return true
    }

    patientsbyname = () => {


        let patientsbyName = this.state.patients.filter((patient) => {
            return (
                patient.pname.toLocaleLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1
            )
        });


        return patientsbyName.map((pat, i) => {
            console.log(pat)
            return (<ListItem avatar key={i}>
                <Left>
                    <Thumbnail
                        style={{ width: 80, height: 80 }}
                        source={{ uri: 'http://www.ambsw.com/wp-content/uploads/2015/09/avatar-patient.png' }}
                    />
                </Left>
                <Body>
                    <Text>{pat.name}</Text>
                    <Text note>Diseases: {pat.dis}</Text>
                    <Text note>Medication: {pat.med}</Text>
                    <Text note>Cost: {pat.cost}</Text>
                </Body>
                <Right>
                    <Text note>{pat.date}</Text>
                </Right>
            </ListItem>
            )
        })
    }

    patientsbyDate = () => {
        console.log("patientby Date")
        let patientsbyDate = this.state.patients.filter((patient) => {
            return (
                patient.date.toLocaleLowerCase().indexOf(this.state.date.toLocaleLowerCase()) !== -1
            )
        });

        console.log(patientsbyDate)

        return patientsbyDate.map((pat, i) => {
            console.log(pat)
            return (<ListItem avatar key={i}>
                <Left>
                    <Thumbnail
                        style={{ width: 80, height: 80 }}
                        source={{ uri: 'http://www.ambsw.com/wp-content/uploads/2015/09/avatar-patient.png' }}
                    />
                </Left>
                <Body>
                    <Text>{pat.name}</Text>
                    <Text note>Diseases: {pat.dis}</Text>
                    <Text note>Medication: {pat.med}</Text>
                    <Text note>Cost: {pat.cost}</Text>
                </Body>
                <Right>
                    <Text note>{pat.date}</Text>
                </Right>
            </ListItem>
            )
        })


    }


    render() {




        console.log('render');
        return (

            <Container>
                {console.log(this.state.patients)}
                <Content>

                    {this.state.patients.map((pat, i) => {
                        console.log(pat)
                    })}

                    <Tabs>
                        <Tab heading={<TabHeading><Icon name="ios-search-outline" /><Text style={{ color: '#fff' }}> Search By Name</Text></TabHeading>}>
                            <Header searchBar rounded>
                                <Item >
                                    <Icon name="ios-search" />
                                    <Input placeholder="Search...." style={{ marginTop: 10 }} onChangeText={(search) => this.setState({ search })} />
                                    <Icon name="ios-people" />
                                </Item>
                            </Header>
                            <View>
                                {
                                    this.state.patients.map((pat, i) => {
                                        console.log(pat)
                                        return (<ListItem avatar key={i}>
                                            <Left>
                                                <Thumbnail
                                                    style={{ width: 80, height: 80 }}
                                                    source={{ uri: 'http://www.ambsw.com/wp-content/uploads/2015/09/avatar-patient.png' }}
                                                />
                                            </Left>
                                            <Body>
                                                <Text>{pat.name}</Text>
                                                <Text note>Diseases: {pat.dis}</Text>
                                                <Text note>Medication: {pat.med}</Text>
                                                <Text note>Cost: {pat.cost}</Text>
                                            </Body>
                                            <Right>
                                                <Text note>{pat.date}</Text>
                                            </Right>
                                        </ListItem>
                                        )
                                    })
                                }
                            </View>
                        </Tab>
                        <Tab heading={<TabHeading><Icon name="md-calendar" /><Text style={{ color: '#fff' }}> Search By Date</Text></TabHeading>}>
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
                                        }}
                                        onDateChange={(d) => { this.setState({ date: d }) }}
                                    />
                                    <Icon name="ios-search" />
                                </Item>
                            </Header>
                            <List>
                                {
                                    this.patientsbyDate()
                                }
                            </List>
                        </Tab>
                    </Tabs>
                </Content>
            </Container>
            // </View>
        );
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
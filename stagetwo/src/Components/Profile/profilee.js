import React, { Component } from 'react'
import { Container, Header, Content, List, Right, Left, ListItem, Item, Label, Input, Icon, Switch, Thumbnail, Text, Separator, Body, TabHeading, } from 'native-base';
import { View, AsyncStorage, Image, StyleSheet, TextInput } from "react-native"
import { connect } from 'react-redux';
import { LoginMiddleware } from '../../store/middlewares/loginMiddleware';


function mapDispatchToProps(dispatch) {
    return {
        logoutUser: (props) => dispatch(LoginMiddleware.logoutUser(props))
    }
}

function mapStateToProps(state) {
    return {
        login: state.Login.login,
    }
}


class Profilee extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', pass: '', user: [], Doctor: [] }
    }
    static navigationOptions = {
        title: 'Login Page',
        header: null,
    }

    componentWillMount() {
        console.disableYellowBox = true;
        console.log(this.props)
        AsyncStorage.getItem('patientapp', (err, result) => {
            if (result !== null) {
                console.log(result)
                let data = JSON.parse(result);
                this.setState({ Doctor: [data] });
                console.log(this.state.Doctor);

                // AsyncStorage.removeItem('patientapp', result);   
            }
        });
    }

    addPatient = () => {

        AsyncStorage.getItem('patientapp', (err, result) => {
            if (result !== null) {
                console.log(result)
                AsyncStorage.removeItem('patientapp', result)
            }
        });
        // console.log(this.props)
        this.props.navigation.navigate('login')
        console.log("dadada");
    }

    render() {
        console.log(this.state.Doctor)
        return (
            <Container>
                <Content>
                    <Header />
                    <List>
                        <ListItem>
                            <Thumbnail square size={80} source={{ uri: 'https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/21432894_1192746394162794_1096900880755878585_n.jpg?oh=ef1d58816ee341804cbcd9f366528413&oe=5A5314D1' }} />
                            {
                                this.state.Doctor.map((doc, i) => {
                                    return (<Body key={i}>
                                        <Text>Dr. {doc.fname}</Text>
                                        <Text note>Indus Hospital</Text>
                                    </Body>
                                    )
                                })
                            }
                            {/* <Right>
                                <Text note>veiw</Text>
                            </Right> */}
                        </ListItem>

                        <Separator bordered>
                            <Text>MORE DETAILS</Text>
                        </Separator>
                        {
                            this.state.Doctor.map((doc, i) => {
                                return (<View style={{ marginLeft: '10%', marginTop: '5%', justifyContent: 'center', width: '80%' }}>
                                    <Item floatingLabel  >
                                        <Label>Name</Label>
                                        <Input value={doc.fname} />
                                    </Item>
                                    <Item floatingLabel style={{ marginTop: '4%'}}>
                                        <Label>Surname</Label>
                                        <Input value={doc.sname} />
                                    </Item>
                                    <Item floatingLabel style={{ marginTop: '4%'}}>
                                        <Label>Email Address</Label>
                                        <Input value={doc.email} />
                                    </Item>
                                    <Item floatingLabel style={{ marginTop: '4%'}}>
                                        <Label>Password</Label>
                                        <Input value={doc.pass} />
                                    </Item>
                                </View>
                                )
                            })
                        }




                    </List>
                </Content>
            </Container>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profilee);



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
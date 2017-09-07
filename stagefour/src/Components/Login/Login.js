import React, { Component } from 'react'
import { Container, Header, Title, Button, Content, Form, Icon, Item, Input, Label, Footer } from 'native-base';
import { View, Text, AsyncStorage, Image, StyleSheet, TextInput } from "react-native"
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', pass: '', user: [] }
    }
    static navigationOptions = {
        title: 'Login Page',
        header: null,
    }
    componentWillMount() {
        console.disableYellowBox = true;
        AsyncStorage.getItem('users', (err, result) => {

            if (result !== null) {
                let data = JSON.parse(result);
                this.setState({ user: data });
                console.log(this.state.user, 'dadadadada');
                // AsyncStorage.removeItem('abc123', result);   
            }
        });
    }
    loginCheck = () => {
        var userExist = false;
        var users = this.state.user;

        for (var i = 0; i < users.length; i++) {
            if (users[i].email === this.state.email && users[i].pass === this.state.pass) {
                userExist = true;
            }
        }

        if (userExist === true) {
            console.log('User Successfully Login !')
            // this.props.navigation.navigate('tabsRoute')
        }
        else {
            console.log('Login Failed !')
        }
    }

    render() {
        return (
            <Image source={require('../Images/bg1.jpg')} style={styles.bgImage}>
                <Container >
                    <Content style={{ width: 240, marginTop: 200 }} >
                            <TextInput
                                style={{ height: 40, color: '#fff' }}
                                placeholder="Username"
                                placeholderTextColor="white"
                                onChangeText={(email) => this.setState({ email })}
                                underlineColorAndroid='#fff'
                                required
                            />
                            <TextInput
                                style={{ height: 40, color: '#fff' }}
                                placeholder="Password"
                                placeholderTextColor="white"
                                onChangeText={(pass) => this.setState({ pass })}
                                underlineColorAndroid='#fff'
                                secureTextEntry={true}    
                            />
                            <Button block rounded style={{ marginTop: 20, backgroundColor: 'rgba(255,255,255, 0.3 )', padding: 10, width: 240 }} onPress={this.loginCheck}>
                                <Text style={{ color: '#fff', }} >Login</Text>
                            </Button>
                            <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center', marginTop: 10 }}> Forgot your login details?<Text style={{ fontWeight: 'bold', }}> Get login help.</Text> </Text>
                    </Content>
                    <Footer style={{ height: 100 }}>
                        <Button block rounded style={{ backgroundColor: 'rgba(45,92,227, 0.7 )', padding: 10, width: 240 }} onPress={() => { this.props.navigation.navigate('signup') }}>
                            <Text style={{ color: '#fff', }} >Create an account </Text>
                        </Button>
                    </Footer>

                </Container>
            </Image  >


        )
    }
}
export default Login;



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
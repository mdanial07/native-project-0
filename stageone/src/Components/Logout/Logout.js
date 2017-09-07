import React, { Component } from 'react'
import { Container, Header, Title, Content, Form, Icon, Item, Input, Label } from 'native-base';
import { View, Text, Button, AsyncStorage, StatusBar } from "react-native"




class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', pass: '', user: [] }

    }

    static navigationOptions = {
        header: null
    }

    componentWillMount() {
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
            this.props.navigation.navigate('Tab')
        }
        else {
            console.log('Login Failed !')
        }
    }

    render() {
        return (

            <Container>
                <Header>
                    {/* <Button title='' transparent>
                            <Icon name="ios-menu" />
                        </Button>
                        <Title>Header</Title>
                        <Button title='' transparent>
                            <Icon name="ios-arrow-back" />
                        </Button> */}
                    <StatusBar backgroundColor='#000' barStyle="light-content" />
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input onChangeText={(email) => this.setState({ email })} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input onChangeText={(pass) => this.setState({ pass })} />
                        </Item>
                    </Form>
                    <Button title="Login" onPress={this.loginCheck}></Button>
                    {/* <Button title="Create an account" onPress={() => { this.props.navigation.navigate('route') }}></Button> */}
                </Content>

            </Container>

        )
    }
}
export default Logout
import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label, Icon } from 'native-base';
import { View, Text, Button, AsyncStorage } from "react-native"


class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fullName: '',
            email: '',
            password: '',
            user: [],
        }
    }

    static navigationOptions = {
        title: "Create an account",
        headerLeft: <Icon name="apps" />
    }

    componentWillMount() {
        AsyncStorage.getItem('users', (err, result) => {
            if (result !== null) {
                let data = JSON.parse(result);
                this.setState({ user: data });
                console.log(this.state.user, 'dadadadada');
            }
        })
    }

    createAnAccount = (e) => {
        e.preventDefault();
        AsyncStorage.getItem('users', (err, result) => {
            if (result !== null) {
                let data = JSON.parse(result);
                this.setState({ user: data }); 1
                console.log(this.state.user, 'dadadadada');
            }
        })
        var userExist = false;
        var users = this.state.user;
        var obj = {
            name: this.state.fullName,
            email: this.state.email,
            pass: this.state.pass,
        }

        for (var i = 0; i < users.length; i++) {
            if (users[i].email === this.state.email) {
                userExist = true;
            }
        }

        if (userExist === true) {
            console.log('user already exists!!')
        }
        else {

            users.push(obj);
            console.log(users);
            AsyncStorage.setItem('users', JSON.stringify(users))
            console.log('Signup SuccessFully')
        }
    }

    render() {
        return (

            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Full Name</Label>
                            <Input onChangeText={(fullName) => this.setState({ fullName })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Email Address</Label>
                            <Input onChangeText={(email) => this.setState({ email })} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input onChangeText={(pass) => this.setState({ pass })} />
                        </Item>
                    </Form>
                    <Button title="Sign-Up" onPress={this.createAnAccount}></Button>
                </Content>

            </Container>

            // <View>
            //     <Button title="rabar" onPress={() => { this.props.navigation.navigate('route') }}></Button>
            // </View>
        )
    }
}
export default Signup
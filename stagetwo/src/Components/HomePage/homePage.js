import React, { Component } from 'react'
import { Container, Header, Content, List, Right, Left, ListItem, Icon, Switch, Thumbnail, Text, Separator, Body, TabHeading, } from 'native-base';

import { View, AsyncStorage, Image, StyleSheet, TextInput } from "react-native"
import { connect } from 'react-redux';



function mapDispatchToProps(dispatch) {
    return {

    }
}

function mapStateToProps(state) {
    return {
        login: state.Login.login,
    }
}


class HomePage extends Component {

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

    render() {
        console.log(this.state.Doctor)
        return (
            <Container>
                <View>
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
                        <Right>
                            <Text note>veiw</Text>
                        </Right>
                    </ListItem>
                    <Separator bordered>
                        <Text>HELP & SETTINGS</Text>
                    </Separator>

                    <ListItem icon>
                        <Left>
                            <Icon name="menu" />
                        </Left>
                        <Body>
                            <Text>Account Setting</Text>
                        </Body>
                        <Right>
                            <Text>GeekyAnts</Text>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="menu" />
                        </Left>
                        <Body>
                            <Text>Help Center</Text>
                        </Body>
                        <Right>
                            <Text>GeekyAnts</Text>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Icon name="menu" />
                        </Left>
                        <Body>
                            <Text>Terms & Policies</Text>
                        </Body>
                        <Right>
                            <Text>GeekyAnts</Text>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="menu" />
                        </Left>
                        <Body>
                            <Text>Report Problem</Text>
                        </Body>
                        <Right>
                            <Text>GeekyAnts</Text>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="menu" />
                        </Left>
                        <Body>
                            <Text>About</Text>
                        </Body>
                        <Right>
                            <Text>GeekyAnts</Text>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="menu" />
                        </Left>
                        <Body>
                            <Text style={{ color: '#CD0000' }}>Log Out</Text>
                        </Body>
                        <Right>
                            <Text>GeekyAnts</Text>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                </View>
            </Container>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);



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
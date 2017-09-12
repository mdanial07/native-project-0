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


class Profile extends Component {

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

    addPatient = () => {

        AsyncStorage.getItem('patientapp', (err, result) => {
            if (result !== null) {
                AsyncStorage.removeItem('patientapp', result)
                this.props.navigation.navigate("login")
            }
        });
        console.log("dadada");
    }

    render() {
        console.log(this.state.Doctor)
        return (
            <Container>
                <Content>
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
                            <Right>
                                <Text note>veiw</Text>
                            </Right>
                        </ListItem>

                        <Separator bordered>
                            <Text>HELP & SETTINGS</Text>
                        </Separator>

                        <ListItem avatar>
                            <Left>
                                <Thumbnail
                                    avatar
                                    style={{ width: 50, height: 50 }}
                                    source={{ uri: 'https://nest.com/support/images/misc-assets-icons/settings-icon.png' }}
                                />
                            </Left>
                            <Body>
                                <Text>Account Setting</Text>
                                <Text note style={{ color: '#999' }}>Account Setting</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail
                                    style={{ width: 50, height: 50 }}
                                    source={{ uri: 'http://www.iconsdb.com/icons/preview/gray/help-xxl.png' }}
                                />
                            </Left>
                            <Body>
                                <Text>Help Center</Text>
                                <Text note style={{ color: '#999' }}>Help Center</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail
                                    style={{ width: 50, height: 50 }}
                                    source={{ uri: 'https://launchdarkly.com/images/compressed/longtermcontrol.png' }}
                                />
                            </Left>
                            <Body>
                                <Text>Terms & Policie</Text>
                                <Text note style={{ color: '#999' }}>Terms & Policie </Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail
                                    style={{ width: 50, height: 50 }}
                                    source={{ uri: 'http://hellomukoma.com/public/images/site_bg/icon_contract.png' }}
                                />
                            </Left>
                            <Body>
                                <Text>Report Problem</Text>
                                <Text note style={{ color: '#999' }}>Report Problem</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail
                                    style={{ width: 50, height: 50 }}
                                    source={{ uri: 'http://www.iconsdb.com/icons/preview/dark-gray/about-xxl.png' }}
                                />
                            </Left>
                            <Body>
                                <Text>About Application</Text>
                                <Text note style={{ color: '#999' }}>About Application</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem onPress={this.addPatient}>
                            <Thumbnail
                                avatar
                                style={{ width: 50, height: 50 }}
                                source={{ uri: 'https://png.icons8.com/office/1600/shutdown' }}
                            />
                            <Body>
                                <Text style={{ color: '#CD0000' }}>Log Out </Text>
                                <Text note style={{ color: '#999' }}>Log Out</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);



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
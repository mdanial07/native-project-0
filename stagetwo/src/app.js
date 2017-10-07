import React, { Component } from 'react'
import * as firebase from "firebase";
import { View, Text } from "react-native"
import Naviagte from "./nav"
import { Container, Header, Root } from 'native-base'
import store from './store/';
import { Provider } from 'react-redux';

var config = {
    apiKey: "AIzaSyCM6Tcssg8K3PwddZEnw2D-VI4mb5Soi_c",
    authDomain: "weblearn-f0c26.firebaseapp.com",
    databaseURL: "https://weblearn-f0c26.firebaseio.com",
    projectId: "weblearn-f0c26",
    storageBucket: "weblearn-f0c26.appspot.com",
    messagingSenderId: "345369767855"
  };
  firebase.initializeApp(config);


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root>
                    <Naviagte />
                </Root>
            </Provider>
        )
    }
}
export default App
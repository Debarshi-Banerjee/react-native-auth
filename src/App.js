import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { userLoggendIn: null }
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCNS9f3_cBd2d_an0Hw4pb-Aim1OcH9rrU',
            authDomain: 'auth-9b520.firebaseapp.com',
            databaseURL: 'https://auth-9b520.firebaseio.com',
            projectId: 'auth-9b520',
            storageBucket: 'auth-9b520.appspot.com',
            messagingSenderId: '1062409975995'
        });
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ userLoggendIn: true });
            } else {
                this.setState({ userLoggendIn: false });
            }
        });
    }
    renderContent() {
        switch (this.state.userLoggendIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button
                                onPress={() => firebase.auth().signOut()}
                            >
                                Log Out
                            </Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={styles.spinnerContainerStyle}>
                        <Spinner />
                    </View>
                );
        }
    }
    render() {
        return (
            <View style={styles.mainContainerStyle}>
                <Header headerText="Firebase Auth" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    mainContainerStyle: {
        flex: 1,
    },
    spinnerContainerStyle: {
        flex: 1,
    }
};

export default App;

import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
    state = { email: '', password: '', error: '', apiInProgress: false };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', apiInProgress: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLogginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLogginSuccess.bind(this))
                    .catch(this.onLogginFail.bind(this));
            });
    }

    onLogginFail() {
        this.setState({ error: 'Authentication Failed', apiInProgress: false });
    }

    onLogginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            apiInProgress: false
        });
    }

    renderButton() {
        if (this.state.apiInProgress) {
            return <Spinner size='small' />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>

        );
    }

    render() {
        const { errorTextStyle } = styles;

        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder='user@gmail.com'
                        label='Email'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                    />
                </CardSection>

                <CardSection >
                    <Input
                        secureTextEntry
                        placeholder='password'
                        label='Password'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                </CardSection>


                <Text style={errorTextStyle}>{this.state.error}</Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;

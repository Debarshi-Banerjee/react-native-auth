//import
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


//make component
const Button = ({ onPress, children }) => {
    const {
        buttonStyle,
        textStyle } = styles;
    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}
        >
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5

    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};


//make component avilable app wide
export { Button };

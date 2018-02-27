//import
import React from 'react';
import { View, ActivityIndicator } from 'react-native';


//make component
const Spinner = ({ size }) => {
    const { containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};


//make component avilable app wide
export { Spinner };

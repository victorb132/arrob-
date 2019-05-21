import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

class Button extends Component {
    render() {
        let { onPress, type, style, children } = this.props;

        return (
            <TouchableOpacity
                style={[styles.container, style, type ? styles[`button-${type}`] : {}]}
                onPress={onPress} >
                <Text style={styles.text}>{children}</Text>
            </TouchableOpacity>
        )
    }
}

export default Button;
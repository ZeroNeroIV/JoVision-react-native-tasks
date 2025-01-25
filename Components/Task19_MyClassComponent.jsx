import React, { Component } from 'react';
import { Text } from 'react-native';

export class Task19_MyClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            style: {
                textStyle: {
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'red'
                },
            }
        }
    }

    render() {
        return (
            <Text
                style={this.state.style.textStyle}>
                This is MyClassComponent
            </Text>
        );
    }
}
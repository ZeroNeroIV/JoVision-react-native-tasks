import { Component } from "react";
import { Text } from 'react-native';

export class Task25_MyClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props: props,
            styles: {
                textStyle: {
                    fontSize: 20,
                    color: 'orange',
                    textAlign: 'center'
                }
            },
            text: "Task25"
        }
    }

    changeText(str) {
        this.setState({ text: str });
    }

    render() {
        return (
            <Text style={this.state.styles.textStyle}>
                {this.state.text}
            </Text>
        )
    }
}
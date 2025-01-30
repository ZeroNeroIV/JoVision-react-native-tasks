import { Component } from "react";
import { Text } from "react-native";
import { TextContext } from "./Task38_TextContext";


export class Task38_ComponentOne extends Component {
    static contextType = TextContext;

    render() {
        const { text } = this.context;
        return <Text
            style={{
                color: 'white',
                fontSize: 18,
            }}
        >
            Text: {text}
        </Text>;
    }
}
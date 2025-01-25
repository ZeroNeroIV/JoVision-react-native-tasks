import { Component } from "react";
import { TextInput } from "react-native";

export class Task23_MyClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on_text_change: function on_text_change(text) {
                props.setText(text);
            }
        }
    }

    render() {
        return (
            <TextInput
                onChangeText={this.state.on_text_change}>
            </TextInput>
        );
    }
}
import { Component } from "react";
import { Text } from "react-native";

export class Task20_MyClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            styles: {
                textStyle: {
                    color: "blue",
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center"
                }
            }
        }
    }

    componentDidMount() {
        console.log("Task20's MyClassComponent loaded!");
    }

    componentWillUnmount() {
        console.log("Task20's MyClassComponent unloaded!");
    }

    render() {
        // console.log("Task20's MyClassComponent loaded/rendered!");
        return (
            <Text style={this.state.styles.textStyle}>
                Task20's MyClassComponent
            </Text>
        )
    }
}
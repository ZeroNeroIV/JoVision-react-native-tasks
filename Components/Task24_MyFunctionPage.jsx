import { useImperativeHandle, useState } from "react";
import { Text } from "react-native";

export function Task24_MyFunctionPage(props) {
    const [text, setText] = useState("Task24")

    const styles = {
        textStyle: {
            fontSize: 20,
            color: 'cyan',
            textAlign: 'center'
        }
    }

    function imperative_handler() {
        return ({
            changeText(str) {
                setText(str);
            },
        });
    }

    useImperativeHandle(props.text, imperative_handler);

    return (
        <Text style={styles.textStyle}>
            {text}
        </Text>
    )
}
import { Text } from "react-native";

export function Task24_MyFunctionPage(props) {
    const styles = {
        textStyle: {
            fontSize: 20,
            color: 'cyan',
            textAlign: 'center'
        }
    }

    return (
        <Text style={styles.textStyle}>
            {props.text}
        </Text>
    )
}
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Task22_MyFunctionPage } from '../Components/Task22_MyFunctionPage';

export function Task22() {
    const [text, setText] = useState("...")

    const styles = {
        textStyle: {
            fontSize: 20,
            color: "purple",
            textAlign: "center",
        }
    }

    return (
        <View>
            <Text style={styles.textStyle}>
                {text}
            </Text>
            <Task22_MyFunctionPage setText={setText} />
        </View>
    );
}
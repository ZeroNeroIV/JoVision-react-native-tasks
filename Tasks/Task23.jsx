import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Task23_MyClassComponent } from '../Components/Task23_MyClassComponent';

export function Task23() {
    const [text, setText] = useState("Task23")

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
            <Task23_MyClassComponent setText={setText} />
        </View>
    );
}
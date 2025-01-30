import { StyleSheet, Text } from "react-native";
import { useCurrentTime } from "../Components/Task34_useCurrentTime";


export function Task34() {
    const currentTime = useCurrentTime();

    return <Text style={styles.text}>{currentTime.toUTCString()}</Text>;
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        backgroundColor: 'brown',
        borderRadius: 16,
        paddingVertical: 3,
        paddingHorizontal: 7,
    }
});
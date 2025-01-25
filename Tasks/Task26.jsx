import { useState } from "react";
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";

export function Task26() {
    const url = "https://api.ipify.org/?format=json";

    const [text, setText] = useState("Task26");
    const [loader, setLoader] = useState(false);

    const styles = StyleSheet.create({
        textStyle: {
            color: "",
            fontSize: 20,
            textAlign: "center",
        }
    });

    function non_blocking_request() {
        function first_then(response) {
            return response.json();
        }

        function second_then(data) {
            console.log(data);
            setText(`Non-Blocking Request: ${data.ip}`);
            return data;
        }

        function exception_handler(ex) {
            return `Error: ${ex}`
        }

        fetch(url)
            .then(first_then)
            .then(second_then)
            .catch(exception_handler);
    }

    async function blocking_request() {
        setLoader(true);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setText(`Blocking Request: ${data.ip}`);
        setLoader(false);
        return data;
    }

    return (
        <View style={styles.container}>
            {!loader ?
                <View>
                    <Button title="Non-Blocking Request" onPress={non_blocking_request}></Button>
                    <Button title="Blocking Request" onPress={blocking_request}></Button>
                    <Text style={styles.textStyle}>
                        {text}
                    </Text>
                </View> :
                <ActivityIndicator></ActivityIndicator>}
        </View>
    )
}
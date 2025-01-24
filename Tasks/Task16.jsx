import { useState } from "react";
import { Button, Text, View } from "react-native";

export function Task16(props) {
    const [name, setname] = useState("");
    const [title, setTitle] = useState("Show");

    function on_button_press() {
        setTitle(title === "Show" ? "Hide" : "Show");
        setname(name === "" ? "Alameen Sabbah" : "");
    }

    return (
        <View>
            <Button
                title={title}
                onPress={on_button_press}>
            </Button>
            <Text style={styles.myName}>{name}</Text>
        </View>
    )
}

const styles = {
    myName: {
        margin: 10,
        fontSize: 20,
        textAlign: "center",
    }
}
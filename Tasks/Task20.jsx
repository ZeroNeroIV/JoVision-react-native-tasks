import { Button, View } from "react-native";
import { Task20_MyClassComponent } from "../Components/Task20_MyClassComponent";
import { useState } from "react";

export function Task20() {
    const [show, setShow] = useState(false);

    function on_button_press() {
        setShow(!show);
    }

    return (
        <View>
            <Button title={!show ? "Show" : "Hide"} onPress={on_button_press}></Button>
            {show ? <Task20_MyClassComponent></Task20_MyClassComponent> : null}
        </View>
    );
}
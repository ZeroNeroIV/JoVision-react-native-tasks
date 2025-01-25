import { Button, View } from "react-native";
import { Task19_MyClassComponent } from "../Components/Task19_MyClassComponent";
import { useState } from "react";

export function Task19() {
    const [show, setShow] = useState(false);

    function on_button_press() {
        setShow(!show);
    }

    return (
        <View>
            <Button title={!show ? "Show" : "hide"} onPress={on_button_press}></Button>
            {show ? <Task19_MyClassComponent /> : null}
        </View>
    );
}
import { Button, View } from "react-native";
import { Task20_MyClassComponent } from "../Components/Task20_MyClassComponent";
import { useState } from "react";

export function Task20() {
    const [show, setShow] = useState(false);
    const [buttonTitle, setButtonTitle] = useState("Show");

    function on_button_press() {
        setShow(!show);
        setButtonTitle(!show ? "Hide" : "Show");
    }

    return (
        <View>
            <Button title={buttonTitle} onPress={on_button_press}></Button>
            {show && <Task20_MyClassComponent />}
        </View>
    );
}
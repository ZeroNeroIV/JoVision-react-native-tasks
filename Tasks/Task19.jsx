import { Button, View } from "react-native";
import { Task19_MyClassComponent } from "../Components/Task19_MyClassComponent";
import { useState } from "react";

export function Task19() {
    const [show, setShow] = useState(false);
    const [buttonTitle, setButtonTitle] = useState("Show");

    function on_button_press() {
        setShow(!show);
        setButtonTitle(!show ? "Hide" : "Show");
    }

    return (
        <View>
            <Button title={buttonTitle} onPress={on_button_press}></Button>
            {show && <Task19_MyClassComponent />}
        </View>
    );
}
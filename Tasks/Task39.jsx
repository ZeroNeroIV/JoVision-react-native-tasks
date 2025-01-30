import { Button, View } from "react-native";
import { Provider } from "react-redux";
import { useState } from "react";
import { Task39_TextInputComponent } from "../Components/Task39_TextInputComponent";
import { store } from "../Store/store";

export function Task39() {
    const [show, setShow] = useState(false);

    function on_press() {
        setShow(!show);
    }

    return (
        <Provider store={store}>
            <View>
                <Button
                    title={show ? "Hide" : "Show"}
                    onPress={on_press}
                />
                {show && <Task39_TextInputComponent />}
            </View>
        </Provider>
    );
}
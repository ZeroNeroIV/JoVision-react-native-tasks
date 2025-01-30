import { Button, View } from "react-native";
import { Provider } from "react-redux";
import { useState } from "react";
import { Task40_TextInputComponent } from "../Components/Task40_TextInputComponent";
import { store } from "../Store/store";

export function Task40() {
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
                {show && <Task40_TextInputComponent />}
            </View>
        </Provider>
    );
}
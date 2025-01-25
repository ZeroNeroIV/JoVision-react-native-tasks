import { useState } from "react";
import { View, TextInput } from "react-native";
import { Task24_MyFunctionPage } from "../Components/Task24_MyFunctionPage";

export function Task24() {
    const [text, setText] = useState("Task24");

    function on_text_input_change(new_text) {
        setText(new_text);
    }

    return (
        <View>
            <Task24_MyFunctionPage text={text} />
            <TextInput onChangeText={on_text_input_change}>
            </TextInput>
        </View>
    )
}
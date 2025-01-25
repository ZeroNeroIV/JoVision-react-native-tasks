import { useRef, useState } from "react";
import { View, TextInput } from "react-native";
import { Task24_MyFunctionPage } from "../Components/Task24_MyFunctionPage";

export function Task24() {
    const textRef = useRef();

    function on_text_input_change(new_text) {
        textRef.current.changeText(new_text);
    }

    return (
        <View>
            <Task24_MyFunctionPage text={textRef} />
            <TextInput onChangeText={on_text_input_change}>
            </TextInput>
        </View>
    )
}
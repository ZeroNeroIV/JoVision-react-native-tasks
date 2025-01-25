import { useEffect, useState } from "react";
import { TextInput, View } from "react-native";

export function Task22_MyFunctionPage(props) {
    function on_text_field_change(current_value) {
        // console.log("Current value: " + current_value);
        props.setText(current_value);
    }

    return (
        <View>
            <TextInput
                onChangeText={on_text_field_change}>
            </TextInput>
        </View>
    );
}
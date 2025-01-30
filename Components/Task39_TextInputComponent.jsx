import { useEffect } from "react";
import { TextInput } from "react-native";
import { setText } from "../Store/store";
import { useDispatch, useSelector } from "react-redux";


export function Task39_TextInputComponent() {
    const text = useSelector(handleSelector);
    const dispatcher = useDispatch();

    function handleSelector(state) {
        return state.text.text;
    }

    function on_change_text(txt) {
        dispatcher(setText(txt));
    }

    function on_mount() {
        console.log('Mounted');
    }

    function on_unmount() {
        console.log('Unmounted');
    }

    function handleEffect() {
        on_mount();
        return on_unmount;
    }

    useEffect(handleEffect, [Task39_TextInputComponent]);

    return <TextInput
        value={text}
        placeholder="Write here..."
        onChangeText={on_change_text}
        style={{
            color: 'white',
            backgroundColor: 'slategrey',
            width: 200,
            height: 45,
            borderRadius: 16,
            marginHorizontal: 4,
            marginVertical: 16,
            paddingHorizontal: 8,
            paddingVertical: 4,
        }}
    />;
}
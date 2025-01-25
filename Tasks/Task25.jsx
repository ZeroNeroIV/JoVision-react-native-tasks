import { useRef } from 'react';
import { View, TextInput } from 'react-native';
import { Task25_MyClassComponent } from '../Components/Task25_MyClassComponent'

export function Task25() {
    const textRef = useRef();

    function on_text_input_change(new_text) {
        textRef.current.changeText(new_text);
    }

    return (
        <View>
            <Task25_MyClassComponent ref={textRef} />
            <TextInput onChangeText={on_text_input_change}>
            </TextInput>
        </View>
    )
}
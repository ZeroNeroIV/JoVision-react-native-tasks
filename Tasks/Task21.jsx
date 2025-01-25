import { Button, View } from 'react-native';
import { useState } from 'react';
import { Task21_MyFunctionPage } from '../Components/Task21_MyFunctionPage';

export function Task21() {
    const [show, setShow] = useState(false);
    const [buttonTitle, setButtonTitle] = useState("Show");

    function on_button_press() {
        setShow(!show);
        setButtonTitle(!show ? "Hide" : "Show");
    }

    return (
        <View>
            <Button
                title={buttonTitle}
                onPress={on_button_press}>
            </Button>
            {show && <Task21_MyFunctionPage />}
        </View>
    );
}
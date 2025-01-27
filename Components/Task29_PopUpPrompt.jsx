import { View, TextInput, Text, Button } from 'react-native';

export function Task29_PopUpPrompt(props) {
    const {
        styles,
        arr_length,
        on_change_text,
        confirm_submission,
        cancel_submission,
        err
    } = props;

    return (
        <View style={styles.overlay}>
            <View style={styles.modalBox}>
                <Text>Write an index between 0 and {arr_length - 1} (inclusive) </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Write here...'
                    onChangeText={on_change_text}
                    keyboardType='number-pad'
                />
                {err && <Text style={styles.error}>{err}</Text>}
                <Button
                    title='Ok'
                    style={styles.button}
                    onPress={confirm_submission} />
                <Button
                    title='Cancel'
                    style={styles.button}
                    onPress={cancel_submission} />
            </View>
        </View>
    );
}
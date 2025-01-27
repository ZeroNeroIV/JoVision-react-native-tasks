import {
    useRef,
    useState
} from 'react';
import {
    Button,
    FlatList,
    Modal,
    View,
    Platform,
    StyleSheet
} from "react-native";
import { Popup } from 'react-native-windows';
import { Task28_ItemComponent } from '../Components/Task28_ItemComponent';
import { Task29_PopUpPrompt } from '../Components/Task29_PopUpPrompt';

export function Task29() {
    const task28_img_base_path = "../Images/Task28/";
    const [text, setText] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [err, setErr] = useState(null);
    const flat_list_ref = useRef();
    const styles = StyleSheet.create({
        container: {
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: 'grey',
        },
        overlay: {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'center',
            alignItems: 'center',
        },
        button: {
            width: 200,
            height: 40,
        },
        modalBox: {
            color: "black",
            width: 300,
            padding: 20,
            backgroundColor: '#408afa',
            borderRadius: 10,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        },
        error: {
            backgroundColor: 'white',
            borderWidth: 1,
            borderRadius: 4,
            color: "red",
            fontWeight: 'bold',
            paddingHorizontal: 8,
            paddingVertical: 3,
        },
        textInput: {
            margin: 14,
            borderWidth: 2,
            borderColor: '#2a5afa',
            borderRadius: 8,
            textDecorationLine: 'underline',
            textDecorationColor: 'white',
            textDecorationStyle: 'solid',
            backgroundColor: '#144aa4',
            color: 'black',
            width: 200,
            height: 40,
            justifyContent: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            paddingVertical: 3,
            paddingHorizontal: 8,
        },
    });

    const arr = [
        require(`${task28_img_base_path}0.jpg`),
        require(`${task28_img_base_path}1.jpg`),
        require(`${task28_img_base_path}2.jpg`),
        require(`${task28_img_base_path}3.jpg`),
        require(`${task28_img_base_path}4.jpg`),
        require(`${task28_img_base_path}5.jpg`),
        require(`${task28_img_base_path}6.jpg`),
        require(`${task28_img_base_path}7.jpg`),
        require(`${task28_img_base_path}8.jpg`),
        require(`${task28_img_base_path}9.jpg`),
        require(`${task28_img_base_path}10.jpg`),
        require(`${task28_img_base_path}11.jpg`),
        require(`${task28_img_base_path}12.jpg`),
        require(`${task28_img_base_path}13.jpg`),
        require(`${task28_img_base_path}14.jpg`),
        require(`${task28_img_base_path}15.jpg`),
        require(`${task28_img_base_path}16.jpg`),
        require(`${task28_img_base_path}17.jpg`),
        require(`${task28_img_base_path}18.jpg`),
        require(`${task28_img_base_path}19.jpg`),
        require(`${task28_img_base_path}20.jpg`),
        require(`${task28_img_base_path}21.jpg`),
    ];

    function item_renderer({ item, index }) {
        return <Task28_ItemComponent
            path={item}
            idx={index}
        />
    }

    function on_change_text(text) {
        setText(text);
        setErr(null);
    }

    function is_input_valid(input) {
        let has_error = false;
        let error_message = null;
        if (isNaN(input)) {
            has_error = true;
            error_message = 'Input must be an integer number.';
        } else if (input < 0 || input >= arr.length) {
            has_error = true;
            error_message = 'Index out of bounds.';
        }
        setErr(error_message);
        return !has_error;
    }

    function confirm_submission() {
        const idx = parseInt(text);

        if (!is_input_valid(idx)) {
            setText('');
            return;
        };

        flat_list_ref.current?.scrollToIndex({
            animated: true,
            index: idx,
        });

        close_popup_prompt();
    }

    function cancel_submission() {
        close_popup_prompt();
    }

    function open_popup_prompt() {
        setErr('');
        setText('');
        setIsVisible(true);
    }

    function close_popup_prompt() {
        setErr('');
        setText('');
        setIsVisible(false);
    }

    const popup_component = <Task29_PopUpPrompt
        styles={styles}
        arr_length={arr.length}
        on_change_text={on_change_text}
        confirm_submission={confirm_submission}
        cancel_submission={cancel_submission}
        err={err}
    />;

    return (
        <View>
            <Button title="Search" onPress={open_popup_prompt} />
            {
                Platform.OS == 'windows'
                    ?
                    <Popup
                        isOpen={isVisible}
                        onDismiss={close_popup_prompt}
                        isLightDismissEnabled={true}
                    >
                        {popup_component}
                    </Popup>
                    :
                    <Modal
                        animationType='fade'
                        visible={isVisible}
                        onRequestClose={close_popup_prompt}
                        transparent={true}
                    >
                        {popup_component}
                    </Modal>
            }
            <FlatList
                data={arr}
                renderItem={item_renderer}
                ref={flat_list_ref}
                horizontal={true}
                onScrollToIndexFailed={is_input_valid}
                style={{
                    margin: 15,
                    padding: 20,
                }}
            />
        </View >
    )
}
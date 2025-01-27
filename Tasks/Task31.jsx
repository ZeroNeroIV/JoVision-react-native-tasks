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
    StyleSheet,
    Pressable
} from "react-native";
import { Popup } from 'react-native-windows';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Task29_PopUpPrompt } from '../Components/Task29_PopUpPrompt';
import { Task28_ItemComponent } from '../Components/Task28_ItemComponent';

export function Task31() {
    const task28_img_base_path = "../Images/Task28/";
    const flat_list_ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [text, setText] = useState('');
    const [err, setErr] = useState(null);
    const [arr, setArr] = useState([
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
    ]);

    function item_renderer({ item, index }) {
        function apply_remove_from_arr() {
            remove_from_arr(index);
        }

        function apply_add_duplicate_to_right() {
            add_duplicate_to_right(index);
        }

        return (
            <View>
                <Pressable
                    style={[
                        styles.icon,
                        { zIndex: 5, left: 42, right: '' },
                    ]}
                    onPress={apply_add_duplicate_to_right}
                >
                    <Icon
                        name="plus"
                        size={35}
                        color="green"
                        width="50"
                        height="50"
                    />
                </Pressable>
                <Pressable
                    style={[
                        styles.icon,
                        { zIndex: 5, backgroundColor: '', borderWidth: 0 },
                    ]}
                    onPress={apply_remove_from_arr}
                >
                    <Icon
                        name="delete-outline"
                        size={35}
                        color="red"
                        width="50"
                        height="50"
                    />
                </Pressable>
                <Task28_ItemComponent
                    path={item}
                    idx={index}
                />
            </View>
        );
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
        const idx = parseInt(text.trim());

        if (!is_input_valid(idx))
            setText('');
        else
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

    function remove_from_arr(idx) {
        function all_except(_, i) {
            return idx !== i;
        }
        setArr(arr.filter(all_except));
    }

    function add_duplicate_to_right(idx) {
        let new_arr = []
            .concat(arr.slice(0, idx))
            .concat(arr[idx])
            .concat(arr.slice(idx));
        setArr(new_arr);
    }

    const popup_component =
        <Task29_PopUpPrompt
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
    icon: {
        position: 'absolute',
        right: 28,
        top: 42,
    },
    button: {
        width: 200,
        height: 40,
    },
    center: {
        display: 'grid',
        placeContent: 'center',
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
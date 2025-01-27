import { useState } from "react";
import { Image, StyleSheet, Text, Alert, Pressable, AppState } from "react-native";

export function Task28_ItemComponent(props) {
    const [hovered, setHovered] = useState(false);
    const styles = StyleSheet.create({
        img_container: {
            width: 400,
            height: 400,
            margin: 16,
            borderRadius: 10,
            borderColor: '#a200e2',
            borderWidth: 5,
            overflow: "hidden",
            backgroundColor: "#ff7fff25",
            alignItems: "center"
        },
        img_style: {
            width: 400,
            height: 350,
            resizeMode: "contain",
        },
        hover: {
            backgroundColor: "#ffeeff33",
        },
        text_style: {
            margin: 5,
            textAlign: "center",
            fontSize: 16,
            color: "white",
        },
    });


    function on_press() {
        if (AppState.currentState == 'active')
            Alert.alert(
                `You have selected image: ${props.idx}`,
                "",
                [
                    {
                        text: "Ok",
                        isPreferred: true,
                    },
                ]);
    }

    function on_hover_in() {
        setHovered(true);
    }

    function on_hover_out() {
        setHovered(false);
    }

    return (
        <Pressable
            onPress={on_press}
            onHoverIn={on_hover_in}
            onHoverOut={on_hover_out}
            onPressIn={on_hover_in}
            onPressOut={on_hover_out}
            style={[styles.img_container, hovered && styles.hover]}
        >
            <Image
                style={styles.img_style}
                source={props.path} />
            <Text style={styles.text_style}>Image #{props.idx}</Text>
        </Pressable>
    )
}
import { useState } from "react";
import { Alert, Button, Image, SafeAreaView, ScrollView } from "react-native";

export function Task27() {
    const [img, setImg] = useState(null);

    const styles = {
        small_image: {
            width: 100,
            height: 100,
        },
        mediam_image: {
            width: 200,
            height: 200,
        },
        large_image: {
            width: 300,
            height: 300,
        }
    };

    const img_list = [
        <Image
            style={styles.small_image}
            alt="Capybara Staring!"
            source={
                require('../Images/Task27/0.png')
            } />,
        <Image
            style={styles.mediam_image}
            source={require('../Images/Task27/3.png')}
        />,
        <Image
            style={styles.large_image}
            src={'https://img.freepik.com/premium-photo/capybara-close-up-portrait-fun-animal-looking-into-camera-capybara-nose-wide-angle-lens_162695-15468.jpg'}
        />
    ]

    function first_image() {
        setImg(img_list[0]);
    }

    function second_image() {
        setImg(img_list[1]);
    }

    function third_image() {
        setImg(img_list[2]);
    }

    function no_image() {
        setImg(null);
    }

    function on_button_press() {
        Alert.alert(
            'Choose an image',
            'Choose one of these three images to show.',
            [
                {
                    text: '1',
                    onPress: first_image,
                },
                {
                    text: '2',
                    onPress: second_image,
                },
                {
                    text: '3',
                    onPress: third_image,
                },
            ],
        )
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <Button title="Choose" onPress={on_button_press}></Button>
                <Button title="Clear" onPress={no_image}></Button>
                {img}
            </ScrollView>
        </SafeAreaView>
    );
}
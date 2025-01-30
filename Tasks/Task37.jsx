import { useCallback, useState } from "react";
import { RefreshControl, ScrollView, Text, View } from "react-native";


export function Task37() {
    function generateRandomWord(length) {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    function generateNewArray() {
        let array = [];
        for (let i = 0; i < 100; i++) {
            array.push(generateRandomWord(Math.random() * 7 % 29 + 3));
        }
        return array;
    }

    function handleRefreshing() {
        setRefreshing(true);
        setArr(generateNewArray());
        setTimeout(() => { }, 1000);
        setRefreshing(false);
    }

    function handleMapping(e, i) {
        return <Text
            key={i}
            style={{
                color: 'white',
                backgroundColor: '#444444',
                paddingHorizontal: 30,
                paddingVertical: 5,
            }}>
            {e}
        </Text>;
    }

    const [arr, setArr] = useState(generateNewArray());
    const [refreshing, setRefreshing] = useState(false);
    const on_refresh = useCallback(handleRefreshing, []);
    const refreshController = (<RefreshControl
        refreshing={refreshing}
        onRefresh={on_refresh}
    />);

    return (
        <View
            style={{
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
                alignSelf: "auto",
                margin: 20,

            }}
        >
            <ScrollView
                refreshControl={refreshController}
                style={{
                    alignSelf: 'center',
                    width: 250,
                    height: 500,
                    borderRadius: 16,
                }}
            >
                {arr.map(handleMapping)}
            </ScrollView>
        </View>
    );
}
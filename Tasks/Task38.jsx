import { View } from "react-native";
import { Task38_ComponentTwo } from "../Components/Task38_ComponentTwo";
import { useState } from "react";
import { TextContext } from "../Components/Task38_TextContext";

export function Task38() {
    const [text, setText] = useState();
    return (
        <TextContext.Provider value={{ text, setText }}>
            <View>
                <Task38_ComponentTwo />
                <Task38_ComponentTwo />
                <Task38_ComponentTwo />
                <Task38_ComponentTwo />
            </View>
        </TextContext.Provider>
    )
}
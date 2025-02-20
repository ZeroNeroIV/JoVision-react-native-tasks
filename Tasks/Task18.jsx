import {
    SafeAreaView,
    Text
} from "react-native";
import { useState } from "react";
import { Task18_Component } from "../Components/Task18_Component";

export function Task18() {
    const [loader, setLoader] = useState(true);

    function handleTimeout() {
        setLoader(false);
    }

    setTimeout(handleTimeout, 5000);

    return <SafeAreaView style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }}>
        {(loader) ?
            <Task18_Component />
            :
            <Text>Alameen Sabbah</Text>
        }
    </SafeAreaView>
        ;
}
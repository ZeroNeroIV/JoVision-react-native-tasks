import { useEffect } from "react";
import { Text } from "react-native";

export function Task21_MyFunctionPage() {
    const styles = {
        textStyle: {
            fontSize: 20,
            color: "green",
            textAlign: "center",
        }
    }

    function when_component_triggered() {
        when_component_mounted();
        return when_component_unmounted;
    }

    function when_component_mounted() {
        console.log("Task21's MyFunctionPage loaded!");
    }

    function when_component_unmounted() {
        console.log("Task21's MyFunctionPage unloaded!");
    }

    useEffect(when_component_triggered, [Task21_MyFunctionPage]);

    return (
        <Text style={styles.textStyle}>
            Task21's MyFunctionPage
        </Text>
    );
}
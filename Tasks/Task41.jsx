import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Task41_ScreenOne } from "../Components/Task41_ScreenOne";
import { Task41_ScreenTwo } from "../Components/Task41_ScreenTwo";
import { Task41_ScreenThree } from "../Components/Task41_ScreenThree";
import { Task41_ScreenFour } from "../Components/Task41_ScreenFour";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const screens = {
    screenOne: Task41_ScreenOne,
    screenTwo: Task41_ScreenTwo,
    screenThree: Task41_ScreenThree,
    screenFour: Task41_ScreenFour,
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20,
    },
});

export function Task41() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Screen 1"
            >
                <Tab.Screen
                    name="Screen 1"
                    component={screens.screenOne}
                    options={{
                        style: styles.screen,
                    }}
                />
                <Tab.Screen
                    name="Screen 2"
                    component={screens.screenTwo}
                    options={{
                        style: styles.screen,
                    }}
                />
                <Tab.Screen
                    name="Screen 3"
                    component={screens.screenThree}
                    options={{
                        style: styles.screen,
                    }}
                />
                <Tab.Screen
                    name="Screen 4"
                    component={screens.screenFour}
                    options={{
                        style: styles.screen,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
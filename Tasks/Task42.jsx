import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Task42_ScreenOne } from "../Components/Task42_ScreenOne";
import { Task42_ScreenTwo } from "../Components/Task42_ScreenTwo";
import { Task42_ScreenThree } from "../Components/Task42_ScreenThree";
import { Task42_ScreenFour } from "../Components/Task42_ScreenFour";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const screens = {
    screenOne: Task42_ScreenOne,
    screenTwo: Task42_ScreenTwo,
    screenThree: Task42_ScreenThree,
    screenFour: Task42_ScreenFour,
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20,
    },
});

export function Task42() {
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
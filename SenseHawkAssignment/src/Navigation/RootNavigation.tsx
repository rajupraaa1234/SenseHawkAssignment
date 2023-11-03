import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../Screens/Login/LoginScreen";

const RootNavigation = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="LoginScreen"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;


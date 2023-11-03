import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../Screens/Login/LoginScreen";
import { getAsValue } from '@utils';
import HomeScreen from "../Screens/HomeScreen";

const RootNavigation = () => {
    const Stack = createStackNavigator();
    const [isLoggined, setLoggined] = useState(false);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        checkUserSession();
    }, [])

    const checkUserSession = async () => {
        const user = await getAsValue("username");
        setTimeout(() => {
            if (user) {
                setLoggined(true);
            }
            setLoader(false);
        }, 300);
    }
    return (
        !loader ? <NavigationContainer>
            <Stack.Navigator
                initialRouteName={isLoggined ? "HomeScreen" : "LoginScreen"}
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                />
            </Stack.Navigator>
        </NavigationContainer> :
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <ActivityIndicator size="large" />
                <Text>Cheking for user session </Text>
            </View>
    )
}

export default RootNavigation;


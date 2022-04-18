import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import react from "react";
import {} from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import FirstPage from "../pages/FirstPage";
import WhatAreVolcanoes from "../pages/WhatAreVolcaones";
import SubductionZones from "../pages/SubductionZones";
import FunFacts from "../pages/FunFacts";
import FinalPage from "../pages/FinalPage";


const Stack = createNativeStackNavigator();

function AppStack() {
    return(
        <SafeAreaProvider>
            <NavigationContainer
            theme={{
                colors: {
                    background: 'black'
                }
            }}
            >
                <Stack.Navigator
                screenOptions={{headerShown: false}}
                >
                    <Stack.Screen
                    name = "FirstPage"
                    component={FirstPage}
                    />

                    <Stack.Screen
                    name = "WhatAreVolcanoes"
                    component={WhatAreVolcanoes}
                    />

                    <Stack.Screen
                    name = "SubductionZones"
                    component= {SubductionZones}
                    />

                    <Stack.Screen
                    name = "FunFacts"
                    component={FunFacts}
                    />

                    <Stack.Screen
                    name = "FinalPage"
                    component={FinalPage}
                    />
                </Stack.Navigator>
                

            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default AppStack;
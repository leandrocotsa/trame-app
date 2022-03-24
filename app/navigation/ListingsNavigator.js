import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListingScreen from '../screens/ListingScreen';
import ListingsScreen from '../screens/ListingsScreen';
import MainScreen from '../screens/MainScreen';
import colors from '../config/colors';
import ViewImageScreen from '../screens/ViewImageScreen';

export default function ListingsNavigator() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
        >
            <Stack.Group
            
            screenOptions={({ route }) => ({
                presentation: "modal",
                
                headerTintColor: "white",
                headerBackTitle: ' ',
                headerTitle: ' ',
                headerTransparent: true,
                tabBarActiveTintColor: colors.darkGrey,
                tabBarInactiveTintColor: 'gray'
            })}
            >
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Listing" component={ListingScreen} />
                <Stack.Screen name="ViewImage" component={ViewImageScreen} />
            </Stack.Group>

            <Stack.Group
            screenOptions={({ route }) => ({
                presentation: "card",
                headerTintColor: "grey",
                headerBackTitle: ' ',
                headerTitle: ' ',
                headerTransparent: true,
                tabBarActiveTintColor: colors.darkGrey,
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: { backgroundColor: colors.lightGrey },
            })}
            
            >
                <Stack.Screen name="Listings" component={ListingsScreen} />
                
            </Stack.Group>
        </Stack.Navigator>

    )
}
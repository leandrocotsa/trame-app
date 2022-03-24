import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabActions } from '@react-navigation/native'
import ListingsScreen from '../screens/ListingsScreen'
import MainScreen from '../screens/MainScreen'
import MessagesScreen from '../screens/MessagesScreen'
import colors from '../config/colors'
import ListingsNavigator from './ListingsNavigator'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function AppNavigator() {

    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: colors.darkGrey,
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: colors.lightGrey,
                    shadowColor: "black",
                    shadowOffset: { width: 0, height: -2 },
                    shadowOpacity: 0.1,
                    borderTopWidth: 0
                },

            })}
        >
            <Tab.Screen
                name="Sell"
                component={MainScreen}
                options={({ navigation }) => ({

                    tabBarButton: () => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Messages")}
                            >
                                <View

                                    style={styles.sell_button}
                                >
                                    <FontAwesome5 name="shopping-bag" size={30} color="grey" />
                                </View>
                            </TouchableOpacity>
                        )
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        return <FontAwesome5 name="shopping-bag" size={size} color={color} />
                    }

                })}

            />
            <Tab.Screen
                name="MainScreen"
                component={ListingsNavigator}
                options={
                    {
                        tabBarIcon: ({ focused, color, size }) => {
                            return <FontAwesome5 name="home" size={size} color={color} />;
                        }
                    }
                }
            />
            <Tab.Screen
                name="Gallery"
                component={MainScreen}
                options={
                    {
                        tabBarIcon: ({ focused, color, size }) => {
                            return <FontAwesome5 name="gamepad" size={size} color={color} />;
                        }
                    }
                }
            />
            <Tab.Screen
                name="Messages"
                component={MessagesScreen}
                options={
                    {
                        tabBarBadge: 3,
                        tabBarIcon: ({ focused, color, size }) => {
                            return <FontAwesome5 name="comments-dollar" size={size} color={color} />;
                        }
                    }
                }

            />
            <Tab.Screen
                name="Profile"
                component={MainScreen}
                options={
                    {
                        tabBarIcon: ({ focused, color, size }) => {
                            return <FontAwesome5 name="user-alt" size={size} color={color} />;
                        }
                    }
                }
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    sell_button: {
        width: 65,
        height: 65,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 60,
        backgroundColor: colors.lighterGrey,
        bottom: 25,
        left: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 15,
        marginRight: 10

    }
})
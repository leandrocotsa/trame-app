import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import ListingsList from '../components/listings/ListingsList'
import listings from '../dummy-data/listings'
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import colors from '../config/colors';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ListingsScreen({ route }) {
    const search = route.params;

    const [text, onChangeText] = React.useState(search);

    

    return (

        <Screen style={styles.container}>
            <View style={styles.search_bar}>
                <TextInput
                    style={styles.search_bar_input}
                    onChangeText={onChangeText}
                    placeholder="What are you looking for?"
                    placeholderTextColor='grey'
                    value={text}
                    clearButtonMode="always"

                />
            </View>

            <View style={styles.listings_container}>
                <View style={styles.listings_header}>
                    <View style={styles.listings_filters}>
                        <View style={styles.platform_container}>
                            <AppText style={styles.header_text}>Platform:</AppText>
                            <View
                                style={styles.platform}
                            />
                        </View>
                        <View style={styles.platform_container}>
                            <AppText style={styles.header_text}>Type:</AppText>
                            <View
                                style={styles.platform}
                            />
                        </View>


                        <MaterialCommunityIcons name="swap-vertical" size={24} color="white" />
                    </View>

                    <AppText style={styles.header_text}>Showing 292.245 results</AppText>

                </View>

                <ListingsList listings={listings} />
            </View>

        </Screen>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkGrey

    },
    listings_header: {
        marginBottom: 15
    },
    listings_container: {
        padding: 15,
        flex: 1
    },
    search_bar: {
        backgroundColor: colors.lightGrey,
        height: 50,
        margin: 10,
        paddingLeft: 20,
        marginLeft: 30,
        borderRadius: 15,
        
    },
    search_bar_input: {
        
        fontFamily: "Outfit_400Regular",
        marginTop: 16,
        color: "white"
    },
    most_popular: {

        height: 100,
        flexDirection: "row"

    },
    most_popular_item: {
        backgroundColor: 'blue',
        height: 100,
        width: 150,
        marginRight: 15,
        borderRadius: 15

    },
    most_popular_first_item: {
        marginLeft: 15
    },

    header_text: {
        fontSize: 14,

        color: "white"

    },
    most_popular_header: {
        padding: 15,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    listings_filters: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },
    platform: {
        marginLeft: 10,
        backgroundColor: colors.lightGrey,
        width: 100,
        borderRadius: 10,
    },
    platform_container: {
        flexDirection: "row"
    }
});



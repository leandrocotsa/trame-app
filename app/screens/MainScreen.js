import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput } from 'react-native';



import colors from "../config/colors";
import AppText from "../components/AppText";
import ListingsList from "../components/listings/ListingsList";
import Screen from "../components/Screen";




const listings = [
    {
        id: 1,
        title: "Mario Sunshine for the GameCube",
        img: "https://ireland.apollo.olxcdn.com/v1/files/mq6y3xlh5fip1-PT/image;s=1000x700",
        price: 22
    },
    {
        id: 2,
        title: "Mario Sunshine for the GameCube",
        img: "https://ireland.apollo.olxcdn.com/v1/files/mq6y3xlh5fip1-PT/image;s=1000x700",
        price: 22
    },
    {
        id: 3,
        title: "Mario Sunshine for the GameCube",
        img: "https://ireland.apollo.olxcdn.com/v1/files/mq6y3xlh5fip1-PT/image;s=1000x700",
        price: 22
    },
    {
        id: 4,
        title: "Mario Sunshine for the GameCube",
        img: "https://ireland.apollo.olxcdn.com/v1/files/mq6y3xlh5fip1-PT/image;s=1000x700",
        price: 22
    },
    {
        id: 5,
        title: "Mario Sunshine for the GameCube",
        img: "https://ireland.apollo.olxcdn.com/v1/files/mq6y3xlh5fip1-PT/image;s=1000x700",
        price: 22
    },
    {
        id: 6,
        title: "Mario Sunshine for the GameCube",
        img: "https://ireland.apollo.olxcdn.com/v1/files/mq6y3xlh5fip1-PT/image;s=1000x700",
        price: 22
    },
    {
        id: 7,
        title: "Mario Sunshine for the GameCube",
        img: "https://ireland.apollo.olxcdn.com/v1/files/mq6y3xlh5fip1-PT/image;s=1000x700",
        price: 22
    },
    {
        id: 8,
        title: "Mario Sunshine for the GameCube",
        img: "https://ireland.apollo.olxcdn.com/v1/files/mq6y3xlh5fip1-PT/image;s=1000x700",
        price: 22
    }

];




export default function MainScreen(props) {

    const [text, onChangeText] = React.useState("");





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

            <View>
                <View style={styles.most_popular_header}>
                    <AppText style={styles.header_text}>Most popular platforms</AppText>
                    <AppText style={styles.most_popular_see_all}>See all</AppText>
                </View>

                <View style={styles.most_popular}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        <View style={[styles.most_popular_item, styles.most_popular_first_item, { backgroundColor: "#6A5FBB" }]}>

                        </View>

                        <View style={[styles.most_popular_item, { backgroundColor: "#E60012" }]}>

                        </View>
                        <View style={[styles.most_popular_item, { backgroundColor: "#003791" }]}>

                        </View>
                    </ScrollView>
                </View>

            </View>

            <View style={styles.listings_container}>
                <View style={styles.listings_header}>
                    <AppText style={styles.header_text}>New entries</AppText>

                </View>

                <ListingsList listings={listings} />
            </View>

            <StatusBar style="auto" />
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
        borderRadius: 15,
        color: 'white'
    },
    search_bar_input: {
        marginTop: 16
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
        fontSize: 18,

        color: "white"

    },
    most_popular_header: {
        padding: 15,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

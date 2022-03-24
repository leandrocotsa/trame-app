import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Image } from 'react-native';



import colors from "../config/colors";
import AppText from "../components/AppText";
import ListingsList from "../components/listings/ListingsList";
import Screen from "../components/Screen";
import listings from "../dummy-data/listings";
import { useNavigation } from "@react-navigation/native";
import consoleImgs from "../config/consoleImgs";








export default function MainScreen(props) {

    const [text, onChangeText] = React.useState("");

    const navigation = useNavigation();





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
                    onSubmitEditing={() => navigation.navigate('Listings', text)}
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
                            <Image
                                style={styles.most_popular_logo}
                                source={consoleImgs["gamecube"]}
                            />
                        </View>

                        <View style={[styles.most_popular_item, { backgroundColor: "#E60012" }]}>
                            <Image
                                style={styles.most_popular_logo}
                                source={consoleImgs["switch"]}
                            />
                        </View>
                        <View style={[styles.most_popular_item, { backgroundColor: "#4365A2" }]}>
                        <Image
                                style={styles.most_popular_logo}
                                source={consoleImgs["dreamcast"]}
                            />
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
        paddingRight: 10,
        borderRadius: 15,
        color: 'white',
        justifyContent: "center"
    },
    search_bar_input: {
        fontFamily: "Outfit_400Regular",
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
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"

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
    },
    most_popular_logo: {
        height: 50,
        width: 50,

    }
});

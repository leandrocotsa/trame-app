import { StyleSheet, View, Text, Image, TouchableOpacity, Button, Pressable, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { useNavigation } from '@react-navigation/native';
import AppText from '../components/AppText';
import { AntDesign } from '@expo/vector-icons';
import consoleImgs from '../config/consoleImgs';
import console_colors from '../dummy-data/console_colors';

export default function ListingScreen({ route }) {
    const [text, onChangeText] = React.useState("");
    const navigation = useNavigation();

    const listing = route.params;


    return (
        <KeyboardAvoidingView
            style={[styles.main_container, { backgroundColor: console_colors.find(element => element.name === listing.platform).color }]}
            behavior="height"
        >


            <TouchableOpacity onPress={() => navigation.navigate("ViewImage", listing)}>
                <Image
                    style={styles.listing_page_image}
                    source={{
                        uri: listing.img,
                    }}
                />
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <View style={styles.game_platform}>
                        <Pressable style={styles.view_game_button} >
                            <AppText style={styles.view_game_text}>View game</AppText>
                        </Pressable>
                        <Pressable style={styles.view_game_button} >
                            <Image
                                style={styles.platform_logo}
                                source={consoleImgs[listing.platform]}
                            />
                        </Pressable>
                    </View>

                    <AppText style={styles.title}>{listing.title}</AppText>
                    <AppText style={styles.price}>{listing.price}€</AppText>
                    <AppText style={styles.description}>{listing.description}</AppText>
                    <View style={styles.seller_section}>
                        <AppText style={styles.price}>Seller</AppText>
                        <View style={styles.seller_info}>
                            <Image
                                style={styles.seller_image}
                                source={{
                                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Hideo_Kojima_-_Tokyo_Game_Show_2011_%281%29_%28cropped%29.jpg/640px-Hideo_Kojima_-_Tokyo_Game_Show_2011_%281%29_%28cropped%29.jpg",
                                }}
                            />
                            <View style={styles.seller_info_container}>
                                <AppText style={styles.seller_name}>Hideo Kojima</AppText>
                                <AppText style={styles.seller_location}>Tokyo, Japan</AppText>
                            </View>
                            <View style={styles.seller_reviews}>
                                <AppText style={styles.seller_name}>23 reviews</AppText>
                                <View style={styles.seller_reviews_stars}>
                                    <AntDesign name="star" size={14} color="white" />
                                    <AntDesign name="star" size={14} color="white" />
                                    <AntDesign name="staro" size={14} color="white" />
                                    <AntDesign name="staro" size={14} color="white" />
                                    <AntDesign name="staro" size={14} color="white" />

                                </View>

                            </View>

                        </View>
                    </View>
                    <View style={styles.seller_section}>
                        <AppText style={styles.price}>Contact the seller</AppText>
                        <TextInput
                            style={styles.message_input}
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={onChangeText}
                            placeholder="Write the message here"
                            placeholderTextColor='#CCCCCC'
                            value={text}
                        />
                    </View>
                </View>
            </ScrollView>

        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: colors.darkGrey
    },
    listing_page_image: {
        width: "100%",
        height: 250
    },
    content: {
        padding: 15
    },
    title: {
        fontFamily: "Outfit_600SemiBold",
        fontSize: 25,
        marginTop: 10,
        width: "80%"
    },
    price: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20
    },
    description: {
        fontSize: 15,
        lineHeight: 20,
        textAlign: "justify"
    },
    seller_section: {
        marginTop: 10
    },
    message_input: {
        fontFamily: "Outfit_400Regular",
        backgroundColor: 'rgba(255, 255, 255, 0.1)',

        height: 100,
        color: "white",
        padding: 10,
        borderRadius: 10,
        marginBottom: 50
    },
    seller_image: {
        height: 60,
        width: 60,
        borderRadius: 40
    },
    seller_info: {
        flexDirection: "row",
        alignContent: "center"
    },
    seller_name: {
        fontSize: 16,
        marginBottom: 2
    },
    seller_location: {
        fontSize: 12,
        color: "#D0D0D0"
    },
    seller_info_container: {
        marginLeft: 10,
        justifyContent: "center"

    },
    seller_reviews: {
        justifyContent: "center",
        marginLeft: "auto"
    },
    seller_reviews_stars: {
        flexDirection: "row"
    },
    platform_logo: {
        height: 50,
        width: 50,
        position: "absolute",
        right: 0

    },
    game_platform: {


    }
})
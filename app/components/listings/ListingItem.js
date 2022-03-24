import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import AppText from '../AppText'
import colors from '../../config/colors';
import { useNavigation } from '@react-navigation/native';
import console_colors from '../../dummy-data/console_colors';
import consoleImgs from '../../config/consoleImgs';
import { Ionicons } from '@expo/vector-icons';

export default function ListingItem({ item }) {
    const navigation = useNavigation();


    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Listing', item)}>


            <View key={item.id} style={styles.listings_item} >
                <Image
                    style={styles.listing_image}
                    source={{
                        uri: item.img,
                    }}
                />
                <View style={styles.listing_info}>
                    <View style={styles.listing_info_header}>
                        <View style={[styles.listing_platform_circle, { backgroundColor: console_colors.find(element => element.name === item.platform).color }]}>
                            <Image
                                style={styles.platform_logo}
                                source={consoleImgs[item.platform]}
                            />
                            { item.type === "game" 
                            ? 
                            <Ionicons  name="disc-outline" size={15} color="grey" style={styles.listing_type} />
                            : 
                            <Ionicons  name="md-game-controller-outline" size={15} color="grey" style={styles.listing_type} />
                            } 

                           


                        </View>
                        <AppText style={styles.listing_info_title}>{item.title}</AppText>
                    </View>
                    <View style={styles.listing_info_footer}>
                        <AppText style={styles.listing_info_timestamp}>2 minutes ago</AppText>
                        <AppText style={styles.listing_info_price}>{item.price}€</AppText>
                    </View>

                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({


    listings_item: {
        height: 200,
        width: "48%",
        marginBottom: 15,
        borderRadius: 15,
        backgroundColor: colors.lightGrey,
        overflow: "hidden"
    },
    listing_image: {
        width: "100%",
        height: 115
    },
    listing_info: {
        width: "100%"
    },
    listing_info_header: {
        flexDirection: "row",
        paddingTop: 7
    },
    listing_platform_circle: {
        backgroundColor: colors.lightGrey,
        borderRadius: 100,
        height: 40,
        width: 40,

        bottom: 25,
        left: 5,
        marginRight: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 15,
        justifyContent: "center"
    },
    listing_info_title: {
        color: "white",
        width: "70%",
        fontSize: 14,
        fontWeight: "bold"
    },

    listing_info_footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 12,
        paddingRight: 12
    },
    listing_info_timestamp: {
        color: "grey",
        fontSize: 9,
        paddingTop: 10
    },
    listing_info_price: {

        fontSize: 22,
        color: "white"
    },
    platform_logo: {
        height: 22,
        width: 22,
        alignSelf: "center"
    },
    listing_type:{
        position: "absolute",
        top: 47,
        left: 12
    }
});
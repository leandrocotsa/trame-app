import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import AppText from '../AppText'
import colors from '../../config/colors';

export default function ListingItem({item}) {
    return (
        <View key={item.id} style={styles.listings_item} >
            <Image
                style={styles.listing_image}
                source={{
                    uri: item.img,
                }}
            />
            <View style={styles.listing_info}>
                <View style={styles.listing_info_header}>
                    <View style={styles.listing_platform_circle}></View>
                    <AppText style={styles.listing_info_title}>{item.title}</AppText>
                </View>
                <View style={styles.listing_info_footer}>
                    <AppText style={styles.listing_info_timestamp}>2 minutes ago</AppText>
                    <AppText style={styles.listing_info_price}>{item.price}€</AppText>
                </View>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
   

    listings_item: {
        height: 190,
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
        elevation: 15
    },
    listing_info_title: {
        color: "white",
        width: "70%",
        fontSize: 11,
        fontWeight: "bold"
    },

    listing_info_footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 12,
        paddingRight: 12
    },
    listing_info_timestamp: {
        color: "white",
        fontSize: 7,
        paddingTop: 10
    },
    listing_info_price: {

        fontSize: 18,
        color: "white"
    }
});
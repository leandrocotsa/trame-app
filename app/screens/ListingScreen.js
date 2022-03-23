import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'

export default function ListingScreen(props) {
    return (
        <View style={styles.main_container}>
     

            <Image
                style={styles.listing_page_image}
                source={{
                    uri: "https://ireland.apollo.olxcdn.com/v1/files/mq6y3xlh5fip1-PT/image;s=1000x700",
                }}
            />
            <Text>ListingScreen</Text>
        </View>
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
    }
})
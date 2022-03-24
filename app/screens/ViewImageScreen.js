import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import { FontAwesome5 } from '@expo/vector-icons';

export default function ViewImageScreen({ route }) {

    const listing = route.params;
    
    return (
        <View style={styles.container}>
           
            <Image
                resizeMode="contain"
                style={styles.image}
                source={{
                    uri: listing.img
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1
    },
    image: {
        height: "100%",
        width: "100%"
    },
    close_icon: {
        position: "absolute",
        top: 40,
        right: 20

    }

})
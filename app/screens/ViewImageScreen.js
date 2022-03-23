import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import { FontAwesome5 } from '@expo/vector-icons';

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.close_icon}>
                <FontAwesome5 name="window-close" size={20} color="white" />
            </View>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={{
                    uri: "https://ireland.apollo.olxcdn.com/v1/files/mq6y3xlh5fip1-PT/image;s=1000x700",
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
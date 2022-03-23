import { StyleSheet, View, Text, FlatList,TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import Screen from '../components/Screen'
import AppText from '../components/AppText'
import colors from '../config/colors'


const messages = [
    {
        id: 1,
        title: "Mario Sunshine for the GameCube",
        text: "Hey bitch"
    },
    {
        id: 2,
        title: "Mario Sunshine for the GameCube",
        text: "Hey bitch"
    },
    {
        id: 3,
        title: "Mario Sunshine for the GameCube",
        text: "Hey bitch"
    },
    {
        id: 4,
        title: "Mario Sunshine for the GameCube",
        text: "Hey bitch"
    },
    {
        id: 5,
        title: "Mario Sunshine for the GameCube",
        text: "Hey bitch"
    },
    {
        id: 6,
        title: "Mario Sunshine for the GameCube",
        text: "Hey bitch"
    },
    {
        id: 7,
        title: "Mario Sunshine for the GameCube",
        text: "Hey bitch"
    },
    {
        id: 8,
        title: "Mario Sunshine for the GameCube",
        text: "Hey bitch"
    },
    {
        id: 9,
        title: "Mario Sunshine for the GameCube",
        text: "Hey bitch"
    },
    {
        id: 10,
        title: "Mario Sunshine for the GameCube",
        text: "Hey bitch"
    },
    {
        id: 11,
        title: "Mario Sunshine for the GameCube",
        text: "Hey bitch"
    },
    {
        id: 12,
        title: "Mario Sunshine for the GameCube",
        text: "Hey bitch"
    },
]

export default function MessagesScreen() {

    const [refreshing, setRefreshing] = useState(false);
    return (
        <Screen style={styles.container}>

            <AppText style={styles.title}>Chats</AppText>
            <View style={styles.messages_list}>
                <FlatList
                    data={messages}
                    renderItem={({ item }) => (
                        <TouchableHighlight
                            underlayColor={colors.darkGrey}
                            onPress={() => console.log("clicked message")}
                        >
                            <View style={styles.message_item}>
                                <View>
                                    <View style={styles.message_avatar}></View>
                                </View>
                                <View key={item.id} style={styles.message_content} >
                                    <AppText style={styles.message_title}>{item.title}</AppText>
                                    <AppText style={styles.message_text}>{item.text}</AppText>
                                    <AppText style={styles.time}>12/03</AppText>
                                </View>
                            </View>
                        </TouchableHighlight>
                    )}
                    keyExtractor={message => message.id}
                    ItemSeparatorComponent={() => (
                        <View style={{ width: "100%", height: 1, backgroundColor: colors.darkGrey }} />
                    )}
                    showsVerticalScrollIndicator={false}
                    refreshing={refreshing}
                    onRefresh={() => console.log("refreshed")}
                />
            </View>

        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGrey,
    },
    content: {

    },
    messages_list: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: colors.lightGrey,
        flex: 1
    },
    title: {
        fontSize: 40,
        marginBottom: 20,
        paddingLeft: 15

    },
    message_item: {
        padding: 15,
        height: 80,
        flexDirection: "row",
        width: "100%"
    },
    message_avatar: {
        width: 50,
        height: 50,
        backgroundColor: colors.darkGrey,
        borderRadius: 50,
        marginRight: 15
    },
    message_title: {

        fontFamily: "Outfit_600SemiBold"
    },
    message_content: {
        flexGrow: 1
    },
    message_text: {
        color: colors.secondaryText
    },
    time: {
        fontSize: 10,
        textAlign: "right",
        color: colors.secondaryText
    }
})
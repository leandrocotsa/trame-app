import { StyleSheet, View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import colors from '../../config/colors';
import AppText from '../AppText';
import ListingItem from './ListingItem';

export default function ListingsList(props) {
    let numColumns = 2;
    return (
        <View style={styles.listings}>

            <FlatList
                numColumns={numColumns}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={props.listings}
                renderItem={({ item }) => (
                    <ListingItem item={item}/>
                )}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}


const styles = StyleSheet.create({
   


    listings: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

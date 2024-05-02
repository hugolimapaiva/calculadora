import React from "react";
import { StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    display: {
        flex:1,
        padding:20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6',
        alignItems: 'flex-end'
    }
})



export default props => {
    return (
        <View style = {StyleSheet.display}>
            <Text style = {style.displayValue} numberOfLines={1}>
                {props.value}
            </Text>
        </View>
    )
}
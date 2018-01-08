import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet } from "react-native";

export default class Component6 extends Component {
    render() {
        return (
            <View> 
                <Text>Component 6 </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#f4f4f4",
        marginBottom: 3
    },
    rowText: {
        flex: 1
    }
});
AppRegistry.registerComponent("Component6", () => Component6);
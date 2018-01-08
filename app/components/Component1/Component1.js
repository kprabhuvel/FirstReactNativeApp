import React, { Component } from 'react';
import { AppRegistry, View, Text } from "react-native";

import Component2 from "../Component2/Component2";
import Component3 from "../Component3/Component3";
import Component4 from "../Component4/Component4";
import Component5 from "../Component5/Component5";
import Component6 from "../Component6/Component6";

export default class Component1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Brad",
            showName: true,
            message: this.props.message
        }
    }
    static defaultProps = {
        message: 'Hi There'
    }

    render() {
        let name = this.state.showName ? this.state.name : "No Name";
        return (
            
            <View> 
                <Text>{ this.state.message }</Text>
                <Text>{ name }</Text>
                <Component6 />
                <Component2 />
                <Component3 />
                <Component4 />
                <Component5 />
            </View> 

        );
    }
}
AppRegistry.registerComponent("Component1", () => Component1);
import React from 'react';
import { StyleSheet,Text } from 'react-native';


export default class MainPage extends React.Component {
    render() {
        console.log(this.props.currentPodcast)
        return(
            <Text>{this.props.currentPodcast.title}</Text>
        )
    }
}
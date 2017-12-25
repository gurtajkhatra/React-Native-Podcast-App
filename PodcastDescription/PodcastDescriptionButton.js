import React from 'react';
import { StyleSheet,View,Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import StyleGuide from '../common/styleguide'
import ElevatedView from 'react-native-elevated-view'
export default class PodcastDescriptionButton extends React.Component {
    render() {
        return(
            <TouchableOpacity onPress={()=>this.props.onPress()}>
                <ElevatedView elevation={3} style={[this.props.styles,styles.iconButton]}>
                    <Text style={styles.icon}>{this.props.icon}</Text>
                    <Text style={styles.iconDescription}>{this.props.iconDescription}</Text>
                </ElevatedView>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    iconButton: {
        aspectRatio:1,
        justifyContent:"center",
        alignItems:"center",
        flex:1
    },
    iconDescription: {
        fontFamily:StyleGuide.bodyFont,
        fontSize:12,
    }
})
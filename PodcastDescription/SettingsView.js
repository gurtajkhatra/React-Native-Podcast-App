import React from 'react';
import { StyleSheet,View,Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import StyleGuide from '../common/styleguide'
import Switch from '../common/switch'
import Counter from './counter'

export default class SettingsView extends React.Component {
    render() {
        return(
        <View style={[this.props.style,styles.container]}>
            <View style={[styles.setting]}>
                <Text style={[styles.text]}> Notifications </Text>
                <Switch/>
            </View>
            <View style={[styles.setting]}>
                <Text style={[styles.text]}> New Episodes To Keep </Text>
                <Counter/>
            </View>
            <View style={[styles.setting]}>
                <Text style={[styles.text]}> Download New Episodes </Text>
                <Switch/>
            </View>
        </View>
        )
    }
}

const styles = {
    container: {
        flex:1,
        justifyContent:'space-around'
    },
    setting: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    text: {
        fontFamily:StyleGuide.titleFont,
        fontSize:14,
        color:(250,250,250,0.7)
    }
}
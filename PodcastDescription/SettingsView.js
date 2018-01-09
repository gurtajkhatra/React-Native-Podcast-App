import React from 'react';
import { StyleSheet,View,Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import StyleGuide from '../common/styleguide'
import Switch from '../common/switch'
import Counter from './counter'
import Icon from 'react-native-vector-icons/Ionicons'




export default class SettingsView extends React.Component {
    render() {
        return(
        <View style={[this.props.style,styles.container]}>
            <TouchableOpacity onPress={() => this.props.goBack()}>
                <View style={styles.backbuttonView}>
                    {backIcon}
                </View>
            </TouchableOpacity>
            <View style={styles.settingsView}>
                <Text style={[styles.settingTitleText]}>Settings</Text>
                <View style={[styles.setting]}>
                    <Text style={[styles.text]}>Notifications</Text>
                    <Switch/>
                </View>
                <View style={styles.lineBreak}/>
                <View style={[styles.setting]}>
                    <Text style={[styles.text]}>New Episodes To Keep</Text>
                    <Counter/>
                </View>
                <View style={styles.lineBreak}/>
                <View style={[styles.setting, {paddingBottom:20}]}>
                    <Text style={[styles.text]}>Download New Episodes</Text>
                    <Switch/>
                </View>
            </View>
        </View>
        )
    }
}

const styles = {
    container: {
        flex:1,
        flexDirection:'row'
    },
    backbuttonView: {
        flex:1,
        paddingRight:15,
    },
    settingsView: {
        flex:6,
        justifyContent:'space-between'
    },
    setting: {
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:5,
        paddingTop:5,
    },
    text: {
        fontFamily:StyleGuide.titleFont,
        fontSize:14,
        color:'rgba(0,0,0,0.7)'
    },
    backIcon: {
        fontSize:32
    },
    settingTitleText:{
        fontSize:20,
        color:"rgba(0,0,0,0.7)",
        paddingBottom:20,
    },
    lineBreak: {
        width:"95%",
        alignSelf:'center',
        borderColor:'rgba(122,122,122,0.33)',
        borderWidth:0,
        borderBottomWidth:1
    }
}

const backIcon = (
    <Icon name='ios-arrow-back' style={styles.backIcon}/>
)
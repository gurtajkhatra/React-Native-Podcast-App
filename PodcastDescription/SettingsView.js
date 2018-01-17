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
            <View style={styles.header}>
                <TouchableOpacity style={styles.backbuttonView} onPress={() => this.props.goBack()}>
                    <View>
                        {backIcon}
                    </View>
                </TouchableOpacity>
                <View style={styles.settingsTitleTextView}>
                    <Text style={[styles.settingTitleText]}>Settings</Text>
                </View>
            </View>
            <View style={{flex:4,flexDirection:'row'}}>
                <View style={{flex:1}}/>
                <View style={styles.settingsView}>
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
                    <View style={[styles.setting]}>
                        <Text style={[styles.text]}>Download New Episodes</Text>
                        <Switch/>
                    </View>
                </View>
            </View>
        </View>
        )
    }
}

const styles = {
    container: {
        flex:1,
        flexDirection:'column'
    },
    header: {
        flexDirection:'row',
        flex:1,
        alignItems:"center",
        justifyContent:'flex-start',
    },
    settingsTitleTextView: {
        flex:9,
    },
    settingTitleText:{
        fontSize:24,
        fontFamily:StyleGuide.titleFont,
        color:"rgba(0,0,0,0.75)",
    },
    backbuttonView: {
        flex:1,
    },
    settingsView: {
        flex:9,
        justifyContent:'space-between'
    },
    setting: {
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    text: {
        fontFamily:StyleGuide.titleFont,
        fontSize:14,
        color:'rgba(0,0,0,0.7)'
    },
    backIcon: {
        fontSize:32
    },
    
    lineBreak: {
        width:"100%",
        alignSelf:'center',
        borderColor:'rgba(122,122,122,0.33)',
        borderWidth:0,
        borderBottomWidth:1
    }
}

const backIcon = (
    <Icon name='ios-arrow-back' style={styles.backIcon}/>
)
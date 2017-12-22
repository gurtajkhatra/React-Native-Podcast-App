import Icon from 'react-native-vector-icons/MaterialIcons'
import React from 'react';
import { View,Text,Image,StyleSheet,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'
import { responsiveFontSize } from 'react-native-responsive-dimensions';



export default class PodcastControls extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.scrobbler}>
                </View>
                <View style={styles.controls}>
                    <TouchableOpacity onPress={()=>{this.props.skipBackPressed()}} activeOpacity={0.4}>
                        {backwardIcon}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.props.playPressed()}} activeOpacity={0.4}>
                    {(this.props.isPlaying) ? (pauseIcon):(playIcon)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.props.skipAheadPressed()}} activeOpacity={0.4}>
                    {forwardIcon}
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.moreOptions}>
                </View>
            </View>
        )
    }
}

const styles = {
    container:{
        flex:1
    },
    scrobbler:{
        flex:2,
    },
    controls:{
        flex:2,
        flexDirection:'row',
        justifyContent:'space-around',
        marginRight:15,
        marginLeft:15,
    },
    icons:{
        fontSize:responsiveFontSize(9.64084507),
    }
}

const playIcon = (
    <Icon name="play-arrow" style={[styles.icons,styles.playIcon]}/>
);

const pauseIcon =  (
    <Icon name="pause" style={[styles.icons,styles.pauseIcon]}/>
)
const forwardIcon = (
    <Icon name='forward-30' style={[styles.icons,styles.forwardIcon]}/>
)
const backwardIcon = (
    <Icon name='replay-30' style={[styles.icons,styles.backwardIcon]}/>
)
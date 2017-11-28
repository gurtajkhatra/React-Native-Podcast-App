import Icon from 'react-native-vector-icons/MaterialIcons'
import React from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';
import PropTypes from 'prop-types'
import { responsiveFontSize } from 'react-native-responsive-dimensions';



export default class PodcastControls extends React.Component {
    
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.scrobbler}>
                </View>
                <View style={styles.controls}>
                    {backwardIcon}
                    {playIcon}
                    {forwardIcon}
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
    moreOptions:{
        flex:1,
        backgroundColor:'pink'
    },
    icons:{
        fontSize:responsiveFontSize(9.64084507),
    }
}

const playIcon = (
    <Icon name="play-arrow" style={[styles.icons,styles.playIcon]}/>
);
const forwardIcon = (
    <Icon name='forward-30' style={[styles.icons,styles.forwardIcon]}/>
)
const backwardIcon = (
    <Icon name='replay-30' style={[styles.icons,styles.backwardIcon]}/>
)
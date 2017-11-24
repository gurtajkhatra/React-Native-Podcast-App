import React from 'react';
import {StyleSheet, TouchableOpacity,Image} from 'react-native';

export default class PodcastButton extends React.Component{
    render(){
        return (
        <TouchableOpacity onPress={()=>{this.props.buttonClicked(this.props.pod.key)}} style={styles.touchableArea} activeOpacity={0.4}>
            <Image style={styles.podcastArt} source={{uri:this.props.pod.imgFilePath}}/>
        </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    touchableArea: {
        flex:0.3333
    },
    podcastArt: {
        width:"100%",
        aspectRatio:1,
        marginBottom:10,
        marginRight:5,
        marginLeft:5,
    },

  });
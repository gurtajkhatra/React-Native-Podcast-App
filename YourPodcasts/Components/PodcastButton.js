import React from 'react';
import {StyleSheet, TouchableOpacity,Image} from 'react-native';

export default class PodcastButton extends React.Component{
    goToPodcastDescription = () => {
        
    }
    render(){
        console.log(this.props.pod)
        return (
        <TouchableOpacity style={styles.touchableArea} activeOpacity={0.4}>
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
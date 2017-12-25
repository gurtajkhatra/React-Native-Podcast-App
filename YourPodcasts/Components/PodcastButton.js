import React from 'react';
import {StyleSheet, TouchableOpacity,Image} from 'react-native';
import PropTypes from 'prop-types'

export default class PodcastButton extends React.Component{
    render(){
        return (
        <TouchableOpacity onPress={()=>{this.props.buttonClicked(this.props.pod)}} activeOpacity={0.4}>
            <Image style={this.props.style} source={{uri:this.props.pod.imgFilePath}}/>
        </TouchableOpacity>
        )
    }
}

PodcastButton.propTypes = 
{
    buttonClicked: PropTypes.func.isRequired,
    pod:PropTypes.object.isRequired,
}

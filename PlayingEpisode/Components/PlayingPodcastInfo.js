import React from 'react';
import { View,Text,Image } from 'react-native';
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native';
import StyleGuide from '../../common/styleguide'

export default class PlayingPodcastInfo extends React.Component {
    render() {
        return(
        <View style={this.props.style.container}>
            <Image style={this.props.style.img} source={{uri:this.props.podcastArt}}/>
            <Text style={styles.episodeTitle}> {this.props.episodeTitle}</Text>
            <Text style={styles.podcastTitle}> {this.props.podcastTitle}</Text>
        </View>
        )
    }
}

PlayingPodcastInfo.PropTypes = {
    artFilePath:PropTypes.string,
    episodeTitle:PropTypes.string,
    podcastTitle:PropTypes.string,
}

const styles = StyleSheet.create({
    episodeTitle: {
        fontFamily:StyleGuide.titleFont
    },
    podcastTitle: {
        fontFamily:StyleGuide.bodyFont
    },
})
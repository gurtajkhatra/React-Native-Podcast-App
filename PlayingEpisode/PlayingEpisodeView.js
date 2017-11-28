import React from 'react';
import { StyleSheet,Text } from 'react-native';
import { Row, Grid } from 'react-native-easy-grid'
import PropTypes from 'prop-types'

import PlayingPodcastInfo from './Components/PlayingPodcastInfo'
import PodcastControls from './Components/PodcastControls'
//import TrackPlayer from 'react-native-track-player';
 // TrackPlayer.setupPlayer().then(() => {
        //     // The player is ready to be used
        //     var track = {
        //         id: this.props.currentEpisode.episodeKey,
        //         url: this.props.currentEpisode.audioLink, // Load media from the network
        //         title: this.props.currentEpisode.episodeTitle,
        //         artist: this.props.currentEpisode.podcast,
        //     };
        //     TrackPlayer.add([track])
        //     TrackPlayer.play();
        // });


export default class PlayingEpisodeView extends React.Component {
    
    render(){
        console.log(this.props)
        return(
        <Grid style = {styles.container}>
            <Row style={styles.topBar}>
            </Row>
            <Row style={styles.podcastArtRow}>
                <PlayingPodcastInfo style={styles.img} podcastArt={this.props.currentEpisode.podcast.imgFilePath} 
                episodeTitle={this.props.currentEpisode.episodeTitle} 
                podcastTitle={this.props.currentEpisode.podcast.title}/>
            </Row>
            <Row style={styles.controls}>
                <PodcastControls/>
            </Row>
        </Grid>
        )
    }
}

const styles = {
    container: {
        flex:1
    },
    topBar: {
        flex:1,
    },
    podcastArtRow: {
        flex:6,
        alignItems:'center',
        justifyContent:'space-around',
    },
    img: {
        flex:0.8,
        aspectRatio:1,
        marginBottom:15,
    },
    episodeTitle:{

    },
    podcastTitle: {

    },
    controls: {
        flex:4,
    },
}

PlayingEpisodeView.PropTypes = {
    currentEpisode: PropTypes.object,
    navigator:PropTypes.object
}
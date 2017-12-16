import React from 'react';
import { StyleSheet,Text } from 'react-native';
import { Row, Grid } from 'react-native-easy-grid'
import PropTypes from 'prop-types'

import PlayingPodcastInfo from './Components/PlayingPodcastInfo'
import PodcastControls from './Components/PodcastControls'


export default class PlayingEpisodeView extends React.Component {
    constructor(props) {
        super(props)
        if (this.props.audioPlayer === undefined || this.props.audioPlayer === {}) {
            this.props.createPlayer(this.props.currentEpisode.audioLink)
        }
    }

    playPressed() {
        if (this.props.isPlaying) {
            this.props.player.pause()
        }
        else {
            this.props.player.play()
        }
        this.props.togglePlaying(this.props.isPlaying)
    }

    render(){
        return(
        <Grid style = {styles.container}>
            <Row style={styles.topBar}>
            </Row>
            <Row style={styles.podcastArtRow}>
                <PlayingPodcastInfo style={styles.podcastArt} podcastArt={this.props.currentEpisode.podcast.imgFilePath} 
                episodeTitle={this.props.currentEpisode.episodeTitle} 
                podcastTitle={this.props.currentEpisode.podcast.title}/>
            </Row>
            <Row style={styles.controls}>
                <PodcastControls playPressed={()=>{this.playPressed()}} isPlaying={this.props.isPlaying}/>
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
    },
    podcastArt: {
        img: {
            flex:0.85,
            aspectRatio:1,
            marginBottom:15,
        },
        container: {
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        },
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
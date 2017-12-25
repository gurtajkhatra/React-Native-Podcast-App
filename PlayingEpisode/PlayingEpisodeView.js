import React from 'react';
import { StyleSheet,Text,NativeModules } from 'react-native';
import { Row, Grid } from 'react-native-easy-grid'
import PropTypes from 'prop-types'
import PlayingPodcastInfo from './Components/PlayingPodcastInfo'
import PodcastControls from './Components/PodcastControls'
import AudioPlayer from '../common/AudioPlayer'

//const RNStreamingKitManager = NativeModules.RNStreamingKitManager;

export default class PlayingEpisodeView extends React.Component {
    constructor(props) {
        super(props)
        this.player = new AudioPlayer(this.props.currentEpisode.audioLink)
        // TrackPlayer.setupPlayer({playBuffer:10}).then(() => {
        //     // The player is ready to be used
        //     if(this.props.currentEpisode.audioLink !== undefined) {
        //         var firstTrack = {
        //             id:this.props.currentEpisode.episodeKey,
        //             url:this.props.currentEpisode.audioLink,
        //             title:this.props.currentEpisode.episodeTitle,
        //             artist:this.props.currentEpisode.podcast.title
        //         }
        //         console.log(firstTrack)
        //     }
        //     TrackPlayer.add([firstTrack])
        //     this.playerReady = true
        // });
    }

    //Starts playing the podast is isPLaying is True
    playAudio() {
        if (this.props.isPlaying) {
            this.player.resume()
            //TrackPlayer.play()
        }
        else {
            this.player.pause()
            //TrackPlayer.pause()
        }
    }

    playPressed() {
        this.props.togglePlaying(this.props.isPlaying)
    }
    skipAheadPressed() {
        this.player.skipAhead()
    }
    skipBackPressed() {
        this.player.skipBack()
    }

    //Only display "current podcast" if there is a selected current podcast
    getCurrentPodcastLayout() {
        if (this.props.currentEpisode.podcast === undefined) {
            return <Row/>
        }
        else {
            return <Row style={styles.podcastArtRow}>
                        <PlayingPodcastInfo style={styles.podcastArt} podcastArt={this.props.currentEpisode.podcast.imgFilePath} 
                        episodeTitle={this.props.currentEpisode.episodeTitle} 
                        podcastTitle={this.props.currentEpisode.podcast.title}/>
                    </Row>
        }
    }

    componentDidUpdate(prevProps,prevState){
        //Check if we have to change podcasts
        if (prevProps.currentEpisode.episodeKey !== this.props.currentEpisode.episodeKey) {
            this.player.changeFile(this.props.currentEpisode.audioLink)
            this.player.play()
            
            // var nextTrack = {
            //     id:this.props.currentEpisode.episodeKey,
            //     url:this.props.currentEpisode.audioLink,
            //     title:"ExampleTitle",//this.props.currentEpisode.episodeTitle,
            //     artist:"ExampleArtist",//this.props.currentEpisode.podcast
            // }
            // TrackPlayer.add([nextTrack]).then(function() {
            //     TrackPlayer.skip(nextTrack.id);
            // })
        }
        this.playAudio()
    }

    render(){
        return(
        <Grid style = {styles.container}>
            <Row style={styles.topBar}>
            </Row>
            {this.getCurrentPodcastLayout()}
            <Row style={styles.controls}>
                <PodcastControls playPressed={()=>{this.playPressed()}} skipAheadPressed={()=>{this.skipAheadPressed()}} skipBackPressed={()=>{this.skipBackPressed()}} isPlaying={this.props.isPlaying}/>
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
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux'
import PodcastDescriptionView from './PodcastDescriptionView'
import {updatePlayingPodcast,togglePlaying,changePlayerAudioPath} from '../actions'

const mapStateToProps = (state, props) => {
    return ({
        currentPodcast: state.selectedPodcast,
        currentEpisode: state.currentEpisode,
        navigator:props.navigation,
    })
}
const mapDispatchToProps = dispatch => 
({
    updatePlayingPodcast(currentPodcast,episodeInfo) {
        dispatch(
            updatePlayingPodcast(currentPodcast,episodeInfo)
        )
      },
    startPlaying() {
        dispatch(
            togglePlaying(false)
        )
    },
    toggledSubscriptionToPodcast(podcast) {
        dispatch(
            toggledSubscriptionToPodcast(podcast)
        )
    }
})	

const Container = connect(mapStateToProps, mapDispatchToProps)(PodcastDescriptionView)	

export default Container;
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux'
import PodcastDescriptionView from './PodcastDescriptionView'

const mapStateToProps = (state, props) => {
    return ({
        currentPodcast: state.podcasts.subscribedPodcasts[state.selectedPodcast],
        navigator:props.navigation,
    })
}
const mapDispatchToProps = dispatch => 
({
})	

const Container = connect(mapStateToProps, mapDispatchToProps)(PodcastDescriptionView)	

export default Container;
import { connect } from 'react-redux'
import React from 'react';
import YourPodcastsView from './Components/YourPodcastsView';
import { View } from 'react-native';
import {updateSelectedPodcast} from '../actions'

const mapStateToProps = (state, props) =>
({
  subbedPods: (state.podcasts.subscribedPodcasts)===undefined ? []:Object.values(state.podcasts.subscribedPodcasts),
  navigator:state.nav,
})


const mapDispatchToProps = dispatch => 
({
  selectPodcast(podcastKey) {
    dispatch(
      updateSelectedPodcast(podcastKey)
    )
  }
})


const Container = connect(mapStateToProps, mapDispatchToProps)(YourPodcastsView)	

export default Container;
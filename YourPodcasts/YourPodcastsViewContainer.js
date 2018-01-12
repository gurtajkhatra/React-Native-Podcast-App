import { connect } from 'react-redux'
import React from 'react';
import YourPodcastsView from './Components/YourPodcastsView';
import { View } from 'react-native';
import {updateSelectedPodcast} from '../store/actions'

const mapStateToProps = (state, props) =>
({
  subbedPods: (state.subscribedPodcasts)===undefined ? []:Object.values(state.subscribedPodcasts),
  navigator:state.nav,
})


const mapDispatchToProps = dispatch => 
({
  selectPodcast(rssLink) {
    dispatch(
      updateSelectedPodcast(rssLink)
    )
  }
})


const Container = connect(mapStateToProps, mapDispatchToProps)(YourPodcastsView)	

export default Container;
import { connect } from 'react-redux'
import React from 'react';
import YourPodcastsView from './Components/YourPodcastsView';
import { View } from 'react-native';

const mapStateToProps = (state, props) => 
({
  subbedPods: (state.podcasts.subscribedPodcasts)===undefined ? []:Object.values(state.podcasts.subscribedPodcasts),
  navigator:props.navigation,
})

const mapDispatchToProps = dispatch => 
({
})


const Container = connect(mapStateToProps, mapDispatchToProps)(YourPodcastsView)	

export default Container;
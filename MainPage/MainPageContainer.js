import React from 'react';
import MainPage from './MainPage';
import { View } from 'react-native';
import { connect } from 'react-redux'
import { addNewPodcast } from '../actions'


const mapStateToProps = (state, props) => 
({
  subbedPods: (state.podcasts.subscribedPodcasts)===undefined ? []:Object.values(state.podcasts.subscribedPodcasts),
  navigator:props.navigation,
})

const mapDispatchToProps = dispatch => 
({
  getPodcastData(rssFeedLink) {
    dispatch(
      addNewPodcast(rssFeedLink)
    )
  },
})	

const Container = connect(mapStateToProps, mapDispatchToProps)(MainPage)	

export default Container;
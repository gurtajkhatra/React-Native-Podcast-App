import React from 'react';
import MainPage from './MainPage';
import { View } from 'react-native';
import { connect } from 'react-redux'
import { updateSelectedPodcast,addNewPodcast } from '../actions'


const mapStateToProps = (state, props) => {
  return ({
    subbedPods: (state.podcasts.subscribedPodcasts)===undefined ? []:Object.values(state.podcasts.subscribedPodcasts),
    navigator:state.nav,
  })
}
const mapDispatchToProps = dispatch => 
({
  getPodcastData(rssFeedLink) {
    dispatch(
      addNewPodcast(rssFeedLink)
    )
  },
  selectPodcast(podcastKey) {
    dispatch(
      updateSelectedPodcast(podcastKey)
    )
  }
})	

const Container = connect(mapStateToProps, mapDispatchToProps)(MainPage)	

export default Container;
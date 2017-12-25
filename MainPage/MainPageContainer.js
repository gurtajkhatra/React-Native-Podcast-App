import React from 'react';
import MainPage from './MainPage';
import { connect } from 'react-redux'
import { updateSelectedPodcast,addNewPodcast } from '../actions'


const mapStateToProps = (state, props) => {
  return ({
    subbedPods: (state.subscribedPodcasts)===undefined ? []:Object.values(state.subscribedPodcasts),
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
  selectPodcast(podcastInfo) {
    dispatch(
      updateSelectedPodcast(podcastInfo)
    )
  }
})	

const Container = connect(mapStateToProps, mapDispatchToProps)(MainPage)	

export default Container;
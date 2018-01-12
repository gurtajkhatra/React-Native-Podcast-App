import React from 'react';
import MainPage from './MainPage';
import { connect } from 'react-redux'
import { updateSelectedPodcast,addNewPodcastFromRssLink, cleanLocalDatabase } from '../store/actions'


const mapStateToProps = (state, props) => {
  return ({
    subscribedPodcasts: (state.subscribedPodcasts)===undefined ? {}:(state.subscribedPodcasts),
    navigator:state.nav,
  })
}
const mapDispatchToProps = dispatch => 
({
  getPodcastData(rssFeedLink) {
    dispatch(
      addNewPodcastFromRssLink(rssFeedLink)
    )
  },
  selectPodcast(rssFeedLink,callback) {
    dispatch(
      updateSelectedPodcast(rssFeedLink,callback)
    )
  },
  cleanUpDatabase() {
    cleanLocalDatabase()
  }
})	

const Container = connect(mapStateToProps, mapDispatchToProps)(MainPage)	

export default Container;
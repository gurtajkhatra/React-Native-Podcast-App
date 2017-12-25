import React from 'react';
import { connect } from 'react-redux';
import PodcastBrowser from './PodcastBrowser'

const mapStateToProps = (state, props) => {
    return ({
    })
  }
  const mapDispatchToProps = dispatch => 
  ({
    // getPodcastData(rssFeedLink) {
    //   dispatch(
    //     addNewPodcast(rssFeedLink)
    //   )
    // },

  })	
  
  const Container = connect(mapStateToProps, mapDispatchToProps)(PodcastBrowser)	
  
  export default Container;
import React from 'react';
import { connect } from 'react-redux';
import PodcastBrowser from './PodcastBrowser'
import {updateSelectedPodcastFromRssLink} from '../store/actions'
const mapStateToProps = (state, props) => {
    return ({
    })
  }
  const mapDispatchToProps = dispatch => 
  ({
    changeSelectedPodcast(podcast,callback) {
      dispatch(
        updateSelectedPodcastFromRssLink(podcast,callback)
      )
    }
    // getPodcastData(rssFeedLink) {
    //   dispatch(
    //     addNewPodcast(rssFeedLink)
    //   )
    // },

  })	
  
  const Container = connect(mapStateToProps, mapDispatchToProps)(PodcastBrowser)	
  
  export default Container;
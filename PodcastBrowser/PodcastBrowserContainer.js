import React from 'react';
import { connect } from 'react-redux';
import PodcastBrowser from './PodcastBrowser'
import {updateSelectedPodcast} from '../store/actions'
const mapStateToProps = (state, props) => {
    return ({
    })
  }
  const mapDispatchToProps = dispatch => 
  ({
    changeSelectedPodcast(rssLink,callback) {
      dispatch(
        updateSelectedPodcast(rssLink,callback)
      )
    }

  })	
  
  const Container = connect(mapStateToProps, mapDispatchToProps)(PodcastBrowser)	
  
  export default Container;
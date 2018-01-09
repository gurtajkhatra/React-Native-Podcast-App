import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux'
import PlayingEpisodeView from './PlayingEpisodeView'
import { togglePlaying } from '../store/actions'

const mapStateToProps = (state, props) => {
    return ({
        currentEpisode:(state.currentEpisode),
        navigator:state.nav,
        isPlaying:state.isPlaying,
    })
  }

	
const mapDispatchToProps = dispatch => 
({
    togglePlaying(playing) {
        dispatch(
            togglePlaying(playing)
        )
    }
})


  const Container = connect(mapStateToProps, mapDispatchToProps)(PlayingEpisodeView)	
  
  export default Container;
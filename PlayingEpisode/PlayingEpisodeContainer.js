import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux'
import PlayingEpisodeView from './PlayingEpisodeView'
import { createNewAudioPlayer,togglePlaying } from '../actions'

const mapStateToProps = (state, props) => {
    console.log("MAP STATE TO PROPS")
    console.log(state)
    return ({
        currentEpisode:(state.currentEpisode),
        navigator:state.nav,
        player:state.audioPlayer,
        isPlaying:state.isPlaying,
    })
  }

	
const mapDispatchToProps = dispatch => 
({
    createPlayer(filePath) {
        console.log("DISPATCHING")
        dispatch(
            createNewAudioPlayer(filePath)
        )
    },
    togglePlaying(playing) {
        dispatch(
            togglePlaying(playing)
        )
    }
})


  const Container = connect(mapStateToProps, mapDispatchToProps)(PlayingEpisodeView)	
  
  export default Container;
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux'
import PlayingEpisodeView from './PlayingEpisodeView'

const mapStateToProps = (state, props) => {
    return ({
        currentEpisode:(state.currentEpisode),
        navigator:state.nav,
    })
  }
  const mapDispatchToProps = dispatch => 
  ({
  })

  const Container = connect(mapStateToProps, mapDispatchToProps)(PlayingEpisodeView)	
  
  export default Container;
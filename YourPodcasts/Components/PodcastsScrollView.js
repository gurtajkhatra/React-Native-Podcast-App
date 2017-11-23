import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import {  Row, Grid } from "react-native-easy-grid";
import { podcasts } from '../../reducers';
import PodcastButton from './PodcastButton'

export default class PodcastsScrollView extends React.Component {
    render() {
        var podcasts = []
        for (var i=0;i<this.props.pods.length;i++){
            podcasts.push(<PodcastButton pod={this.props.pods[i]}/>)//<View key={i} style={styles.podcastArt}/>)
        }
        return(
            <FlatList numColumns={3} contentContainerStyle={styles.flatList} 
            data={podcasts}
            renderItem={({item}) =>item}/>
        );
    }
}

const styles = StyleSheet.create({
    flatList: {
        flexDirection:'column',
    },

  });
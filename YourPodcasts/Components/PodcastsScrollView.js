import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import {  Row, Grid } from "react-native-easy-grid";

export default class PodcastsScrollView extends React.Component {
    render() {
        podcasts = []
        for (var i=0;i<51;i++){
            podcasts.push(<View key={i} style={styles.podcastArt}/>)
        }
        return(
            <ScrollView contentContainerStyle={styles.scrollView}>
                    {podcasts}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    podcastArt: {
        width:"31%",
        aspectRatio:1,
        backgroundColor:'red',
        marginBottom:15,
    },

  });
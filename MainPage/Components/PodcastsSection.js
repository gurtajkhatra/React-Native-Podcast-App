import React from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, Text, View, ScrollView  } from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from '@expo/vector-icons/MaterialIcons'
import TitleRow from './TitleRow'

export default class PodcastsSection extends React.Component {
    render() {
        console.log(this.props)
        return(
            <Grid style={styles.container}>
                <TitleRow title={this.props.title} onTitlePress={this.props.onTitlePress}/>
                <Row style={styles.podcastsRow}>
                    <ScrollView contentContainerStyle={styles.podcastArtRow} horizontal={true} style={styles.scrollView}>
                        <View style={[styles.podcastArt, {backgroundColor:'pink'}]}/>
                        <View style={[styles.podcastArt, {backgroundColor:'grey'}]}/>
                        <View style={[styles.podcastArt, {backgroundColor:'maroon'}]}/>
                        <View style={[styles.podcastArt, {backgroundColor:'cyan'}]}/>
                        <View style={[styles.podcastArt, {backgroundColor:'purple'}]}/>
                    </ScrollView>
                </Row>
            </Grid>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    podcastsRow: {
        flex:3,
    },
    scrollView: {
        flex:1,
    },
    podcastArtRow: {
        alignItems:"flex-start",
    },
    podcastArt: {
        height:"70%",
        aspectRatio:1,
        width:120,
        marginRight:10,
    },

  });
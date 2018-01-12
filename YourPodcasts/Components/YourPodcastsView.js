import React from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, Text, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import YourPodcastsNavBar from './YourPodcastsNavBar'
import PodcastsScrollView from './PodcastsScrollView'
import {updateSelectedPodcast} from '../../store/actions'

export default class YourPodcastsView extends React.Component {
    constructor(props) {
        super(props)
        this.goToPodcastDescription = this.goToPodcastDescription.bind(this)
    }
    goToPodcastDescription(podcastInfo) {
        this.props.selectPodcast(podcastInfo['rssLink'],() => {
            this.props.navigation.navigate("PodcastDescriptionView")
        })
        
    }
    render() {
        return (
            <Grid style={styles.container}>
                <Row style={styles.navBar}>
                    <YourPodcastsNavBar/>
                </Row>
                <Row style={styles.podcasts}>
                    <PodcastsScrollView pods={this.props.subbedPods} buttonClicked={(podcastInfo) => {this.goToPodcastDescription(podcastInfo)}}/>
                </Row>
                <Row style={styles.currentlyPlayingArea}>
                </Row>
            </Grid>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navBar: {
        flex:1,
        paddingLeft:responsiveWidth(4.4875),
        paddingRight:responsiveWidth(4.4875),
    },
    podcasts: {
        flex:8,
        paddingLeft:responsiveWidth(4.4875),
        paddingRight:responsiveWidth(4.4875),
        paddingTop:responsiveWidth(4.4875),
    },
    currentlyPlayingArea: {
        flex:1,
    },
  });
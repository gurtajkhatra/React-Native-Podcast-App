import React from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import YourPodcastsNavBar from './Components/YourPodcastsNavBar'
import PodcastsScrollView from './Components/PodcastsScrollView'


export default class YourPodcastsView extends React.Component {
    render() {
        return (
            <Grid style={styles.container}>
                <Row style={styles.navBar}>
                    <YourPodcastsNavBar/>
                </Row>
                <Row style={styles.podcasts}>
                    <PodcastsScrollView/>
                </Row>
                {/* <Row style={styles.currentlyPlayingArea}>
                </Row> */}
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
    // currentlyPlayingArea: {
    //     flex:1,
    // },
  });
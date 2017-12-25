import React from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Image,StyleSheet, Text, View, FlatList,ScrollView  } from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import TitleRow from './TitleRow'
import PodcastButton from '../../YourPodcasts/Components/PodcastButton'

export default class PodcastsSection extends React.Component {
    render() {
        return(
            <Grid style={styles.container}>
                <TitleRow title={this.props.title} onTitlePress={this.props.onTitlePress}/>
                <Row style={styles.podcastsRow}>
                    <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
                    data={this.props.pods}
                    renderItem={({item}) => {
                        if (item.imgFilePath !== '') {
                            return <PodcastButton style={[styles.podcastArt]} buttonClicked={() => {this.props.onPodcastPress(item)}} pod={item}/>
                        }
                    }
                }
                    />
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
    podcastArt: {
        height:'97%',
        aspectRatio:1,
        marginRight:5,
    }
  });
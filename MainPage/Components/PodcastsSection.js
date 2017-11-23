import React from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Image,StyleSheet, Text, View, FlatList,ScrollView  } from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import TitleRow from './TitleRow'

export default class PodcastsSection extends React.Component {
    render() {
        return(
            <Grid style={styles.container}>
                <TitleRow title={this.props.title} onTitlePress={this.props.onTitlePress}/>
                <Row style={styles.podcastsRow}>
                    <FlatList contentContainerStyle={styles.podcastArtRow} horizontal={true} showsHorizontalScrollIndicator={false} style={styles.flatList}
                    data={this.props.pods}
                    renderItem={({item}) => {
                        if (item.imgFilePath !== '') {
                            return <Image style={[styles.podcastArt]} source={{uri:item.imgFilePath}}/>
                        }
                    }
                }//<View style={[styles.podcastArt, {backgroundColor:'green'}]}/>}
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
    flatList: {
        flex:1,
    },
    podcastArtRow: {
        alignItems:"flex-start",
    },
    podcastArt: {
        height:"90%",
        aspectRatio:1,
        marginRight:10,
    },

  });
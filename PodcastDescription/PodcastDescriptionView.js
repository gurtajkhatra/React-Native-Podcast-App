import React from 'react';
import { StyleSheet,View,Text, TouchableOpacity, FlatList } from 'react-native';
import EpisodeCell from './EpisodeCell'
import PodcastCell from './PodcastCell'

const EPISODE_CELL_HEIGHT = 75
const PODCAST_IMAGE_HEIGHT = 150
export default class PodcastDescriptionView extends React.Component {
    _keyExtractor = (item, index) => index
    
    _onPressItem = (episode) => {
        //Set the episode details in the state
        this.props.updatePlayingPodcast(this.props.currentPodcast,episode)
        this.props.startPlaying()
    };
    
    _renderItem = ({item}) => {
        if ('imgFilePath' in item) {
            const podcastTitle = item.title
            const podcastDescription = item.summary
            const podcastFp = item.imgFilePath
            return <PodcastCell style = {styles.podCell}
                                podcastTitle={podcastTitle} 
                                podcastDescription={podcastDescription} 
                                podcastImgFilePath = {podcastFp}
                                boxHeight = {PODCAST_IMAGE_HEIGHT}/>
        }
        else {
            const episodeTitle = item['itunes:title'][0]
            const episodeDescription = item['itunes:summary'][0]
            return <EpisodeCell style={styles.podCell}
                                onPress={() => {this._onPressItem(item)}} 
                                episodeTitle={episodeTitle}
                                episodeDescription={episodeDescription}
                                boxHeight={EPISODE_CELL_HEIGHT}/>  
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.topBar}>
                </View>
                <View style={styles.scrollView}>
                    <FlatList
                    data={[this.props.currentPodcast].concat(this.props.currentPodcast.episodesArray)}//{this.props.currentPodcast.episodesArray}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    /> 
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex:1
    },
    topBar: {
        flex:1
    },
    scrollView: {
        flex:8
    },
    podCell: {
        marginBottom:10,
        width:"95%",
        alignSelf:"center",
    },
}
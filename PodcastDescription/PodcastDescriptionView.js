import React from 'react';
import { StyleSheet,View,Text, TouchableOpacity, FlatList } from 'react-native';
import EpisodeCell from './EpisodeCell'
import PodcastCell from './PodcastCell'
import PodcastDescriptionButtons from './PodcastDescriptionButtons'
import styleguide from '../common/styleguide';

const EPISODE_CELL_HEIGHT = 75
const PODCAST_IMAGE_HEIGHT = 150
const PODCAST_BUTTON_HEIGHT = 75


export default class PodcastDescriptionView extends React.Component {
    _keyExtractor = (item, index) => index

    _onButtonPress(button) {
        if (button === 'subscribe') {
            console.log("Subscribe")
        }
        else {
            console.log("Pressed")
        }
        
    }
    
    _onEpisodePress = (episode) => {
        //Set the episode details in the state
        this.props.updatePlayingPodcast(this.props.currentPodcast,episode)
        this.props.startPlaying()
    };
    
    _renderItem = ({item}) => {
        //Render the header (Podcast information, buttons, and linebreaks)
        if ('imgFilePath' in item) {
            const podcastTitle = item.title
            const podcastDescription = item.summary
            const podcastFp = item.imgFilePath
            const episodeCount = item.episodesArray.length
            return (
            <View style = {styles.header}>
                <PodcastCell style = {styles.podCell}
                                    podcastTitle={podcastTitle}
                                    podcastDescription={podcastDescription}
                                    episodeCount={episodeCount}
                                    podcastImgFilePath = {podcastFp}
                                    boxHeight = {PODCAST_IMAGE_HEIGHT}/>
                <View style = {styles.lineBreakContainer}>
                    <View style = {styles.lineBreak}/>
                </View>
                <PodcastDescriptionButtons buttonHeight={PODCAST_BUTTON_HEIGHT} onPress={(buttonType) => this._onButtonPress(buttonType)}/>
                <View style = {styles.episodesBreak}>
                    <View style={styles.lineHalfContainer}>
                        <View style={styles.lineHalf}/>
                    </View>
                    <Text style={styles.episodesBreakText}> Episodes </Text>
                    <View style={styles.lineHalfContainer}>
                        <View style={styles.lineHalf}/>
                    </View>
                </View>
            </View>
            )
        }
        else {
            const episodeTitle = item['title'][0]
            const episodeDescription = item['description'][0]
            return <EpisodeCell style={styles.episodeCell}
                                onPress={() => {this._onEpisodePress(item)}} 
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
                    data={[this.props.currentPodcast].concat(this.props.currentPodcast.episodesArray)}
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
        flex:1,
    },
    header: {
        flexDirection:'column',
        justifyContent: "space-between"
    },
    scrollView: {
        flex:8,
    },
    lineBreakContainer: {
        flex:1,
        flexDirection:'row',
        marginBottom:5,
    },
    lineBreak: {
        flex:1,
        borderColor:'rgba(0,0,0,0.2)',
        borderWidth:0,
        borderBottomWidth:1,
        alignSelf:'center',
        marginLeft:15,
        marginRight:15,
        marginBottom:10,
    },
    episodesBreak: {
        flexDirection:"row",
        justifyContent:'center'
    },
    lineHalfContainer: {
        flexDirection:'column',
        flex:1
    },
    lineHalf: {
        flex:0.5,
        borderColor:'rgba(0,0,0,0.2)',
        borderWidth:0,
        borderBottomWidth:1,
        marginLeft:15,
        marginRight:15,
    },
    episodesBreakText: {
        fontFamily: styleguide.bodyFont,
        color:'rgba(0,0,0,0.7)',

    },
    podCell: {
        marginBottom:0,
        width:"100%",
        alignSelf:"center",
    },
    episodeCell: {
        marginBottom:10,
        width:"95%",
        alignSelf:"center",
    }
}
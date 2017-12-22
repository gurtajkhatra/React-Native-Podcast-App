import React from 'react';
import { StyleSheet,Text, TouchableOpacity, FlatList } from 'react-native';
import Modal from 'react-native-modalbox';


export default class PodcastDescriptionView extends React.Component {
    _keyExtractor = (item, index) => index
    
    _onPressItem = (episode) => {
        //Set the episode details in the state
        this.props.updatePlayingPodcast(this.props.currentPodcast,episode)
        this.props.startPlaying()
        //Bring up the "Now Playing" window
        //this.props.navigator.navigate('PlayingEpisodeView')
    };
    
    _renderItem = ({item}) => (
        <TouchableOpacity onPress={() => this._onPressItem(item)} activeOpacity={0.4}>
            <Text style={styles.podName}> {item['itunes:title']} </Text>
        </TouchableOpacity>
    );

    render() {
        return(
            <FlatList
            data={this.props.currentPodcast.episodesArray}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
        )
    }
}

const styles = {
    podName: {
        marginBottom:10,
        marginTop:10,
    },
}
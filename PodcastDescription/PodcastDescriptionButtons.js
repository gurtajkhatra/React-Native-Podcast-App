import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import PodcastDescriptionButton from './PodcastDescriptionButton'


const ICON_SIZE = 26
export default class PodcastDescriptionButtons extends React.Component {
    _onPress() {
        console.log("Pressed")
    }
    render() {
        const subscribeIcon = <Icon name="rss-feed" size={ICON_SIZE} style={styles.subscribeIcon}/>
        const favoriteIcon = <Icon name="favorite-border" size={ICON_SIZE} style={styles.subscribeIcon}/>
        const filterIcon = <Icon name="filter-list" size={ICON_SIZE} style={styles.filterIcon}/>
        const settingsIcon = <Icon name="settings" size={ICON_SIZE} style={styles.settingsIcon}/>
        return(
            <View style={[{height:this.props.buttonHeight},styles.container]}>
                <PodcastDescriptionButton icon={subscribeIcon} iconDescription={"Subscribe"} onPress={() => this._onPress()}/>
                <PodcastDescriptionButton icon={favoriteIcon} iconDescription={"Favorite"} onPress={() => this._onPress()}/>
                <PodcastDescriptionButton icon={filterIcon} iconDescription={"Filter"} onPress={() => this._onPress()}/>
                <PodcastDescriptionButton icon={settingsIcon} iconDescription={"Settings"} onPress={() => this._onPress()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-around",
        paddingBottom:10
    }
})
import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import PodcastDescriptionButton from './PodcastDescriptionButton'
import SettingsView from './SettingsView'

const ICON_SIZE = 26
export default class PodcastDescriptionButtons extends React.Component {
    render() {
        const subscribeIcon = (this.props.isSubscribed) ? 
            (<Icon name="check" size={ICON_SIZE} style={styles.subscribeIcon}/>):
            (<Icon name="rss-feed" size={ICON_SIZE} style={styles.subscribeIcon}/>)
        const subscribeText = (this.props.isSubscribed) ? "Subscribed":"Subscribe"
        const favoriteIcon = <Icon name="favorite-border" size={ICON_SIZE} style={styles.subscribeIcon}/>
        
        const filterIcon = <Icon name="filter-list" size={ICON_SIZE} style={styles.filterIcon}/>
        const settingsIcon = <Icon name="settings" size={ICON_SIZE} style={styles.settingsIcon}/>
        return(
            <View style={[this.props.style,styles.container]}>
                <PodcastDescriptionButton style={styles.button} icon={subscribeIcon} iconDescription={subscribeText} onPress={() => this.props.onPress('subscribe')}/>
                <PodcastDescriptionButton style={styles.button} icon={favoriteIcon} iconDescription={"Favorite"} onPress={() => this.props.onPress("favorite")}/>
                <PodcastDescriptionButton style={styles.button} icon={filterIcon} iconDescription={"Filter"} onPress={() => this.props.onPress("filter")}/>
                <PodcastDescriptionButton style={styles.button} icon={settingsIcon} iconDescription={"Settings"} onPress={() => this.props.onPress("settings")}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-around",
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
    },
    button: {
        width:80,
        height:80
    }
})
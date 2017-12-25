import React from 'react';
import { View,Text,StyleSheet, FlatList } from 'react-native';
import SearchBox from './Components/SearchBox'
import SearchResult from "./Components/SearchResult"
export default class PodcastBrowser extends React.Component {
    constructor(props) {
        super(props)
        this.searchTextChanged = this.searchTextChanged.bind(this)
        this.state = {
            results:[],
        }
    }

    createiTunesLink(searchQuery,results=25) {
        return "https://itunes.apple.com/search?term=" +  encodeURIComponent(searchQuery) + "&media=podcast&attribute=titleTerm&limit="+results
    }
    searchTextChanged(newText) {
        iTunesLink = this.createiTunesLink(newText)
        fetch(iTunesLink).then((response) => {
            return response.json()
        }).then((jsonData) => {
            this.setState((oldState) => {
                return {
                results:jsonData['results']
                }
            })
        })
    }

    _keyExtractor = (item, index) => index
    
    
    _renderItem = ({item}) => {
        return <SearchResult podcastTitle={item.collectionName}/>
    }
    render() {
        return(
        <View style={styles.container}>
            <SearchBox style={styles.searchBox} onChangeText={(newText) => this.searchTextChanged(newText)}/>
            <View>
            <FlatList
                    data={this.state.results}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    /> 
            </View>
        </View>
        )
    }
}

PodcastBrowser.PropTypes = {

}

const styles = StyleSheet.create({
    container: {

    },
    searchBox: {
        marginTop:40,
        height:60,
        width:"95%",
        alignSelf:'center',
        flexDirection:'row'
    }
})
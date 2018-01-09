import React from 'react';
import { StyleSheet, View, FlatList, Image } from 'react-native';
import PodcastButton from './PodcastButton'

/*
TO FIX
Podcast artwork sizes are set in "onLayout", however onlayout is called after render, so a
there are 2 renders everytimes the view opens up. Find a better way of doing this

Change NUM_COLS depending on screen size
*/


const NUM_COLS = 3
export default class PodcastsScrollView extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            width: 0,
            aspectRatio:1,
            marginRight:10,
        }
    }
    _onLayout = (contentWidth, contentHeight) => {
        this.setState({
            width: (contentWidth/NUM_COLS)-this.state.marginRight
        })
    }
    _renderItem = (item) => {
        return (
            <PodcastButton style={this.state} buttonClicked = {(podcastInfo)=>this.props.buttonClicked(podcastInfo)} pod = {item.item} />
            //<Image style={this.state} source={{uri:item.item.imgFilePath}}/>
        )
    }

    render() {
        return(
            <FlatList onContentSizeChange={(contentWidth,contentHeight) => this._onLayout(contentWidth,contentHeight)}
            numColumns={NUM_COLS} contentContainerStyle = {styles.flatlist}
            data={Object.values(this.props.pods)}
            renderItem={(item) => this._renderItem(item)}
            />
        );
    }
}

const styles = StyleSheet.create({
    flatlist: {
        flexDirection:'row'
    },
  });
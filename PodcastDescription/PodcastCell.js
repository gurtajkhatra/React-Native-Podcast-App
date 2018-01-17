import React from 'react';
import { Image,View, StyleSheet,Text, TouchableOpacity,Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import ElevatedView from 'react-native-elevated-view'
import StyleGuide from '../common/styleguide'
import AsyncImage from './AsyncImage'
import SubscribeButton from './SubscribeButton'
import * as Animatable from 'react-native-animatable';

const WINDOW = Dimensions.get('window');
const SCREEN_WIDTH = WINDOW.width

export default class PodcastCell extends React.Component {
    constructor(props) {
        super(props)
        this.state = {showDescription:false}
    }

    _onPress() {
        this.setState(prevState => {
            {height:(this.state.showDescription) ? 
                (SCREEN_WIDTH):(this.props.boxHeight)}
            return {showDescription:!(prevState.showDescription)}
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.showDescription != this.state.showDescription) {
            this.podcastImage.animate({
                from: {
                    height:(this.state.showDescription) ? 
                        (this.props.boxHeight):(SCREEN_WIDTH)
                },
                to: {
                    height:(this.state.showDescription) ? 
                        (SCREEN_WIDTH):(this.props.boxHeight)
                }
            },100)
        }
    }

    render() {
        return (
            <TouchableOpacity onPress = {() => this._onPress()} activeOpacity={1}>
                <View style={[this.props.style]}>
                    <View style={styles.container}>
                        {/* Podcast Image */}
                        <Animatable.View style={[styles.podcastImgView, {height:this.props.boxHeight}]} ref={(input) => this.podcastImage=input}>
                            <AsyncImage source={{uri:this.props.podcastImgFilePath}} style={[styles.podcastImg]}/>
                        </Animatable.View>
                        {/* Podcast Information Text */}
                        <View>
                            <View style={styles.titleView}>
                                <Text style = {[styles.text,styles.titleText]}>{this.props.podcastTitle}</Text>
                                <SubscribeButton style={styles.subscribeButton} isSubscribed={this.props.isSubscribed} onSubscribePress={() => this.props.onSubscribePress()}/>
                            </View>
                            {/* <Text style = {[styles.text,styles.episodeCount]}>{this.props.episodeCount} Episodes</Text> */}
                            <Text numberOfLines={(this.state.showDescription ? (99999):(3))} style = {[styles.text,styles.descriptionText]}>{this.props.podcastDescription}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        ) 
    }
}

PodcastCell.propTypes = {
    //onPress: PropTypes.func.isRequired,
    podcastTitle: PropTypes.string.isRequired,
    podcastDescription: PropTypes.string.isRequired,
    podcastImgFilePath: PropTypes.string.isRequired,
    boxHeight:PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    podcastImgView: {
        overflow: 'hidden',
    },
    podcastImg: {
        width:'100%',
        aspectRatio:1,
        resizeMode:'contain'
    },
    text: {
        paddingLeft:15,
    },
    titleView: {
        flexDirection:'row',
        alignItems:'center',
        paddingTop:20,
        paddingBottom:10,
    },  
    titleText: {
        flex:2,
        fontSize:26,
        fontFamily:StyleGuide.titleFont,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color:'black',
        fontWeight:"800",
        paddingRight:10,
    },
    subscribeButton: {
        flex:1,
        alignItems:'center',
    },
    episodeCount: {
        fontSize:16,
        fontFamily:StyleGuide.bodyFont,
        color:'rgba(0, 0, 0, 0.7)',
    },
    descriptionText: {
        fontFamily:StyleGuide.bodyFont,
        color:'rgba(0, 0, 0, 0.7)',
        paddingRight:10,
        paddingBottom:10,
    }
})
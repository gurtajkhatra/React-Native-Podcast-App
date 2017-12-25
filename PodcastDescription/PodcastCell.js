import React from 'react';
import { Image,View, StyleSheet,Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import ElevatedView from 'react-native-elevated-view'
import { BlurView } from 'react-native-blur';
import StyleGuide from '../common/styleguide'

export default class PodcastCell extends React.Component {
    constructor(props) {
        super(props)
        this.state = {showDescription:false}
    }

    _onPress() {
        this.setState(prevState => {
            return {showDescription:!(prevState.showDescription)}
        })
    }

    render() {
        return (
            <TouchableOpacity onPress = {() => this._onPress()} activeOpacity={0.9}>
                <View style={[this.props.style]}>
                    <View style={styles.container}>
                        <View style={[{height:this.props.boxHeight},styles.titleBox]}>
                            <Image source={{uri:this.props.podcastImgFilePath}} style={styles.podcastImg}>
                            </Image>
                            <BlurView
                                style={styles.podcastImg}
                                blurType="regular"
                                blurAmount={5}>
                            </BlurView>
                        </View>
                        <View style={styles.descriptionBox}>
                            <Text style = {[styles.text,styles.titleText]}>{this.props.podcastTitle}</Text>
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
    titleBox: {
        flexDirection:"row",
        alignContent:"flex-start",
        flex:4,
    },
    descriptionBox: {
        flex:2,
        borderRadius:25,
        borderWidth: 0,
        // borderColor: '#fff'
    },
    podcastImg: {
        position:'absolute',
        top: 0, left: 0, bottom: 0, right: 0,
        width:"100%",
        flexDirection:'column',
        justifyContent:"flex-end",

    },
    text: {
        paddingLeft:15,
    },
    titleText: {
        fontSize:26,
        fontFamily:StyleGuide.titleFont,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color:'black',
        fontWeight:"800",
        paddingRight:5,
        paddingTop:5
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
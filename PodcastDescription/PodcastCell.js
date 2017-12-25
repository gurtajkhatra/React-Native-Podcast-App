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
                <ElevatedView elevation={3} style={[this.props.style]}>
                    <View style={styles.container}>
                        <View style={[{height:this.props.boxHeight},styles.titleBox]}>
                            <Image source={{uri:this.props.podcastImgFilePath}} style={styles.podcastImg}>
                            </Image>
                            <BlurView
                                style={styles.podcastImg}
                                blurType="regular"
                                blurAmount={5}>
                                <Text style = {styles.titleText}>{this.props.podcastTitle} </Text>
                            </BlurView>
                        </View>
                        <View style={styles.descriptionBox}>
                            <Text numberOfLines={(this.state.showDescription ? (99999):(3))} style = {styles.descriptionText}>{this.props.podcastDescription}</Text>
                        </View>
                    </View>
                </ElevatedView>
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
        flex:3,
    },
    descriptionBox: {
        flex:2,
    },
    podcastImg: {
        position:'absolute',
        top: 0, left: 0, bottom: 0, right: 0,
        width:"100%",
        flexDirection:'column',
        justifyContent:"flex-end",

    },
    titleText: {
        fontSize:26,
        fontFamily:StyleGuide.titleFont,
        backgroundColor: 'rgba(52, 52, 52, 0)',
        color:'white',
        fontWeight:"800",
        paddingBottom:5,
        paddingRight:5,
        paddingLeft:15,
    },
    descriptionText: {
        fontFamily:StyleGuide.bodyFont,
        paddingTop:10,
        paddingRight:10,
        paddingLeft:15,
        paddingBottom:10,
    }
})
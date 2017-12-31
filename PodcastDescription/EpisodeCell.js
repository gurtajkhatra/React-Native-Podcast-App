import React from 'react';
import { View, StyleSheet,Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import ElevatedView from 'react-native-elevated-view'
import Icon from 'react-native-vector-icons/MaterialIcons'


export default class EpisodeCell extends React.Component {
    render() {
        const moreInfoIcon = (
            <Icon name="info-outline" style={styles.infoIcon}/>
          );
        return (
        <TouchableOpacity onPress = {this.props.onPress} activeOpacity={0.2}>
            <ElevatedView elevation={4} style={[{height:this.props.boxHeight},this.props.style,styles.elevatedView]}>
                <View style={styles.container}>
                    <View style={styles.textSide}>
                        <View style={styles.titleBox}>
                            <Text numberOfLines={1} style={styles.titleText}>{this.props.episodeTitle} </Text>
                        </View>
                        <View style={styles.descriptionBox}>
                            <Text numberOfLines={2} style={styles.descriptionText}>{this.props.episodeDescription} </Text>
                        </View>
                    </View>
                    <View style={styles.infoButtonSide}>
                        {moreInfoIcon}
                    </View>
                </View>
            </ElevatedView>

        </TouchableOpacity>
        )};
}

EpisodeCell.propTypes = {
    onPress: PropTypes.func.isRequired,
    episodeTitle: PropTypes.string.isRequired,
    episodeDescription: PropTypes.string.isRequired,
    boxHeight:PropTypes.number.isRequired
  };
  
const styles = StyleSheet.create({
    elevatedView: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0)',
        borderRadius:10,
    },
    container:{
        flexDirection:"row",
        flex:1,
    },
    infoButtonSide: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    textSide: {
        flex:5,
        flexDirection:"column",
    },
    titleBox: {
        paddingLeft:10,
        paddingTop:15,
        flex:1,
        justifyContent:'center'
    },
    descriptionBox: {
        paddingLeft:10,
        paddingTop:0,
        flex:2,
        justifyContent:'flex-start'
    },
    titleText: {
        fontWeight:'bold',
        textAlign:'left',
        fontSize:14,
    },
    descriptionText: {
        textAlign:"left",
        fontSize:12,
    },
    infoIcon: {
        fontSize:24,
    }
})


import React from 'react';
import { StyleSheet,View,Text, TouchableOpacity} from 'react-native';
import StyleGuide from '../common/styleguide'

export default class EpisodeTabs extends React.Component {
    tabPressed = (feedTabPressed) => {
        this.props.changeTab(feedTabPressed)
    }
    render() {
        return(
        <View style={styles.container}>
            <TouchableOpacity style={[styles.tabContainer]} onPress={()=>this.tabPressed(true)}>
                <Text style={[styles.tabText,{color:(this.props.yourFeedSelected == true ? StyleGuide.purple:StyleGuide.grey)}]}>Your Feed</Text>
                {this.props.yourFeedSelected ? (<View style={styles.underline}/>):<View/>}
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabContainer]} onPress={()=>this.tabPressed(false)}>
                <Text style={[styles.tabText,{color:(this.props.yourFeedSelected == false ? StyleGuide.purple:StyleGuide.grey)}]}>All Episodes</Text>
                {!this.props.yourFeedSelected ? (<View style={styles.underline}/>):<View/>}
            </TouchableOpacity>
        </View>
        )
    }
  }

const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            flexDirection:'row',
        },
        tabContainer: {
            flex:1,
            alignItems:'center',
            justifyContent:'flex-start',
            flexDirection:'column'
        },
        tabText:{
            fontSize:26,
            fontFamily:StyleGuide.titleFont,
        },
        underline: {
            width:'85%',
            height:5,
            backgroundColor:StyleGuide.purple
        }
    })

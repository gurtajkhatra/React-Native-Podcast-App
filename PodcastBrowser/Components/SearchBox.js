import React from 'react';
import { Text,View,StyleSheet,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class SearchBox extends React.Component {
    
    render() {
        const searchIcon = (
            <View style={styles.searchIcon}>
                <Icon name="search" style={styles.searchIconText} size={30}/>
            </View>
        )
        return(
            <View style={styles.container}>
                <View style={this.props.style}>
                    {searchIcon}
                    <TextInput 
                    style={styles.textInput} 
                    onChangeText={(text)=>this.props.onChangeText(text)}
                    placeholder="Podcast Name"
                    placeholderTextColor={styles.searchIconText.color}/>
                </View>
                <View style={styles.underline}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
    },
    searchIcon: {
        flex:1,
        alignSelf:'center',
        alignItems:"center"
    },
    searchIconText: {
        color:"rgba(20,20,20,0.5);"
    },
    textInput: {
        flex:8,
        fontSize:30,
        marginRight:25
    },
    underline: {
        marginTop:10,
        marginBottom:5,
        borderWidth:0,
        borderBottomWidth:1,
        borderColor:"rgba(0,0,0,0.3);",
        width:"100%",
        alignSelf:'flex-end',
    }
})
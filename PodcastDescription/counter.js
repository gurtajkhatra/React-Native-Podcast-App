import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styleguide from '../common/styleguide';


export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter:3
        }
    }

    modifierPressed(isMinus) {
        const modifier = (isMinus) ? -1:1
        this.setState((prevState) => {
            return {
                counter: prevState.counter+modifier
            }
        })
    }

    render() {
        const minusIcon = (
            <View>
                <Icon name="minus-circle-outline" style={styles.searchIconText} size={25}/>
            </View>
        )
        const plusIcon = (
            <View style={styles.searchIcon}>
                <Icon name="plus-circle-outline" style={styles.searchIconText} size={25}/>
            </View>
        )
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.modifierPressed(true)}>
                    {minusIcon}
                </TouchableOpacity>
                <View style={styles.numberView}>
                    <Text style={styles.number}>
                        {this.state.counter}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => this.modifierPressed(false)}>
                    {plusIcon}
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {
    container:{
        flexDirection:'row',
        alignItems:'center'
    },
    numberView: {
        paddingLeft:8,
        paddingRight:8
    },
    number: {
        fontFamily:styleguide.bodyFont,
        fontSize:18,
        color:styleguide.purple
    }

}
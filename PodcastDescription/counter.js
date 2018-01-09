import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity, TextInput, Keyboard } from 'react-native';
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
                <Icon name="minus" style={styles.searchIconText} size={18}/>
            </View>
        )
        const plusIcon = (
            <View style={styles.searchIcon}>
                <Icon name="plus" style={styles.searchIconText} size={18}/>
            </View>
        )
        return (
            <View style={styles.container}>
                {/* <TouchableOpacity onPress={() => this.modifierPressed(true)}>
                    {minusIcon}
                </TouchableOpacity> */}
                {/* <View style={styles.numberView}> */}
                <TextInput style={styles.number} keyboardType='numeric' textAlign='center'/>
                    {/* {this.state.counter} */}
                {/* </View> */}
                {/* <TouchableOpacity onPress={() => this.modifierPressed(false)}>
                    {plusIcon}
                </TouchableOpacity> */}
            </View>
        )
    }
}

const styles = {
    container:{
        flexDirection:'row',
        alignItems:'center'
    },
    number: {
        height:26,
        width:48,
        fontFamily:styleguide.bodyFont,
        fontSize:18,
        color:styleguide.purple,
        alignItems:'center',
    }

}
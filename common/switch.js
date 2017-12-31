import React from 'react';
import { StyleSheet,View,Text,TouchableWithoutFeedback,Animated } from 'react-native';
import StyleGuide from '../common/styleguide'

const animationToOn = {
    toValue:28,
    duration:100
}
const animationToOff = {
    toValue:0,
    duration:100
}
const GREY = StyleGuide.grey
const PURPLE = StyleGuide.purple

export default class Switch extends React.Component {
    constructor(props) {
        super(props)
        this.isOn = false//this.props.isOn
        this.left = new Animated.Value(0)
    }
    animateToggle() {
        Animated.timing(                 
            this.left,         
            (this.isOn ? animationToOff:animationToOn)
          ).start()
    }
    toggle() {
        this.isOn = !this.isOn
        this.animateToggle()
    }
    render() {
        var color = this.left.interpolate({
            inputRange: [0, 28],
            outputRange: [GREY, PURPLE]
        });
        return (
            <TouchableWithoutFeedback onPress={() => this.toggle()}>
                <View style={styles.touchBox}>
                    <View style={styles.container}>
                        <Animated.View style={[styles.bar,{backgroundColor:color}]}/>
                        <Animated.View ref={(input)=>this.toggleCircle=input} style={[styles.outerCircle,{left:this.left,backgroundColor:color}]}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    touchBox : {
        padding:20,
        alignItems:'center',
        justifyContent:'center'
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        height:20,
        width:48,
    },
    outerCircle:{
        position:'absolute',
        top:0,
        left:new Animated.Value(0),
        width:20,
        height:20,
        borderRadius: 10,
        backgroundColor: PURPLE,
        justifyContent:'center',
        alignItems:'center'
    },
    bar: {
        position:'absolute',
        top:7,
        left:10,
        width:28,
        height:7,
        borderRadius:4,
        backgroundColor:PURPLE
    }
}
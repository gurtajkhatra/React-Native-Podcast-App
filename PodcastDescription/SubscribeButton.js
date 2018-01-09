import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StyleGuide from '../common/styleguide'
export default class SubscribeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSubscribed: this.props.isSubscribed
        }
    }
    //Subscribe or unsubscribe to the podcast
    subscribePressed() {
        this.props.onSubscribePress()
        this.setState((prevState) => {
            return {
            isSubscribed:!(prevState.isSubscribed)
            }
        })
    }


    render() {
        return (     
            <View style = { this.props.style }>
                <TouchableOpacity onPress={() => this.subscribePressed()}>
                    {
                        this.state.isSubscribed ?
                            (<Text style = {[styles.text,styles.subscribedText]}>Subscribed</Text>)
                            :
                            (<Text style = {[styles.text,styles.subscribeText]}>Subscribe</Text>)
                    }

                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {
    text: {
        borderWidth:1,
        borderColor:StyleGuide.purple,
        borderRadius:4,
        fontFamily:StyleGuide.bodyFont,
        padding:5,
        paddingLeft:8,
        paddingRight:8,
    },
    subscribeText: {
        color:StyleGuide.purple,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    subscribedText: {
        color:'white',
        backgroundColor: StyleGuide.purple,
        overflow:'hidden'
    }
}

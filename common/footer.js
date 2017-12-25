import React, {Component} from 'react';
import {
    Animated,
    PanResponder,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';
import PlayingEpisodeContainer from '../PlayingEpisode/PlayingEpisodeContainer'

export default class Footer extends React.Component {
    state = {
        pan: new Animated.ValueXY(),
        opacity: new Animated.Value(1),
    }

    isMoving = false;
    isOpen = false;
    isHiding = false;
    window = Dimensions.get('window');

    getStyle() {
        return {transform: [{translateY: this.state.pan.y}]};
    }

    openPlaying(offsetY) {
        if (offsetY < -100) {
            this.isMoving = true;
            StatusBar.setHidden(true, true);
            this.state.opacity.setValue(0);
            Animated.timing(
                this.state.pan.y,
                {
                    toValue: -window.height+this.props.footerHeight,
                    duration: 200,
                }
            ).start(() => {
                //hide tab bar
                setTimeout(() => {
                    this.isOpen = true;
                    this.isMoving = false;
                }, 200);
                this.state.pan.setOffset({y: -window.height+this.props.footerHeight});
                this.state.pan.setValue({y: 0});
            });
        } else {
            this.isMoving = true;
            Animated.timing(
                this.state.pan.y,
                {toValue: 0}
            ).start(() => {
                setTimeout(() => this.isMoving = false, 200);
                this.state.pan.setOffset({y: 0});
            });
        }
    }

    closePlaying(offsetY) {
        if(offsetY > 100) {
            this.isMoving = true;
            StatusBar.setHidden(false, true);
            Animated.timing(
                this.state.pan.y,
                {toValue: window.height - this.props.footerHeight, duration: 200}
            ).start(() => {
                setTimeout(() => {
                    this.isOpen = false;
                    this.isMoving = false;
                }, 200);
                this.state.pan.setOffset({y: 0});
                this.state.pan.setValue({y: 0});
            });
        } else {
            this.isMoving = true;
            Animated.timing(
                this.state.pan.y,
                {toValue: 0}
            ).start(() => {
                setTimeout(() => this.isMoving = false, 200);
                this.state.pan.setOffset({y: window.height - this.props.footerHeight});
            });
        }
    }

    componentWillMount() {
        let panMover = Animated.event([null,{
            dy : this.state.pan.y,
        }]);
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: (e,g) => !(g.dx === 0 || g.dy === 0),
            onPanResponderTerminationRequest: () => false,
            onStartShouldSetPanResponderCapture: () => false,
            onMoveShouldSetPanResponderCapture: () => false,
            onPanResponderGrant: (e, gestureState) => {
            },
            onPanResponderMove: (e,g) => {
                if(this.isMoving || (!this.isOpen && g.dy > 0) || (this.isOpen && g.dy < 0)) {
                    return
                }
                if(!this.isOpen && g.dy < 0) {
                    const value = g.dy/70 + 1;
                    if (0 < value && value < 1) {
                        this.state.opacity.setValue(value);
                    }
                }
                if(this.isOpen && g.dy > 0) {
                    const value = g.dy / 250 - 1;
                    if (0 < value && value < 1) {
                        this.state.opacity.setValue(value);
                    }
                }
                return panMover(e,g);
            },
            onPanResponderRelease: (e, g) => {
                if(this.isMoving || (!this.isOpen && g.dy > 0) || (this.isOpen && g.dy < 0)) {
                    return
                } else {
                    const offsetY = g.dy;
                    if(!this.isOpen) {
                        if(g.y0 >= 100) {
                            this.openPlaying(offsetY);
                        }
                    } 
                    else {
                        this.closePlaying(offsetY);
                    }
                }

            },
        })
    }
    render() {
        return (            
            <Animated.View
                {...this._panResponder.panHandlers}
                style={[styles.animatedView, this.getStyle()]}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        if (!this.isOpen && !this.isMoving) {
                            this.openPlaying(-101)
                            }
                        }
                    } style={{flex:1}}>
                    <View style={{flex:1}}>
                        <PlayingEpisodeContainer/>
                    </View>
                </TouchableWithoutFeedback>
            </Animated.View>
            
        )
    }
}


const window = Dimensions.get('window');

const styles = StyleSheet.create({
    animatedView: {
        height:window.height,
        backgroundColor:'purple',
    },
})



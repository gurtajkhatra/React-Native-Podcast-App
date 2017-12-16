import React, {Component} from 'react';
import {
    Animated,
    PanResponder,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Dimensions
} from 'react-native';
import PlayingEpisodeContainer from '../PlayingEpisode/PlayingEpisodeContainer'

export default class Footer extends React.Component {
    state = {
        pan: new Animated.ValueXY(),
        opacity: new Animated.Value(1),
        isMoving: true
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
            this.moving = true;
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
                    this.open = true;
                    this.moving = false;
                }, 200);
                this.state.pan.setOffset({y: -window.height+this.props.footerHeight});
                this.state.pan.setValue({y: 0});
            });
        } else {
            this.moving = true;
            Animated.timing(
                this.state.pan.y,
                {toValue: 0}
            ).start(() => {
                setTimeout(() => this.moving = false, 200);
                this.state.pan.setOffset({y: 0});
            });
        }
    }

    closePlaying(offsetY) {
        if(offsetY > 100) {
            this.moving = true;
            StatusBar.setHidden(false, true);
            Animated.timing(
                this.state.pan.y,
                {toValue: window.height - this.props.footerHeight, duration: 200}
            ).start(() => {
                setTimeout(() => {
                    this.open = false;
                    this.moving = false;
                }, 200);
                this.state.pan.setOffset({y: 0});
                this.state.pan.setValue({y: 0});
            });
        } else {
            this.moving = true;
            Animated.timing(
                this.state.pan.y,
                {toValue: 0}
            ).start(() => {
                setTimeout(() => this.moving = false, 200);
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
                if(this.moving || (!this.open && g.dy > 0) || (this.open && g.dy < 0)) {
                    return
                }
                if(!this.open && g.dy < 0) {
                    const value = g.dy/70 + 1;
                    if (0 < value && value < 1) {
                        this.state.opacity.setValue(value);
                    }

                }
                if(this.open && g.dy > 0) {
                    const value = g.dy / 250 - 1;
                    if (0 < value && value < 1) {
                        this.state.opacity.setValue(value);
                    }
                }
                return panMover(e,g);
            },
            onPanResponderRelease: (e, g) => {
                if(this.moving || (!this.open && g.dy > 0) || (this.open && g.dy < 0)) {
                    return
                } else {
                    const offsetY = g.dy;

                    if(!this.open) {
                        /*s
                            If you are swiping up quickly and your finger goes off the screen, the View doesn't always open fully (it stops a few px from the top).
                            This sort of thing happens because the event system couldn't keep up with the fast swipe, and the last event it gets is from a few milliseconds before it hit the top.
                            You can fix this by always fully opening the View when its `y` is within some distance from the top.
                            I think you can just add `if (g.y0 <= 100) this.scrollUp();` in your `onPanResponderRelease`
                         */
                        if(g.y0 >= 100) this.openPlaying(offsetY);
                    } else {
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
                style={[styles.playing, this.getStyle()]}>
                <PlayingEpisodeContainer/>
            </Animated.View>
        
        )
    }
}


const window = Dimensions.get('window');

const styles = StyleSheet.create({
    playing: {
        backgroundColor: "purple",
        height:window.height,
    },
})



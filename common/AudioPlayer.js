import React from 'react';

//import TrackPlayer from 'react-native-track-player';
//import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
import {Platform, NativeModules} from 'react-native'

module.exports = class AudioPlayer {
    constructor(filePath = '') {
        this.filePath = filePath
        this.duration = -1
        this.toStream = true
        this.isStreamingIOS = true
    }

    //TODO: Implement this function
    isLocalFile(filePath) {
        return false
    }

    changeFile(filePath,callback) {
        this.filePath = filePath
        callback()
        //this.toStream = !(this.isLocalFile(this.filePath))
    }

    play() {
        //If there is something to play
        if(this.filePath !== '') {
            //If we are streaming for iOS, use Streamkit
            if(Platform.OS === "ios") {
                //RNStreamingKitManager.play(this.filePath)
                ReactNativeAudioStreaming.play(this.filePath, {showIniOSMediaCenter: true, showInAndroidNotifications: true});
            }
            //Otherwise use TrackPlayer library
            else {
                console.log("Using TrackPLayer")
                this.isStreamingIOS = false
            }
        }
    }
    pause() {
        if(this.isStreamingIOS) {
            //RNStreamingKitManager.pause()
            ReactNativeAudioStreaming.pause();
        }
        else {
            console.log("Pause using trackPLayer")
        }
    }
    resume() {
        if(this.isStreamingIOS) {
            // RNStreamingKitManager.resume()
            ReactNativeAudioStreaming.resume();
        }
        else {
            console.log("Resume using trackPLayer")
        }
    }

    getCurrentProgress(callback) {
        // if(this.isStreamingIOS) {
        //     RNStreamingKitManager.getProgress(function(arg1,currTime) {
        //         callback(currTime)
        //     })
        // }
        return

    }
    
    skipAhead(seconds=30) {
        // if(this.isStreamingIOS) {
        //     this.getCurrentProgress((currTime) => {
        //         RNStreamingKitManager.getDuration((arg1,duration) => {
        //             this.duration = duration
        //             skipTo = Math.min(parseFloat(currTime)+30,this.duration)
        //             RNStreamingKitManager.seekToTime(skipTo)
        //         })
                
        //     })
        // }
        // else {
            console.log("Skip ahead using trackplayer")
       // }
    }
    skipBack(seconds=30) {
        // if(this.isStreamingIOS) {
        //     this.getCurrentProgress((currTime) => {
        //         skipTo = Math.max(parseFloat(currTime)-30,0)
        //         RNStreamingKitManager.seekToTime(skipTo)
        //     })
            
        // }
        // else {
            console.log("Skip ahead using trackplayer")
        //}
    }
};
// function play()

// var player = {
//     play:
//     pause:
//     resume:
//     skipAhead:
//     skipBack:
// }
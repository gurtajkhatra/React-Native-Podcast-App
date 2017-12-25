import React from 'react';
import { Row } from "react-native-easy-grid";
import { StyleSheet, Text,TouchableOpacity } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons'
import StyleGuide from '../../common/styleguide'


export default class TitleRow extends React.Component{
    render() {
        const NextIcon = (
            <Icon name="navigate-next" style={[styles.nextIcon]}/>
        );
        return (
            <TouchableOpacity style={styles.tappableArea} onPress={() => this.props.onTitlePress()} activeOpacity={0.4}>
                <Row style={styles.titleRow}>
                        <Text style={styles.titleText}>{this.props.title}</Text>
                        {/* {NextIcon} */}
                </Row>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    titleRow: {
        flex:1,
        alignItems:"flex-end",
        paddingBottom:3,
    },
    tappableArea: {
        flex:1,
    },
    titleText: {
        fontSize: responsiveFontSize(3.24084507),
        fontFamily: StyleGuide.titleFont,
    },
    nextIcon: {
        fontSize:responsiveFontSize(2.64084507),
    },
})
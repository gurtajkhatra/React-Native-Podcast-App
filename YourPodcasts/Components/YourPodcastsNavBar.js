import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons'
import { Col, Row, Grid } from "react-native-easy-grid";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';


export default class YourPodcastsNavBar extends React.Component {
    render() {
        const BackIcon = (
            <Icon name="arrow-back" style={[styles.icon]}/>
          );
        const AddIcon = (
            <Icon name="add" style={[styles.icon]}/>
          );
        return (
            <Grid style={styles.container}>
                <Row style={styles.r1}></Row>
                <Row style={styles.r2}>
                    {BackIcon}
                    {AddIcon}
                </Row>
            </Grid> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        fontSize:responsiveFontSize(4),
    },

    r1: {
        flex:1,
    },
    r2: {
        flex:1.2,
        justifyContent:"space-between"
    },
  });
  
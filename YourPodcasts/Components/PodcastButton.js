import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types'

export default class PodcastButton extends React.Component {
	render () {
		return (
			<TouchableOpacity onPress={() => { this.props.buttonClicked(this.props.podcast) }} activeOpacity={0.4}>
				<Image style={[this.props.style, styles.podcastBtnImage]} source={{ uri: this.props.podcast.imgFilePath }} />
			</TouchableOpacity>
		)
	}
}

PodcastButton.propTypes =
	{
		buttonClicked: PropTypes.func.isRequired,
		podcast: PropTypes.object.isRequired,
	}

const styles = StyleSheet.create({
	podcastBtnImage: {
		backgroundColor: 'purple'
	}
});
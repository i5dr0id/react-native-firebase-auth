// Import libraries for making component
import React from 'react';
import {Text, View} from 'react-native';

// Male a Component
const Header = (props) => {
	const { viewStyle, textStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	)
}

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 0.5
	},
	textStyle: {
		fontSize: 20
	}
}


//Make the component available to others
export { Header };
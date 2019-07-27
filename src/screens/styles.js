import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
	slideContainer: {
		padding: 20,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		
	},
	content: {
		width: width,
		backgroundColor: '#168f92',
		marginBottom: 20,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
	}
})
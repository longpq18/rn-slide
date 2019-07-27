import { 
	StyleSheet,
	Dimensions
} from 'react-native';


const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    marginVertical: height * 0.0125,
    justifyContent: 'center',
    bottom: 0,
    left: width * 0.25,
    right: width * 0.25,
  },
  pagination: {
    width: 8,
    height: 8,
    borderRadius: 25,
    marginHorizontal: 2,
  },
});

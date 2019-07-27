import React from 'react';
import { View } from 'react-native-animatable';
import SlideImage from 'SlideImage';
import SlideScreen1 from './SlideScreen1';
import SlideScreen2 from './SlideScreen2';
import styles from './styles';

const LauchScreen = () => (
	<View style={styles.slideContainer}>
		<SlideImage
      autoplay={true}
      index={0}
      showPagination
      // paginationActiveColor={'#169f85'}
      // paginationDefaultColor={'#ccc'}
	    >
	      <SlideScreen1 />
	      <SlideScreen2 />
	  </SlideImage>
	</View>
);

export default LauchScreen;
import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native-animatable';
import styles from './styles';

const SlideScreen2 = () => (
	<View style={styles.container}>
		<View
	    animation="bounceInUp"
	    delay={2000}
	    style={styles.content}
	  >
	    <Text>Lauch Screen 2 1</Text>
	  </View>
	  <View
	    animation="bounceInUp"
	    delay={2800}
	    style={styles.content}
	  >
	    <Text>Lauch Screen 2 2</Text>
	  </View>
	  <View
	    animation="bounceInUp"
	    delay={3600}
	    style={styles.content}
	  >
	    <Text>Lauch Screen 2 3</Text>
	  </View>
  </View>
);

export default SlideScreen2;
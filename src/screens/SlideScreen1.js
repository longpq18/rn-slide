import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native-animatable';
import styles from './styles';

const SlideScreen1 = () => (
	<View style={styles.container}>
		<View
	    animation="bounceInUp"
	    delay={10}
	    style={styles.content}
	  >
	    <Text>Lauch Screen 1 1</Text>
	  </View>
	  <View
	    animation="bounceInUp"
	    delay={100}
	    style={styles.content}
	  >
	    <Text>Lauch Screen 1 2</Text>
	  </View>
	  <View
	    animation="bounceInUp"
	    delay={400}
	    style={styles.content}
	  >
	    <Text>Lauch Screen 1 3</Text>
	  </View>
  </View>
);

export default SlideScreen1;
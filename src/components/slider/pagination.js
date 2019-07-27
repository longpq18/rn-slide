import React from 'react';
import { 
  TouchableOpacity, 
  View, 
  ViewPropTypes 
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Pagination = ({
  data,
  paginationIndex,
  scrollToIndex,
  paginationDefaultColor,
  paginationActiveColor,
  paginationStyle,
  paginationStyleItem,
}) => (
  <View style={[styles.container, paginationStyle]}>
    {data.map((_, index) => (
      <TouchableOpacity
        style={[
          styles.pagination,
          paginationStyleItem,
          paginationIndex === index
            ? { backgroundColor: paginationActiveColor }
            : { backgroundColor: paginationDefaultColor },
        ]}
        key={index}
        onPress={() => scrollToIndex(index)}
      />
    ))}
  </View>
);

Pagination.propTypes = {
  scrollToIndex: PropTypes.func.isRequired,
  data: PropTypes.array,
  paginationIndex: PropTypes.number,
  paginationActiveColor: PropTypes.string,
  paginationDefaultColor: PropTypes.string,
  paginationStyle: ViewPropTypes.style,
  paginationStyleItem: ViewPropTypes.style,
};

Pagination.defaultProps = {
  data: [],
  paginationIndex: 0,
  paginationActiveColor: '#169f85',
  paginationDefaultColor: '#ccc',
  paginationStyle: {},
  paginationStyleItem: {},
};

export default Pagination;

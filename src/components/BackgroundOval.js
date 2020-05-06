import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
const w = Dimensions.get('window').width * 1.2;
const BackgroundOval = ({style}) => {
  return <View style={[styles.container, style]} />;
};

export default BackgroundOval;

const styles = StyleSheet.create({
  container: {
    width: w,
    aspectRatio: 1,
    backgroundColor: '#FFCC00',
    position: 'absolute',
    borderRadius: w,
    left: 100,
    top: -100,
  },
});

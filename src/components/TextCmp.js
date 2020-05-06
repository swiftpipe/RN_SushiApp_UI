import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TextCmp = ({style, children, ...props}) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

export default TextCmp;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'AvenirLTStd-Medium',
    color: '#222',
  },
});

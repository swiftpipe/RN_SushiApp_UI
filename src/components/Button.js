import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import TextCmp from './TextCmp';

const Button = ({title, outline, style}) => {
  return (
    <TouchableOpacity
      style={[outline ? styles.btn_outline : styles.btn, style]}>
      <TextCmp style={outline ? styles.title_outline : styles.title}>
        {title}
      </TextCmp>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    backgroundColor: '#3C3C3C',
    borderRadius: 30,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 3,
  },
  btn_outline: {
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#3C3C3C',
    borderRadius: 30,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 3,
  },
  title_outline: {
    color: '#3C3C3C',
  },
  title: {
    color: '#fff',
  },
});

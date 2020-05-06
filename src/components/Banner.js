import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import TextCmp from './TextCmp';

const Banner = ({title, image, imageContainer}) => {
  return (
    <View style={styles.container}>
      <TextCmp style={styles.desc}>free delivert 1:24</TextCmp>
      <TextCmp style={styles.heading}>{title}</TextCmp>
      <Image
        style={[styles.image, imageContainer]}
        resizeMode="contain"
        source={image}
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  desc: {
    fontSize: 13,
  },
  heading: {
    fontSize: 25,
    marginTop: 10,
  },
  image: {
    width: Dimensions.get('window').width / 1.2,
  },
});

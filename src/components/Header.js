import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import TextCmp from './TextCmp';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/images/left.png')} />
      <TextCmp style={styles.title}>Sushi Haus</TextCmp>
      <View style={styles.headerRight}>
        <View style={styles.headerRightOval}>
          <TextCmp style={styles.headerRightOvalText}>1</TextCmp>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 14,
  },
  headerRight: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  headerRightOval: {
    position: 'absolute',
    right: -2,
    top: -2,
    backgroundColor: '#363636',
    width: 20,
    height: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRightOvalText: {
    color: '#fff',
    fontSize: 10,
  },
});

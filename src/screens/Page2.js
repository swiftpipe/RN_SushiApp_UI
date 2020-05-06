import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import BackgroundOval from '../components/BackgroundOval';
import Header from '../components/Header';
import Banner from '../components/Banner';
import TextCmp from '../components/TextCmp';
import Button from '../components/Button';

const items = [
  {
    id: '1',
    name: 'Fried Egg',
    price: '$2',
    image: require('../assets/images/friedegg.png'),
    num: 1,
  },
  {
    id: '2',
    name: 'Nori',
    image: require('../assets/images/nori.png'),
    price: '$5',
  },
  {
    id: '3',
    name: 'Hot Sauce',
    image: require('../assets/images/hotsauce.png'),
    price: '$1',
  },
];

const Item = ({item}) => {
  return (
    <View style={[styles.wrapper]}>
      {item.num && (
        <View style={styles.itemHeader}>
          <Text>
            - {'  '}
            <TextCmp style={styles.num}>{item.num}</TextCmp>
            {'  '} +{' '}
          </Text>
        </View>
      )}
      <View style={styles.item}>
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={item.image} />
        </View>

        <View style={styles.itemFooter}>
          <TextCmp style={styles.itemName}>{item.name}</TextCmp>
          <TextCmp style={styles.itemPrice}>{item.price}</TextCmp>
        </View>
      </View>
    </View>
  );
};

const Page2 = () => {
  return (
    <View style={styles.container}>
      <BackgroundOval style={styles.oval} />
      <Header />
      <Banner
        title="Add Toppings"
        image={require('../assets/images/food2.png')}
      />
      <ScrollView horizontal style={styles.scrollview}>
        {items.map(item => {
          return <Item item={item} />;
        })}
      </ScrollView>
      <Button style={styles.btn} title="Add to Order" />
    </View>
  );
};

export default Page2;

const styles = StyleSheet.create({
  oval: {
    left: undefined,
    alignSelf: 'center',
    top: -200,
  },
  container: {
    flex: 1,
  },
  wrapper: {padding: 0, marginRight: 20, overflow: 'visible'},
  item: {
    borderWidth: 1,
    borderColor: '#DEDEDE',
    padding: 15,
    alignItems: 'center',
  },
  num: {
    marginHorizontal: 10,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontWeight: 'bold',
    fontFamily: undefined,
  },
  image: {
    // flex: 1,
  },
  itemHeader: {
    position: 'absolute',
    backgroundColor: '#FFCC00',
    width: '90%',
    alignSelf: 'center',
    top: -10,
    borderRadius: 20,
    zIndex: 9999999,
    alignItems: 'center',
  },
  imgContainer: {
    // flex: 1,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemFooter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollview: {
    paddingLeft: 80,
    overflow: 'visible',
    flex: 1,
  },
  btn: {
    alignSelf: 'center',
    width: '70%',
  },
});

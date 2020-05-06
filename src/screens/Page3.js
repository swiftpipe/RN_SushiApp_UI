import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BackgroundOval from '../components/BackgroundOval';

import Banner from '../components/Banner';
import Header from '../components/Header';
import TextCmp from '../components/TextCmp';

const Item = ({title, value, schedule}) => {
  return (
    <View style={styles.item}>
      <TextCmp style={styles.itemTitle}>{title}</TextCmp>
      {schedule ? (
        <View style={styles.itemSchedule}>
          <View style={styles.itemScheduleTextActiveContainer}>
            <TextCmp style={styles.itemScheduleTextActive}>Now</TextCmp>
          </View>

          <TextCmp style={styles.itemScheduleText}>Later</TextCmp>
        </View>
      ) : (
        <Text style={styles.itemValue}>{value}</Text>
      )}
    </View>
  );
};

const Page3 = () => {
  return (
    <View style={styles.container}>
      <BackgroundOval style={styles.oval} />
      <Header />
      <Banner
        title="Your Order"
        image={require('../assets/images/food2.png')}
        imageContainer={styles.img}
      />
      <View style={styles.containerItem}>
        <Text style={styles.itemHeader}>ITEMS</Text>
        <Item title="Salmon Bowl" value={'$12'} />
        <Item title="Freg Egg + 1" value={'$2'} />
        <Item title="Total" value={'$13'} />
        <View style={styles.line} />
        <Text style={styles.itemHeader}>DELIVERY</Text>
        <Item title="Schedule" value={'$12'} schedule />
        <View style={styles.line} />
        <Text style={styles.itemHeader}>MY INFO </Text>
        <Item
          title="My Location"
          value={'226 Ottley Road Suite 206 Atlanta, GA 30326'}
        />
        <Item title="Name" value={'Micheal Jones'} />
        <Item title="Phone Number" value={'(404) 455-6788'} />
        <Item title="Card Number" value={'4455 **** **** ****'} />
        <Item title="Experation Date" value={'10/20'} />
      </View>
    </View>
  );
};

export default Page3;

const styles = StyleSheet.create({
  oval: {
    left: undefined,
    alignSelf: 'center',
    top: -260,
  },
  container: {
    flex: 1,
  },
  img: {
    width: 150,
    height: 150,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    alignItems: 'center',
  },
  itemValue: {
    // fontFamily: undefined,
    fontWeight: 'bold',
    width: 200,
    textAlign: 'right',
  },
  containerItem: {
    padding: 20,
  },
  itemHeader: {
    fontWeight: 'bold',
  },
  line: {
    height: 1,
    backgroundColor: '#EBEBEB',
    marginVertical: 20,
  },
  itemSchedule: {
    backgroundColor: '#3C3C3C',
    flexDirection: 'row',
    padding: 2,
    paddingHorizontal: 2,
    borderRadius: 20,
  },
  itemScheduleText: {
    color: '#fff',
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  itemScheduleTextActive: {
    paddingHorizontal: 10,
    color: '#3C3C3C',
    backgroundColor: '#fff',
    paddingVertical: 3,
    borderRadius: 20,
  },
  itemScheduleTextActiveContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,

    overflow: 'hidden',
  },
});

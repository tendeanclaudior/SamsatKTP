import {ScrollView, Image, View} from 'react-native';
import React from 'react';
import {ImgAds} from '../../assets';

const ScrollViewHorizontal = () => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image source={ImgAds} />
        <Image source={ImgAds} />
        <Image source={ImgAds} />
      </ScrollView>
    </View>
  );
};

export default ScrollViewHorizontal;

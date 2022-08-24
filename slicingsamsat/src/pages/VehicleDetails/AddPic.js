import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fonts, IcAddPhoto} from '../../assets';

const AddPic = ({title}) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.wrapperAddPic}>
        <IcAddPhoto />
        <Text style={styles.titlePic}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddPic;

const styles = StyleSheet.create({
  wrapperAddPic: {
    width: 100,
    height: 100,
    backgroundColor: '#F3F2F2',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginHorizontal: 10,
  },
  titlePic: {
    fontSize: 12,
    fontFamily: fonts.Poppins.regular,
    color: '#FFFFFF',
    marginTop: 8,
  },
});

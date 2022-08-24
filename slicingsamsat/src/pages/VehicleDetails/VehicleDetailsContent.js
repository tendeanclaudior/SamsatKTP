import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../assets';

const VehicleDetailsContent = ({titleDetails, titleNameDetails}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleDetails}>{titleDetails}</Text>
      <Text style={styles.titleNameDetails}>{titleNameDetails}</Text>
    </View>
  );
};

export default VehicleDetailsContent;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    width: 166,
    borderColor: '#F3F3F3',
  },
  titleDetails: {
    fontSize: 12,
    fontFamily: fonts.Poppins.medium,
    color: '#585858',
  },
  titleNameDetails: {
    fontSize: 15,
    fontFamily: fonts.Poppins.medium,
    color: '#585858',
  },
});

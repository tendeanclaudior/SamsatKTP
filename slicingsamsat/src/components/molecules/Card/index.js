import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ImgMotor} from '../../../assets';

const Card = props => {
  const {
    platnomor = 'DB 5848 C',
    jenis = 'Honda CB150R',
    merek = 'HONDA',
    tipe = 'H5C02R20M1 M/T',
    nominal = '312.100',
    masa_berlaku = '26 Jan 2020',
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.motor} source={ImgMotor} />
        <View style={styles.textWrapper}>
          <Text style={styles.platnomor}>{platnomor}</Text>
          <View style={styles.descWrapper}>
            <Text style={styles.jenis}>{jenis}</Text>
            <Text style={styles.merek}>{merek}</Text>
          </View>
          <Text style={styles.tipe}>{tipe}</Text>
          <Text style={styles.nominal}>Rp {nominal}</Text>
          <View style={styles.descWrapper}>
            <View style={styles.masa_berlaku1}>
              <Text style={styles.textMB}>Berlaku Sampai</Text>
            </View>
            <View style={styles.masa_berlaku2}>
              <Text style={styles.textMB}>{masa_berlaku}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 228,
    width: 200,
    borderColor: '#FFFFFF',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    shadowColor: '#000000',
    elevation: 10,
  },
  motor: {
    marginTop: -60,
  },
  platnomor: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#000000CC',
  },
  textWrapper: {
    width: '100%',
    paddingLeft: 20,
  },
  descWrapper: {
    flexDirection: 'row',
  },
  jenis: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#000000',
  },
  merek: {
    fontFamily: 'Poppins-Bold',
    fontSize: 10,
    color: '#C2BFBF',
    alignSelf: 'flex-end',
    marginLeft: 3,
  },
  tipe: {
    fontFamily: 'Poppins-Bold',
    fontSize: 10,
    color: '#C2BFBF',
    marginTop: -3,
  },
  nominal: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#2E2E2E',
  },
  masa_berlaku1: {
    width: 80,
    backgroundColor: '#2E2E2E',
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 7,
  },
  masa_berlaku2: {
    width: 80,
    backgroundColor: '#C2BFBF',
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMB: {
    fontFamily: 'Poppins-Bold',
    fontSize: 8,
    color: 'white',
  },
});

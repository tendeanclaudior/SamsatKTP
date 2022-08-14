import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ImgMotor} from '../../assets';
import {Gap} from '../../components';

const VehicleCard = () => {
  return (
    <View style={styles.vehicleContainer}>
      <View style={styles.vehicle}>
        <View style={styles.imgContainer}>
          <Image source={ImgMotor} />
          <View>
            <Text style={styles.policeNumber}>DB 5848 C</Text>
            <View style={styles.border} />
            <Gap height={60} />
            <View>
              <Text style={styles.textMerek}>Honda CB150R</Text>
              <Text style={styles.textModel}>HONDA H5C02R20M1 M/T</Text>
            </View>
          </View>
        </View>
        <View style={styles.payContainer}>
          <View style={styles.pay}>
            <Text style={styles.textValid}>Berlaku Sampai</Text>
            <Text style={styles.textDate}>26 Jan 2020</Text>
          </View>
          <Text style={styles.price}>Rp 312.100</Text>
        </View>
      </View>
    </View>
  );
};

export default VehicleCard;

const styles = StyleSheet.create({
  vehicleContainer: {
    paddingHorizontal: 20,
  },
  vehicle: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderColor: '#000000',
    elevation: 10,
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  policeNumber: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    textAlign: 'right',
  },
  border: {
    borderBottomWidth: 4,
    width: 180,
    borderColor: '#F3F3F3',
  },
  textMerek: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    textAlign: 'right',
  },
  textModel: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    color: '#C2BFBF',
    textAlign: 'right',
  },
  payContainer: {
    backgroundColor: '#9A0000',
    width: '100%',
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textValid: {
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    backgroundColor: '#2E2E2E',
    paddingHorizontal: 6,
    paddingVertical: 12,
    textAlign: 'center',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  textDate: {
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    backgroundColor: '#C2BFBF',
    paddingHorizontal: 6,
    paddingVertical: 12,
    textAlign: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  price: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
});

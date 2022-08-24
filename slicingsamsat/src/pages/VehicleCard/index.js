import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import {ImgMotor} from '../../assets';
import {Gap} from '../../components';
import {fonts} from '../../assets/fonts';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    policeNumber: 'DB 5848 C',
    vehicleName: 'Honda CB150R',
    vehicleMerk: 'HONDA',
    vehicleType: 'H5C02R20M1 M/T',
    dateExpire: '26 Jan 2020',
    price: '312.100',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bl',
    policeNumber: 'DB 5848 C',
    vehicleName: 'Honda CB150R',
    vehicleMerk: 'HONDA',
    vehicleType: 'H5C02R20M1 M/T',
    dateExpire: '26 Jan 2020',
    price: '312.100',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bs',
    policeNumber: 'DB 5848 C',
    vehicleName: 'Honda CB150R',
    vehicleMerk: 'HONDA',
    vehicleType: 'H5C02R20M1 M/T',
    dateExpire: '26 Jan 2020',
    price: '312.100',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    policeNumber: 'DB 5848 C',
    vehicleName: 'Honda CB150R',
    vehicleMerk: 'HONDA',
    vehicleType: 'H5C02R20M1 M/T',
    dateExpire: '26 Jan 2020',
    price: '312.100',
  },
];

const Vehicle = ({
  policeNumber,
  vehicleName,
  vehicleMerk,
  vehicleType,
  dateExpire,
  price,
}) => (
  <View style={styles.container}>
    <View style={styles.wrapperContainer}>
      <View style={styles.vehicleCard}>
        <Image source={ImgMotor} />
        <View>
          <Text style={styles.policeNumber}>{policeNumber}</Text>
          <View style={styles.border} />
          <Gap height={75} />
          <View>
            <Text style={styles.vehicleName}>
              {vehicleName}{' '}
              <Text style={styles.vehicleType}>{vehicleMerk}</Text>
            </Text>
            <Text style={styles.vehicleType}>{vehicleType}</Text>
          </View>
        </View>
      </View>
      <View style={styles.expireAndPrice}>
        <View style={styles.expireContainer}>
          <View style={styles.expireTextContainer}>
            <Text style={styles.expireTitle}>Berlaku Sampai</Text>
          </View>
          <View style={styles.dateTextContainer}>
            <Text style={styles.dateTitle}>{dateExpire}</Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceTitle}>Rp {price}</Text>
        </View>
      </View>
    </View>
  </View>
);

const VehicleCard = () => {
  const renderItem = ({item}) => (
    <Vehicle
      policeNumber={item.policeNumber}
      vehicleName={item.vehicleName}
      vehicleMerk={item.vehicleMerk}
      vehicleType={item.vehicleType}
      dateExpire={item.dateExpire}
      price={item.price}
    />
  );

  return (
    <View style={styles.page}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default VehicleCard;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  wrapperContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000000',
    elevation: 10,
  },
  vehicleCard: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  policeNumber: {
    fontSize: 24,
    fontFamily: fonts.Poppins.medium,
    color: '#000000CC',
    textAlign: 'right',
  },
  border: {
    borderBottomWidth: 3,
    borderBottomColor: '#F3F3F3',
    width: 190,
  },
  vehicleName: {
    fontSize: 15,
    fontFamily: fonts.Poppins.medium,
    color: '#000000CC',
    textAlign: 'right',
  },
  vehicleType: {
    fontSize: 12,
    fontFamily: fonts.Poppins.medium,
    color: '#C2BFBF',
    textAlign: 'right',
  },
  expireAndPrice: {
    backgroundColor: '#9A0000',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  expireContainer: {
    flexDirection: 'row',
  },
  expireTextContainer: {
    backgroundColor: '#2E2E2E',
    paddingVertical: 7,
    paddingHorizontal: 7,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  dateTextContainer: {
    backgroundColor: '#C2BFBF',
    paddingVertical: 7,
    paddingHorizontal: 7,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  expireTitle: {
    fontSize: 15,
    fontFamily: fonts.Poppins.medium,
    color: '#FFFFFF',
  },
  dateTitle: {
    fontSize: 15,
    fontFamily: fonts.Poppins.medium,
    color: '#FFFFFF',
  },
  priceContainer: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  priceTitle: {
    fontSize: 15,
    fontFamily: fonts.Poppins.bold,
    color: '#FFFFFF',
  },
});

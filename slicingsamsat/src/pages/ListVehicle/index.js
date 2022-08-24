import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import VehicleCard from '../VehicleCard';

const ListVehicle = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Daftar Kendaraan'}
        onBack={() => navigation.navigate('Dashboard')}
      />
      <VehicleCard />
    </View>
  );
};

export default ListVehicle;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  vehicleCard: {
    padding: 16,
  },
});

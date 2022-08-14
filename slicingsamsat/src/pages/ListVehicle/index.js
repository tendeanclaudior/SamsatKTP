import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Gap, Header} from '../../components';
import VehicleCard from '../VehicleCard';

const ListVehicle = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Daftar Kendaraan'}
        onBack={() => navigation.navigate('Dashboard')}
      />
      <ScrollView showsVerticalScrollIndicator={true}>
        <Gap height={24} />
        <VehicleCard />
        <Gap height={15} />
        <VehicleCard />
        <Gap height={15} />
        <VehicleCard />
        <Gap height={15} />
        <VehicleCard />
        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

export default ListVehicle;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

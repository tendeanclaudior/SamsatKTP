import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BackgroundDS} from '../../assets';
import {Button, Card, Gap} from '../../components';
import ScrollViewHorizontal from '../ScrollViewHorizontal';

const Dashboard = ({navigation}) => {
  return (
    <ImageBackground source={BackgroundDS} style={styles.page}>
      <View style={styles.iconHN}>
        <Button click="iconOnly" icon="iconHelp" />
        <Button
          click="iconOnly"
          icon="iconNotif"
          onPress={() => navigation.navigate('Notification')}
        />
      </View>

      <View style={styles.titleContainer}>
        <Button click="iconOnly" icon="iconProfile" />
        <Text style={styles.text}>SAMSAT Sulawesi Utara</Text>
      </View>
      <Gap height={11} />
      <ScrollViewHorizontal />
      <View style={styles.secondtitleContainer}>
        <Text style={styles.secondtitle}>Daftar Kendaraan</Text>
        <TouchableOpacity>
          <Text style={styles.more}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Gap width={24} />
        <Card onPress={() => navigation.navigate('VehicleDetails')} />
        <Gap width={24} />
        <Card />
        <Gap width={24} />
        <Card />
        <Gap width={24} />
      </ScrollView>

      <View style={styles.buttom}>
        <Button
          click="iconOnly"
          icon="iconKendaraan"
          onPress={() => navigation.navigate('ListVehicle')}
        />
        <View style={styles.add}>
          <Button
            click="iconOnly"
            icon="iconTambah"
            onPress={() => navigation.navigate('AddVehicle')}
          />
        </View>
        <Button click="iconOnly" icon="iconVector" onPress={() => navigation.navigate('Profile')} />
      </View>
    </ImageBackground>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  iconHN: {
    flexDirection: 'row',
    padding: 9,
    justifyContent: 'space-between',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-Light',
    color: '#ffffff',
  },
  secondtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  secondtitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#2E2E2E',
  },
  more: {
    fontSize: 12,
    fontFamily: 'Poppins-Light',
    color: '#C2BFBF',
    marginTop: 9,
  },
  buttom: {
    backgroundColor: '#9A0000',
    width: '100%',
    height: 58,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 10,
    paddingHorizontal: 60,
  },
  add: {
    marginBottom: 25,
  },
});

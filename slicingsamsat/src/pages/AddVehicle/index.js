import {
  StyleSheet,
  Text,
  View,
  TextInput as Input,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {Gap, Header} from '../../components';
import {fonts, LogoAddVehicle} from '../../assets';

const AddVehicle = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Tambah Kendaraan'}
        onBack={() => navigation.navigate('Dashboard')}
      />
      <View style={styles.logoAddVehicle}>
        <LogoAddVehicle />
      </View>
      <Gap height={10} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Masukan <Text style={styles.titleBold}>nomor mesin</Text> yang ada di
          bagian bawah STNK anda
        </Text>
      </View>
      <View style={styles.inputTextContainer}>
        <Input style={styles.inputText} placeholder={'Nomor Mesin'} />
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.buttonSearch}>
            <Text style={styles.titleButton}>Cari Nomor Mesin</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddVehicle;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  logoAddVehicle: {
    paddingHorizontal: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#2E2E2E',
    width: 240,
  },
  titleBold: {
    fontFamily: fonts.Poppins.bold,
  },
  inputTextContainer: {
    paddingHorizontal: 52,
    marginTop: 20,
  },
  inputText: {
    backgroundColor: '#F3F2F2',
    textAlign: 'center',
    width: '100%',
    height: 46,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 7,
  },
  buttonSearch: {
    backgroundColor: '#9A0000',
    width: '100%',
    height: 39,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 7,
    justifyContent: 'center',
  },
  titleButton: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

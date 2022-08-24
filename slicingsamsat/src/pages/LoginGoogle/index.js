import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {
  fonts,
  IcGoogle,
  ImgJasaraharja,
  ImgPemprov,
  ImgSatlantas,
  LgBapenda,
  LgFikUk,
  LgUnklab,
} from '../../assets';
import {Gap} from '../../components';

const LoginGoogle = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.lgBapenda}>
        <LgBapenda />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.textWelcome}>SELAMAT DATANG</Text>
        <Text style={styles.textSubtitle}>
          Aplikasi Pengingat Pembayaran Pajak
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.bgContainer}>
          <View style={styles.bgGoogle}>
            <View style={styles.googleContainer}>
              <IcGoogle />
              <View style={styles.titleGoogle}>
                <Text style={styles.textGoogle}>Sign in with Google</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.wrapperContent}>
        <View style={styles.wrapperDaftarContainer}>
          <Text style={styles.wrapperDaftar}>Belum memiliki akun?</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.daftar}> Daftar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <LgFikUk />
          <ImgSatlantas />
          <ImgPemprov />
          <ImgJasaraharja />
          <Image source={LgUnklab} />
        </View>
      </View>
    </View>
  );
};

export default LoginGoogle;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  lgBapenda: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 80,
    marginTop: 20,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 51,
  },
  textWelcome: {
    fontSize: 36,
    fontFamily: fonts.Poppins.semibold,
    color: '#9A0000',
  },
  textSubtitle: {
    fontSize: 17,
    fontFamily: fonts.Poppins.regular,
    color: '#9A0000',
  },
  bgContainer: {
    paddingHorizontal: 55,
    marginTop: 99,
  },
  bgGoogle: {
    backgroundColor: '#4285F4',
    width: '100%',
    height: 44,
  },
  googleContainer: {
    flexDirection: 'row',
    paddingHorizontal: 9,
    paddingVertical: 9,
  },
  titleGoogle: {
    justifyContent: 'center',
    marginLeft: 57,
  },
  textGoogle: {
    fontSize: 14,
    fontFamily: fonts.Poppins.regular,
    color: '#FFFFFF',
  },
  wrapperContent: {
    justifyContent: 'space-between',
    flex: 1,
    padding: 15,
  },
  wrapperDaftarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  wrapperDaftar: {
    fontSize: 14,
    fontFamily: fonts.Poppins.regular,
    color: '#2E2E2E',
  },
  daftar: {
    fontFamily: fonts.Poppins.bold,
    color: '#000000',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 32,
  },
});

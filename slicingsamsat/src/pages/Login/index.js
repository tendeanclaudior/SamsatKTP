import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button, CheckBox, Gap, TextInput} from '../../components';
import {
  ImgJasaraharja,
  ImgPemprov,
  ImgSatlantas,
  LgBapenda,
  LgFikUk,
  LgUnklab,
} from '../../assets';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Gap height={20} />
      <View style={styles.logo}>
        <LgBapenda />
      </View>
      <Gap height={52} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>SELAMAT DATANG</Text>
        <Text style={styles.subTitle}>Aplikasi Pengingat Pembayaran Pajak</Text>
      </View>
      <Gap height={53} />
      <TextInput title={'Email'} />
      <Gap height={26} />
      <TextInput title={'Password'} />
      <View style={styles.wrapper}>
        <CheckBox title={'Ingat'} />
        <Text style={styles.text}>Lupa Password?</Text>
      </View>
      <Gap height={41} />
      <View style={styles.button}>
        <Button
          title={'Masuk'}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
      <View style={styles.WrapperContent}>
        <Text style={styles.wrapperDaftar}>
          Belum memiliki akun?<Text style={styles.daftar}> Daftar</Text>
        </Text>

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

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  logo: {
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    color: '#9A0000',
    fontFamily: 'Poppins-Bold',
  },
  subTitle: {
    fontSize: 17,
    color: '#9A0000',
    fontFamily: 'Poppins-Light',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    paddingHorizontal: 70,
    paddingTop: 16,
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
  button: {
    paddingHorizontal: 60,
  },
  wrapperDaftar: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#2E2E2E',
    textAlign: 'center',
  },
  daftar: {
    fontFamily: 'Poppins-Bold',
  },
  WrapperContent: {
    justifyContent: 'space-between',
    flex: 1,
    padding: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 32,
  },
});

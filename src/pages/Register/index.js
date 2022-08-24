import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Button, TextInput, Gap } from '../../components/atoms'
import { Footer } from "../../components/molecules"
import { ImgBapenda } from '../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Register = () => {
  return (
    <View style={styles.page}>
    <Gap height={20} />
    <View style={styles.container}>
    <Image source={ImgBapenda} />
    <Gap height={51} />
    <Text style={styles.title}>SELAMAT DATANG</Text>
    <Text style={styles.subTitle}>Aplikasi Pengingat Pembayaran Pajak</Text>
    <Gap height={31} />
    </View>
    <TextInput title="Email" />
    <Gap height={10} />
    <TextInput title="Nomor Handphone"/>
    <Gap height={10} />
    <TextInput title="Password" />
    <Gap height={21} />
    <View style={styles.button}>
    <Button label="Daftar" />
    </View>
    <View style={styles.daftarContainer}>
      <Text style={styles.textAkun}>Sudah memiliki akun? </Text>
      <Text style={styles.daftar}>Login</Text>
    </View>
    <Footer/>
  </View>
  )
}

export default Register

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontFamily: 'Poppins-SemiBold',
    color: '#9A0000',

  },
  subTitle: {
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    marginTop: -15,
    color: '#9A0000'
  },
  checkBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
   
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 60
  },
  textLeft: {
    paddingLeft: 8,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#2E2E2E',
  },
  textRight: {
    paddingRight: 66,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#2E2E2E',
  },
  button: {
    alignItems: 'center',
  },
  daftarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  textAkun: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#2E2E2E',
  },
  daftar: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#2E2E2E',
  },

})
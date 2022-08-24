import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Button, TextInput, Gap } from '../../components/atoms'
import { Footer } from "../../components/molecules"
import { ImgBapenda } from '../../assets'
import CheckBox from '@react-native-community/checkbox'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Gap height={20} />
      <View style={styles.container}>
      <Image source={ImgBapenda} />
      <Gap height={51} />
      <Text style={styles.title}>SELAMAT DATANG</Text>
      <Text style={styles.subTitle}>Aplikasi Pengingat Pembayaran Pajak</Text>
      <Gap height={53} />
      </View>
      <TextInput title="Email" />
      <Gap height={26} />
      <TextInput title="Password"/>
      <View style={styles. checkBoxContainer}>
      <View style={styles.checkBox}>
        <CheckBox/>
        <Text style={styles.textLeft}>Ingat</Text>
      </View>
        <TouchableOpacity activeOpacity={0.7}>
        <Text style={styles.textRight}>Lupa Password?</Text>
        </TouchableOpacity>
      </View>
      <Gap height={41} />
      <View style={styles.button}>
      <Button label="Masuk" onPress={() => navigation.navigate('Register')}/>
      </View>
      <View style={styles.daftarContainer}>
        <Text style={styles.textAkun}>Belum memiliki akun? </Text>
        <Text style={styles.daftar}>Daftar</Text>
      </View>
      <Footer/>
    </View>
  )
}

export default SignIn

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
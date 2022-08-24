import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ImgFik, ImgPemprov, ImgSatlantas, ImgUnklab } from '../../../assets'

const Footer = () => {
  return (
    <View style={styles.container}>
        <Image source={ImgFik} />
        <Image source={ImgSatlantas} />
        <Image source={ImgPemprov} />
        <Image source={ImgUnklab} />
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10,
    }
})
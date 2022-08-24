import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { IcBack } from '../../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Header = ({title, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
      <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.back}>
        <IcBack/>
      </View>
      </TouchableOpacity>
      )}
      <View>
      <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9A0000',
    paddingLeft: 23,
    flexDirection: 'row',
    alignItems: 'center',
    width: 411,
    height: 70

  },

  title:{
    fontSize: 20, 
    fontFamily: 'Poppins-Medium', 
    color: '#FFFFFF',
  },
  back: {
    padding: 10,
    marginRight: 23,
    marginLeft: -10,
  },
})
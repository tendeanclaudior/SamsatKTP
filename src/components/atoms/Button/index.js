import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = ({label, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
    <View style={styles.container}>
      <Text style={styles.button}>{label}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: '#9A0000',
        width: 301,
        height: 43,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        fontSize: 18,
        fontfamily: 'Poppins-Regular',
        color: '#FFFFFF',

    }

})
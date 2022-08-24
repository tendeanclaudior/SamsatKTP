import { StyleSheet, Text, View, TextInput as Input } from 'react-native'
import React from 'react'
import Gap from '../Gap'

const TextInput = ({title}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Gap height={8} />
        <Input style={styles.placeinput}/>
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#2E2E2E',
    },
    container: {
        paddingHorizontal: 55
    },
    placeinput: {
        borderWidth: 1,
        borderColor: '#9A0000',
        borderRadius: 15,
        height: 43,
        width: 301,
        paddingHorizontal: 15,
    }
})
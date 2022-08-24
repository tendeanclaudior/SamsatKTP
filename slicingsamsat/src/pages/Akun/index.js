import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { ExpandList, Header } from '../../components/molecules'
import { IcProfiles } from '../../assets'

const Akun = () => {
  return (
    <View style={styles.page}>
        <Header title="Akun" onBack={() => {'Dashboard'}}/>
      <ScrollView>
        <View style={styles.profile}>
          <Text style={styles.profileName}>Samsat Minut</Text>
        </View>
        <View style={styles.line}/>
        <ExpandList />
        <Text style={styles.logout}>Logout</Text>
    </ScrollView>
    </View>
  )
}

export default Akun

const styles = StyleSheet.create({
    page: {
        flex: 1,
        // backgroundColor: 'yellow',
    },
    profile: {
      alignItems: 'center',
      paddingTop: 46,
    },
    profileName: {
      paddingTop: 25,
      fontSize: 18,
      fontFamily: 'Poppins-Medium'
    },
    line: {
    paddingTop: 48,
    marginHorizontal: 27,
    borderBottomWidth: 0.2,
    color: '#F3F3F3'
    },
    logout:{
    fontFamily: 'Poppins-Medium',
    color: '#EB0808',
    fontSize: 18,
    height: 60,
    paddingLeft: 35,
    paddingTop:  5,
  }
})
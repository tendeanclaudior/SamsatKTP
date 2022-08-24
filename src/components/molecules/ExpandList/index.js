import React, { useState } from "react";
import {
  LayoutAnimation,
  StyleSheet, Text, View
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { IcDown, IcRight } from '../../../assets';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(value => !value);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  return (
    <>
      <TouchableOpacity onPress={toggleOpen} style={styles.heading} activeOpacity={0.6}>
        {title}
        <IcRight name={isOpen ? IcDown : IcDown} size={18} color="black" />
      </TouchableOpacity>
      <View style={[styles.list, !isOpen ? styles.hidden : undefined]}>
        {children}
      </View>
    </>
  );
};

const ExpandList = () => {
  const title=(
    <View>
    <Text style={styles.sectionTitle} >Detail Profil</Text>
    </View>
  )
  const title2=(
    <View>
    <Text style={styles.sectionTitle} >Edit Profil</Text>
    </View>
  )
  const body = (
    <View>
      <Text style={styles.sectionTitle} >Nama Lengkap:</Text>
      <Text style={styles.sectionTitle} >Tanggal Lahir:</Text>
      <Text style={styles.sectionTitle} >Alamat:</Text>
      <Text style={styles.sectionTitle} >Email:</Text>
      <Text style={styles.sectionTitle} >Nomor Handphone:</Text>
    </View>
  )
  const body2 = (
    <View>
      <Text style={styles.sectionTitle} >Nama Lengkap:</Text>
      <Text style={styles.sectionTitle} >Tanggal Lahir:</Text>
      <Text style={styles.sectionTitle} >Alamat:</Text>
    </View>
  )
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Accordion title={title}>
          {body}
        </Accordion>
        <View style={{alignItems: 'center'}} />
        <Accordion title={title2} >
          {body2}
        </Accordion>
        <View style={{alignItems: 'center'}} />
        <Text style={styles.sectionTitle2}>Logout</Text>
        <View style={{alignItems: 'center'}} />
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ExpandList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 49,
    paddingVertical: 30,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  safeArea: {
    flex: 1,
  },
  heading: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10
  },
  hidden: {
    height: 0,
  },
  list: {
    overflow: 'hidden'
  },
  sectionTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    height: 40,
    marginLeft: '5%',
  },
  sectionTitle2: {
    fontFamily: 'Poppins-Medium',
    color: '#EB0808',
    fontSize: 18,
    height: 60,
    marginLeft: '1%',
  },
  sectionDescription: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    height: 30,
    marginLeft: '5%',
  },
});


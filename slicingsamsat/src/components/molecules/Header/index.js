import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcBack, IcTrash} from '../../../assets';

const Header = ({title, onBack, onTrash}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity onPress={onBack} activeOpacity={0.5}>
          <View style={styles.iconback}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{title}</Text>
      {onTrash && (
        <TouchableOpacity onPress={onTrash} activeOpacity={0.5}>
          <View style={styles.iconTrash}>
            <IcTrash />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9A0000',
    paddingHorizontal: 23,
    paddingTop: 30,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconback: {
    padding: 10,
    marginRight: 24,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#ffffff',
  },
  iconTrash: {
    padding: 10,
    marginLeft: 120,
  },
});

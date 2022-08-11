import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  IcHelp,
  IcNotif,
  IcProfile,
  IcRincianK,
  IcTambah,
  IcVector,
} from '../../../assets';

const IconOnly = ({icon, onPress}) => {
  const Icon = () => {
    if (icon === 'iconHelp') {
      return (
        <View>
          <IcHelp />
        </View>
      );
    }
    if (icon === 'iconNotif') {
      return (
        <View>
          <IcNotif />
        </View>
      );
    }
    if (icon === 'iconProfile') {
      return (
        <View>
          <IcProfile />
        </View>
      );
    }
    if (icon === 'iconVector') {
      return (
        <View>
          <IcVector />
        </View>
      );
    }
    if (icon === 'iconKendaraan') {
      return (
        <View>
          <IcRincianK />
        </View>
      );
    }
    if (icon === 'iconTambah') {
      return (
        <View>
          <IcTambah />
        </View>
      );
    }
    return <IcHelp />;
  };

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.container}>
        <Icon />
      </View>
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

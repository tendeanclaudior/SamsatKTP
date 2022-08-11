import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IconOnly from './IconOnly';

const Button = ({title, click, icon, onPress}) => {
  if (click === 'iconOnly') {
    return <IconOnly icon={icon} onPress={onPress} />;
  } else {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9A0000',
    padding: 10,
    borderRadius: 15,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#ffffff',
    textAlign: 'center',
  },
});

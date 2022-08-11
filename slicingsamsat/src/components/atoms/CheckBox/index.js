import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Check from '@react-native-community/checkbox';
import Gap from '../Gap';

const CheckBox = ({title}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.page}>
      <Gap height={11} />
      <View style={styles.container}>
        <Check
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 60,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#2E2E2E',
  },
});

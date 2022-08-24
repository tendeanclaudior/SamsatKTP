import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';
import { IcRight } from '../../../assets';
import { Button } from '../../atoms';

const ExpandList2 = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section style={styles.container}>
      <List.Accordion style={styles.title}
        title="Detail Profil" 
        right={props => <List.Icon {...props} icon={IcRight} />}>
        <List.Item title="Nama Lengkap:" />
        <View style={styles.line}/>
        <List.Item title="Tanggal Lahir:" />
        <View style={styles.line}/>
        <List.Item title="Alamat:" />
        <View style={styles.line}/>
        <List.Item title="Email:" />
        <View style={styles.line}/>
        <List.Item title="Nomor Handphone:" />
        <View style={styles.line}/>
      </List.Accordion>
      <List.Accordion
        title="Edit Profil"
        right={props => <List.Icon {...props} icon={IcRight} />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="Nama Lengkap:" />
        <View style={styles.line}/>
        <List.Item title="Tanggal Lahir:" />
        <View style={styles.line}/>
        <List.Item title="Alamat:" />
        <View style={styles.line}/>
        <View style={styles.button}>
        <Button style={styles.selesai}label="Selesai"/>
        </View>
      </List.Accordion> 
    </List.Section>

  );
};

export default ExpandList2;

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  title:{
    paddingVertical: 2,
    fontSize: 40,
    fontFamily: 'Poppins-Medium',
  },
  line: {
    marginHorizontal: 8,
    borderBottomWidth: 0.2,
    color: '#F3F3F3'
    },
    button:{
      alignItems:'center',
      justifyContent: 'center',
      paddingTop: 49,
    }
})
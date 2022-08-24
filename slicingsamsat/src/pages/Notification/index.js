import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Header} from '../../components';
import {fonts} from '../../assets/fonts';
import {IcInfo, ImgNotif} from '../../assets';

const Notification = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Notifikasi'}
        onBack={() => navigation.navigate('Dashboard')}
      />
      <View style={styles.container}>
        <Text style={styles.titleNotifMinggu}>Minggu Ini</Text>
        <Gap height={15} />
        <View style={styles.notifMinggu}>
          <View style={styles.infoNotif}>
            <ImgNotif />
            <Text style={styles.titleNotif}>
              <Text style={styles.wrapperNotifDay}>
                Besok{' '}
                <Text style={styles.titleNotifDay}>
                  batas pembayaran pajak kendaraan dengan nomor polisi{' '}
                  <Text style={styles.policeNumber}>DB 8181 D</Text>
                </Text>
              </Text>
            </Text>
          </View>
          <View style={styles.iconInformation}>
            <IcInfo />
          </View>
        </View>
        <Gap height={15} />
        <Text style={styles.titleNotifMinggu}>Bulan Ini</Text>
        <Gap height={15} />
        <Text style={styles.titleNotifMinggu}>Tahun Ini</Text>
        <Gap height={15} />
        <Text style={styles.titleNotifMinggu}>Lainnya</Text>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    padding: 24,
  },
  titleNotifMinggu: {
    fontSize: 18,
    fontFamily: fonts.Poppins.medium,
    color: '#9A0000',
  },
  notifMinggu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoNotif: {
    flexDirection: 'row',
  },
  titleNotif: {
    fontSize: 14,
    fontFamily: fonts.Poppins.medium,
    color: '#2E2E2E',
    width: 300,
    marginLeft: 15,
  },
  wrapperNotifDay: {
    fontFamily: fonts.Poppins.bold,
  },
  titleNotifDay: {
    fontFamily: fonts.Poppins[300],
  },
  policeNumber: {
    fontFamily: fonts.Poppins.bold,
  },
  iconInformation: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

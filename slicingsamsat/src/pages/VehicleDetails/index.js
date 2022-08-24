import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Button, Gap, Header} from '../../components';
import {fonts, IcPen} from '../../assets';
import AddPic from './AddPic';
import VehicleDetailsContent from './VehicleDetailsContent';

const VehicleDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Rincian Kendaraan'}
        onBack={() => navigation.navigate('Dashboard')}
        onTrash={() => navigation.navigate('')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.picVehicle}>
          <Text style={styles.textPicVehicle}>Foto Kendaraan</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <AddPic title={'Foto Pertama'} />
            <AddPic title={'Foto Kedua'} />
            <AddPic title={'Foto Ketiga'} />
          </ScrollView>
        </View>
        <View style={styles.vehicleDetailContainer}>
          <View style={styles.bgAmountPay}>
            <Text style={styles.textAmountPay}>JUMLAH YANG HARUS DIBAYAR</Text>
          </View>
          <View style={styles.bgAmount}>
            <Text style={styles.textAmount}>Rp</Text>
            <Text style={styles.textAmount}>1.312.100</Text>
          </View>
          <View style={styles.beforePayContainer}>
            <View style={styles.bgBeforePay}>
              <Text style={styles.textBeforePay}>Pembayaran sebelum</Text>
            </View>
            <View style={styles.datePayContainer}>
              <Text style={styles.textDatePay}>26 Januari 2020</Text>
            </View>
          </View>
        </View>
        <View style={styles.vehicleNameContainer}>
          <Text style={styles.textVehicleName}>Nama Kendaraan</Text>
          <View style={styles.textInputContainer}>
            <TextInput placeholder={'Berikan nama untuk kendaraan anda'} />
            <TouchableOpacity style={styles.icPen} activeOpacity={0.5}>
              <IcPen />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.column}>
            <VehicleDetailsContent
              titleDetails={'NOMOR MESIN'}
              titleNameDetails={'HGAI-7588976'}
            />
            <VehicleDetailsContent
              titleDetails={'NOMOR POLISI'}
              titleNameDetails={'HGAI-DB 1848 C'}
            />
          </View>
          <View style={styles.column}>
            <VehicleDetailsContent
              titleDetails={'TAHUN PEMBUATAN'}
              titleNameDetails={'2016'}
            />
            <VehicleDetailsContent
              titleDetails={'MASA BERLAKU STNK'}
              titleNameDetails={'25 MEI 2023'}
            />
          </View>
          <View style={styles.column}>
            <VehicleDetailsContent
              titleDetails={'TYPE:'}
              titleNameDetails={'HSGD'}
            />
            <VehicleDetailsContent
              titleDetails={'SERI'}
              titleNameDetails={'HGA163'}
            />
          </View>
        </View>
        <View style={styles.button}>
          <Button title={'SIMPAN'} />
        </View>
        <Gap height={11} />
      </ScrollView>
    </View>
  );
};

export default VehicleDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  picVehicle: {
    padding: 24,
  },
  textPicVehicle: {
    fontSize: 18,
    fontFamily: fonts.Poppins.medium,
    color: '#585858',
  },
  vehicleDetailContainer: {
    padding: 24,
  },
  bgAmountPay: {
    backgroundColor: '#F3F2F2',
    width: '100%',
    height: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAmountPay: {
    fontSize: 14,
    fontFamily: fonts.Poppins.regular,
    color: '#585858',
  },
  bgAmount: {
    backgroundColor: '#F3F2F2',
    width: '100%',
    height: 50,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textAmount: {
    fontSize: 18,
    fontFamily: fonts.Poppins.medium,
    color: '#585858',
  },
  beforePayContainer: {
    flexDirection: 'row',
  },
  bgBeforePay: {
    backgroundColor: '#F3F2F2',
    width: 120,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    borderBottomLeftRadius: 10,
  },
  textBeforePay: {
    fontSize: 9,
    fontFamily: fonts.Poppins.regular,
    color: '#585858',
  },
  datePayContainer: {
    backgroundColor: '#F3F2F2',
    width: 261,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    borderBottomRightRadius: 10,
    marginLeft: 3,
  },
  textDatePay: {
    fontSize: 9,
    fontFamily: fonts.Poppins.regular,
    color: '#585858',
  },
  vehicleNameContainer: {
    padding: 24,
  },
  textVehicleName: {
    fontSize: 18,
    fontFamily: fonts.Poppins.medium,
    color: '#585858',
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: '#F3F3F3',
  },
  icPen: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  detailsContainer: {
    paddingHorizontal: 35,
  },
  column: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    marginTop: 15,
    paddingHorizontal: 95,
  },
});

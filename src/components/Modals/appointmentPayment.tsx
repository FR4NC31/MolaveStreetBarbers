import React from 'react';
import { Modal, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface AppointmentPaymentProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function AppointmentPayment({ visible, onClose, onConfirm }: AppointmentPaymentProps) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalBoxContainer}>
            <Text style={styles.modalBoxTitle}>THANK YOU!</Text>
            <Text style={styles.modalBoxText}>Your booking has been submitted. You'll be notified onced confirmed.</Text>
            <TouchableOpacity onPress={() => { onConfirm(); onClose(); }} style={styles.modalBoxBtn}>
                <Text style={styles.modalBoxBtnText}>Go to Appointments</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    width: 350,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBoxContainer: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    height: '80%',
  },
  modalBoxTitle: {
    fontSize: 26,
    fontFamily: 'Satoshi-Bold',
    textAlign: 'center',
    marginTop: 20,
  },
  modalBoxText: {
    fontSize: 20,
    fontFamily: 'Satoshi-Regular',
    textAlign: 'center',
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  modalBoxBtn: {
    backgroundColor: 'black',
    width: '75%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  modalBoxBtnText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Satoshi-Bold',
  },
});

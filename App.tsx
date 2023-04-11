/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';

function App(): JSX.Element {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <TouchableNativeFeedback
          onPress={() => setModalVisible(true)}
          background={TouchableNativeFeedback.Ripple('#979a96')}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Sample Button</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <Modal
        transparent
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
          style={styles.modalBg}>
          <TouchableWithoutFeedback>
            <View
              style={styles.modalContainer}>
              <Text style={styles.modalText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                eros mauris, porttitor eget dignissim quis, pharetra faucibus
                ipsum. Donec at lorem nulla. Phasellus et est nec arcu porta
                aliquam eu laoreet diam. Cras sed viverra lorem, ac dignissim
                nibh.
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#c9cec8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#fdfffd',
    paddingVertical: 12,
    paddingHorizontal: 28,
  },
  btnText: {
    color: '#000',
    fontSize: 16,
  },
  modalBg: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  modalText: {
    color: "#000",
    fontSize: 16,
    paddingVertical: 24,
    paddingHorizontal: 30
  }
});

export default App;

// import React, { useState } from 'react';
// import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
// import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

// export default function ModalComponent({ modalVisible, setModalVisible }) {
//     return (
//         <SafeAreaProvider>
//             <SafeAreaView style={styles.container}>
//                 <Modal
//                     animationType="slide"
//                     transparent={true}
//                     visible={modalVisible}
//                     onRequestClose={() => {
//                         Alert.alert('Modal has been closed.');
//                         setModalVisible(!modalVisible);
//                     }}>
//                     <View style={styles.modalView}>
//                         <Text style={styles.modalText}>Hello World!</Text>
//                         <Pressable
//                             style={[styles.button, styles.buttonClose]}
//                             onPress={() => setModalVisible(!modalVisible)}>
//                             <Text style={styles.textStyle}>Hide Modal</Text>
//                         </Pressable>
//                     </View>
//                 </Modal>
//             </SafeAreaView>
//         </SafeAreaProvider>
//     );
// }

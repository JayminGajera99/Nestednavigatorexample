import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Settingsscreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}> Screen3 </Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Nestedscreen3', {msg: 'from thirdscreen'})
        }
        style={styles.button}>
        <Text style={styles.buttonText}> Click Me! </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000025',
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
  },
  button: {
    backgroundColor: '#d6644d',
    marginTop: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
  },
});
export default Settingsscreen;

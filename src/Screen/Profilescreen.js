import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Profilescreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}> I am screen2 </Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Nestedscreen2', {msg: 'from secondscreen'})
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
    fontWeight: '700',
    fontSize: 30,
  },
  button: {
    backgroundColor: '#0275d8',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
  },
});
export default Profilescreen;

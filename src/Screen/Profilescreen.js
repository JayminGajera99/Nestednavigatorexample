import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Profilescreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}> Screen2 </Text>
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
export default Profilescreen;

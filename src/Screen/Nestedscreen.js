import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Nestedscreen = ({route}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}> {route.params.msg} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: '#00000025',
  },
  text: {
    color: '#000',
    fontWeight: '700',
    fontSize: 30,
  },
});

export default Nestedscreen;

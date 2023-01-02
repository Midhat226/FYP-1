import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextBox = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor="#999"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    color: '#48605d',
  },
});

export default TextBox;

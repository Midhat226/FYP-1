import { TextInput, StyleSheet } from 'react-native';

const TransparentTextInput = ({ value, onChangeText, placeholder }) => {
  return (
    <TextInput
      style={styles.textInput}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      underlineColorAndroid="transparent"
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: '80%',
    color: '#ffffff',
    borderWidth: 0,
    borderBottomWidth: 3,
    borderBottomColor: 'rgb(12,188,164)',
  },
});

export default TransparentTextInput;

import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableWithoutFeedback } from 'react-native';

const GradientButton = ({ text,onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
  <LinearGradient colors={['#a2d4cf', '#7bece1', '#11d1be']} 
      style={styles.linearGradient} 
      start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
        <Text style={styles.text}>{text}</Text>
  </LinearGradient>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
 linearGradient: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 15,
    marginTop: 15,
    borderRadius: 15,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: 'black',
    backgroundColor: 'transparent',
  },
});

export default GradientButton;

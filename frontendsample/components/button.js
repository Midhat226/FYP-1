import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientButton = ({ text }) => (
  <TouchableOpacity onPress={() => console.log('Button pressed')}>
  <LinearGradient colors={['#a2d4cf', '#7bece1', '#11d1be']} 
      style={styles.linearGradient} 
      start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
        <Text style={styles.text}>{text}</Text>
  </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
 linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    borderRadius: 15,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default GradientButton;
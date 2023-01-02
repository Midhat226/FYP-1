import {StyleSheet, View,Dimensions} from "react-native";

export default function GlassUI(props) {
  return (
      <View style={styles.card}>
        {props.children}
      </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 450,
    borderRadius: 40,
    padding: 40,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.50,
    shadowRadius: 6,
    elevation: 5,
  },
});

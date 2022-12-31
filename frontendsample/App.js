import {StyleSheet, Text, View, SafeAreaView,TouchableOpacity,Dimensions,} from "react-native";
import GradientButton from "./components/button"
import Header from "./components/header"
import { Video } from "expo-av";
const { height } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <Video
        source={require("./assets/video.mp4")}
        rate={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.backgroundVideo}
      />
      <View style={styles.card}>
       <Header title="Dastras" />
        <GradientButton text="Login" />
        <GradientButton text="Sign Up" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "center",
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,  // Fill the entire screen
    alignItems: 'center',  // Center align the content
    justifyContent: 'center'  // Center align the content
  },
    card: {
    width: '80%',
    background: 'linear-gradient(to right, #ffffff, #b2fff5, #00ffdc)',
    borderRadius: 30,
    padding: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.50,
    shadowRadius: 6,
    elevation: 5,
  },
});

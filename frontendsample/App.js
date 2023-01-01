import {StyleSheet, Text, View, SafeAreaView,TouchableOpacity,Dimensions,} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from "./components/button"
import Header from "./components/header"
import { Video } from "expo-av";
const { height } = Dimensions.get("window");

export default function App() {
  const gradientColors = ['#ffffff', '#b2fff5', '#00ffdc'];
  const gradientStart = { x: 0, y: 0 };
  const gradientEnd = { x: 1, y: 0 };
  return (
    <View style={styles.container}>
      <Video
        source={require("./assets/video.mp4")}
        rate={2.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.backgroundVideo}
      />
     <LinearGradient colors={gradientColors} start={gradientStart} end={gradientEnd}>
      <View style={styles.card}>
       <Header title="Dastras" />
      <GradientButton text="Login" />
      <GradientButton text="Sign Up" />
      </View>
    </LinearGradient>
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
  width: 300,
  height: 450,
  borderRadius: 40,
  padding: 50,
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.50,
  shadowRadius: 6,
  elevation: 5,
  },
});

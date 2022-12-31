import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View, SafeAreaView,TouchableOpacity,Dimensions,} from "react-native";
import GradientButton from "./components/button"
import TransparentTextInput from "./components/textInput"
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
      <GradientButton text="Login" />
      <GradientButton text="Sign Up" />
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
  }
});

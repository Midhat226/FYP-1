import {StyleSheet, View,Dimensions} from "react-native";
import {useState} from 'react';
import { Video } from "expo-av";
const { height } = Dimensions.get("window");
import GradientButton from "./components/button"
import Header from "./components/header"
import GlassUI from "./components/glassUI"
import TextBox from "./components/textBox"
// import MyDropdown from "./components/dropdown"
import MyDatePicker from "./components/datepicker"

export default function App() {
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
      <GlassUI>
      <MyDatePicker/>
      <Header title="Dastras" />
       <TextBox placeholder="Phone Number" />
       <TextBox placeholder="Email" />
      <GradientButton text="Login" />
      <GradientButton text="Sign Up" />
      </GlassUI>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Fill the entire screen
    alignItems: 'center',  // Center align the content
    justifyContent: 'center',  // Center align the content
    zIndex: 1,  // Set the zIndex to 1
  },
    backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "center",
    bottom: 0,
    right: 0,
  }
});


import React, { useState } from "react";
import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import pomodorroStyles from "../styles/pomodorro-styles";
import { windowWidth, windowHeight } from "../App.js";
import {
  SettingsIcon,
  PomodorroTimerIcon,
} from "../assets/svg-icons/svg-icons-export";

export default function PomodorroScreen({ navigation }) {
  const [pomodorroTimerIconSize, setPomodorroTimerIconSize] = useState({
    pomodorroIconWidth: windowWidth * 0.85,
    pomodorroIconHeight: windowWidth * 0.85,
  });

  return (
    <SafeAreaView style={localStyles.currentScreen}>
      {/*Settings button */}
      <TouchableOpacity
        style={localStyles.settingsButton}
        onPress={() => navigation.navigate("PomodorroSettingsScreen")}
      >
        <SettingsIcon width={56} height={56} />
      </TouchableOpacity>

      {/*Timer Icon */}
      <TouchableOpacity>
        <View>
          <PomodorroTimerIcon
            style={localStyles.pomodorroTimerButton}
            width={pomodorroTimerIconSize.pomodorroIconWidth}
            height={pomodorroTimerIconSize.pomodorroIconHeight}
            //Get size of the Pomodorro Icon
            onLayout={(event) => {
              const { width, height } = event.nativeEvent.layout;
            }}
          />
          <Text
            style={{
              ...localStyles.pomodorroTimerText,
              fontSize: Math.max(
                pomodorroTimerIconSize.pomodorroIconWidth * 0.1,
                10
              ),
            }}
          >
            {/* currentTimeLeft */}25:00
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  currentScreen: {
    backgroundColor: "#80BFFF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  settingsButton: { position: "absolute", top: 30, right: 20 },

  pomodorroTimerButton: {},

  pomodorroTimerText: {
    position: "absolute",
    top: "80%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    backgroundColor: "purple",
  },
});

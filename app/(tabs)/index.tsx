import { StyleSheet, Pressable } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Progress from "react-native-progress";
import { useRef, useState } from "react";
import { Audio } from "expo-av";

export default function TabOneScreen() {
  const totalTime: number = 30;
  const [timerProgress, setTimerProgress] = useState(totalTime);
  const [isTimerRunning, setTimerRunning] = useState(false);
  const TimerID = useRef<number | null>(null);

  const getStringMinutesAndSeconds = (timerProgress: number) => {
    const minutes = Math.floor(timerProgress / 60);
    const secondsRemaining = timerProgress % 60;
    return `${minutes}:${secondsRemaining.toString().padStart(2, "0")}`;
  };

  const PlaySound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/sounds/timer-terminer-342934.mp3"),
    );
    await sound.playAsync();
  };

  const setTimerState = () => {
    if (isTimerRunning) {
      return;
    }

    setTimerRunning(true);

    TimerID.current = setInterval(() => {
      setTimerProgress((previousTime) => {
        const newTime = previousTime - 1;
        if (newTime === 0 && TimerID.current) {
          clearInterval(TimerID.current);
          TimerID.current = null;
          setTimerRunning(false);
          PlaySound();
        }
        return newTime;
      });
    }, 1000);
  };

  return (
    <SafeAreaView style={localStyles.screen}>
      <Pressable onPress={setTimerState}>
        <Progress.Pie
          progress={timerProgress / totalTime}
          size={300}
          indeterminate={false}
          color="rgba(255,255,255,1)"
        />
      </Pressable>

      <Text style={localStyles.timeLeft}>
        {getStringMinutesAndSeconds(timerProgress)}
      </Text>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timeLeft: {
    fontSize: 30,
  },
});

import { StyleSheet, Pressable } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Progress from "react-native-progress";
import { useRef, useState } from "react";
import {useAudioPlayer} from 'expo-audio';

const audioTimerFinished = require('../../assets/sounds/timer-terminer-342934.mp3');

export default function TabOneScreen() {
  const playerTimerFinished = useAudioPlayer(audioTimerFinished);

  const totalTime: number = 30;
  const [timerProgress, setTimerProgress] = useState(totalTime);
  const [isTimerRunning, setTimerRunning] = useState(false);
  const TimerID = useRef<number | null>(null);

  /**
   * @function getStringMinutesAndSeconds()
   * @param timerProgress Seconds that need to be converted in format MM:SS string to render Time
   * @example <Text> {getStringMinutesAndSeconds(Seconds)} <Text>
   * @returns return String Stroke in format 25:00
   */
  const getStringMinutesAndSeconds = (timerProgress: number) => {
    const minutes = Math.floor(timerProgress / 60);
    const secondsRemaining = timerProgress % 60;
    return `${minutes.toString()}:${secondsRemaining.toString().padStart(2, "0")}`;
  };

 

  /**
   *
   *
   *Starts counting down from `totalTime` to zero, and plays a character sound when finished.
   *
   * This function sets the timer state and updates `timerProgress` every second.
   * When the timer reaches zero, it stops automatically and resets if needed.   * @returns {void}
   * */
  const setTimerState = () => {
    if (isTimerRunning) {
      return;
    }

    setTimerRunning(true);

    TimerID.current = setInterval(() => {
      setTimerProgress((previousTime) => {
        const newTime = previousTime - 1;
        if (newTime === 0 && TimerID.current) {
          playerTimerFinished.play();
          clearInterval(TimerID.current);
          TimerID.current = null;
          setTimerRunning(false);

          return totalTime;
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

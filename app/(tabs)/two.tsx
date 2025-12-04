import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useEffect, useRef, useState } from "react";

export default function TabTwoScreen() {
  const [currentTime, setCurrentTime] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setCurrentTime((prev) => {
        const newTime = prev + 1;
        if (newTime === 10 && intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        return newTime;
      });
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{currentTime}</Text>
      <Button title="Start" onPress={startTimer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

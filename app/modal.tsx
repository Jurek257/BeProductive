import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, TextInput, Pressable } from "react-native";
import { useState } from "react";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View, SafeAreaView, useThemeColor } from "@/components/Themed";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Spacer } from "../components/Spacer.tsx";

const backgroundColor = useThemeColor({}, "background");
const textColor = useThemeColor({}, "text");
const accentColor = useThemeColor({}, "tint");

export default function ModalScreen() {
  // const [eventName, setEventName] = useState("");
  const [mode, setMode] = useState("date");
  const [visibility, setVisibility] = useState(false);
  const [date, setDate] = useState(new Date(745837539847)); // To DO , initialize current Date
  const [time, setTime] = useState(null); // To DO , initialize current Time

  const onChange = (event, selectedDatetime) => {
    setVisibility(false);
    setDate(selectedDatetime);
  };

  const showMode = (currentMode) => {
    setVisibility(true);
    setMode(currentMode);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Your event"
        // value={eventName}
        // onChangeText={setEventName}
        style={styles.textInput}
      />

      <Spacer height={40} />

      <View style={styles.datetimeContainer}>
        <View style={styles.dateTimeSelector}>
          <Text>Begin from:</Text>

          <View style={styles.dateAndTime}>
            <Pressable onPress={() => showMode("date")}>
              <Text>{date}</Text>
            </Pressable>
            <Pressable onPress={() => showMode("time")}>
              <Text>{time}</Text>
            </Pressable>
          </View>
        </View>

        <Spacer height={40} />

        <View style={styles.dateTimeSelector}>
          <Text>Untill:</Text>

          <View style={styles.dateAndTime}>
            <Pressable onPress={() => showMode("date")}>
              <Text>{date}</Text>
            </Pressable>
            <Pressable onPress={() => showMode("time")}>
              <Text>{time}</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable style={styles.createButton}>
        <Text
          style={{
            textAlign: "center",
          }}
        >
          Create
        </Text>
      </Pressable>

      {visibility && (
        <DateTimePicker
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          value={date}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    fontSize: 30,
  },
  datetimeContainer: {
    justifyContent: "space-between",
  },
  dateTimeSelector: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  dateAndTime: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#ff0000",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 12,
  },
  createButton: {
    marginTop: "auto",
    paddingVertical: 30,
    paddingHorizontal: 100,
    backgroundColor: "#4DA3FF",
  },
});

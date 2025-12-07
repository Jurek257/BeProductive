import { Button, Dimensions, Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useEffect, useRef, useState } from "react";
import { Calendar } from "react-native-big-calendar";
import { SafeAreaView } from "react-native-safe-area-context";


import SvgMakeApointment from '../../assets/icons-svg/message-plus-square-svgrepo-com.svg';

const { width: screenWidth ,height: screenHeight} = Dimensions.get("window");

export default function TabTwoScreen() {
  const events = [
    {
      title: "Meeting",
      start: new Date(2020, 1, 11, 10, 0),
      end: new Date(2020, 1, 11, 10, 30),
    },
    {
      title: "Coffee break",
      start: new Date(2020, 1, 11, 15, 45),
      end: new Date(2020, 1, 11, 16, 30),
    },
  ];

  return (
    <SafeAreaView>
      <Calendar events={events} mode="day" height={screenHeight} />
      <Pressable style={styles.addApointmentIcon}>
        <SvgMakeApointment width={styles.addApointmentIcon.width} 
        height={styles.addApointmentIcon.height} 
        style={{flex:1}}/>
      </Pressable>
    </SafeAreaView>
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
  addApointmentIcon: {
    position: "absolute",
    width: 100,
    height: 100,
    right: screenWidth * 0.05,
    bottom: screenHeight * 0.25
  },
});

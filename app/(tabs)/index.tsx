import { StyleSheet , Pressable } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import { useState } from 'react';

export default function TabOneScreen() {
  const [timerProgress, setTimerProgress] = useState(1);
  const [isTimerRunning,setTimerRunning] = useState(false);

  const onTimerPress = () => {
    setTimerProgress(prev => Math.max(prev - 0.05 , 0));
  };

  return (
    <SafeAreaView style={localStyles.screen}>

    <Pressable onPress={onTimerPress}>
      <Progress.Pie progress={timerProgress} size={300} indeterminate={false} color="rgba(255,255,255,1)"/>
    </Pressable>
    
      <Text style={localStyles.timeLeft}>25:00</Text>
    </SafeAreaView>);
}

const localStyles = StyleSheet.create({
  screen: {
    flex:1 ,
    justifyContent: "center",
    alignItems: "center",
  },
  timeLeft: {
    fontSize:30
  }
 });

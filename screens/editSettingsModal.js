import { useContext, useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { SettingsContext } from "../context/settingsContext";

export default function EditSettingsModal({ route, navigation }) {
  const { settingsRowKey, settingsIndexKey } = route.params;
  const { settingsList, setSettingsList } = useContext(SettingsContext);

  const [currentValue, setValue] = useState(
    settingsList[settingsRowKey][settingsIndexKey]
  );

  return (
    <View style={localStyles.moduleScreen}>
      <Text style={localStyles.text}>{currentValue}</Text>
    </View>
  );
}

const localStyles = StyleSheet.create({
  moduleScreen: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 36, color: "#fff" },
});

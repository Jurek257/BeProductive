import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { SettingsContext } from "../context/settingsContext";

//Quadrat TouchableOpacity Component Settings where be showing current value of setting
export default function QuadratInputSettingsField({
  navigation,
  settingsRowKey,
  settingsIndexKey,
}) {
  const { settingsList } = useContext(SettingsContext);
  const currentValueOfSetting = settingsList[settingsRowKey][settingsIndexKey];
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("EditSettingsModal", {
          settingsRowKey,
          settingsIndexKey,
        });
      }}
    >
      <Text>{currentValueOfSetting}</Text>
    </TouchableOpacity>
  );
}

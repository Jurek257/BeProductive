import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { defaultPomodorroSettings } from "../storage/defaultPomodorroSettings";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settingsList, setSettingsList] = useState(defaultPomodorroSettings);

  useEffect(() => {
    const loadSettings = async () => {
      const json = await AsyncStorage.getItem("settingsList");
      if (json) setSettingsList(JSON.parse(json));
    };

    loadSettings();
  }, []);

  const updateSetting = async (rowKey, settingIndex, setValue) => {
    const newSetting = {
      ...settingsList,
      [rowKey]: { ...settingsList[rowKey], [settingIndex]: setValue },
    };
    setSettingsList(newSetting);
    await AsyncStorage.setItem("settingsList", JSON.stringify(newSetting));
  };

  return (
    <SettingsContext.Provider value={{ settingsList, setSettingsList }}>
      {children}
    </SettingsContext.Provider>
  );
};

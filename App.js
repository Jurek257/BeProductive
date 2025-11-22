import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EditSettingsModal from "./screens/editSettingsModal";
import PomodorroScreen from "./screens/pomodorro-screen";
import PomodorroSettingsScreen from "./screens/pomodorro-settings-screen";
import pomodorroStyles from "./styles/pomodorro-styles";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PomodorroScreen">
        <Stack.Screen
          name="PomodorroScreen"
          component={PomodorroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PomodorroSettingsScreen"
          component={PomodorroSettingsScreen}
          options={{ headerShown: false }}
        />

        {/*    <Stack.Screen
          name="EditSettingsModal"
          component={EditsettingsModal}
          options={{ presentation: "modal", headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { windowWidth, windowHeight };

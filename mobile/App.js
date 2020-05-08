import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PermissionContext from "./context/PermissionContext";
import { askForMultiPermissions } from "./context/PermissionContext";
import ReportContext from "./context/ReportContext";
import { ReportProvider } from "./context/ReportContext";

import Home from "./screens/Home";
import Report from "./screens/Report";
import ReportDetails from "./screens/ReportDetails";
import Camera from "./screens/Camera";

const Stack = createStackNavigator();

const Screens = () => {
  const askForMultiIPermission = React.useContext(PermissionContext);

  React.useEffect(() => {
    askForMultiIPermission();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Report"
          component={Report}
          options={{ title: "Add new Report" }}
        />
        <Stack.Screen
          name="ReportDetails"
          component={ReportDetails}
          options={{ title: "Add Report Details" }}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          // options={{ title: "Add Report Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <PermissionContext.Provider value={askForMultiPermissions}>
      <ReportProvider>
        <Screens />
      </ReportProvider>
    </PermissionContext.Provider>
  );
}

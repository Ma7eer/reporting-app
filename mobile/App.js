import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PermissionContext from "./context/PermissionContext";
import { ReportProvider } from "./context/ReportContext";
import { ImageProvider } from "./context/ImageContext";

import { askForMultiPermissions } from "./context/PermissionContext";

import Home from "./screens/Home";
import Reports from "./screens/Reports";
import ReportForm from "./screens/Forms/ReportForm";
import ReportItems from "./screens/ReportItems";
import ReportItemForm from "./screens/Forms/ReportItemForm";
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
          name="Reports"
          component={Reports}
          options={{ title: "Reports" }}
        />
        <Stack.Screen
          name="ReportForm"
          component={ReportForm}
          options={{ title: "Add new report" }}
        />
        <Stack.Screen
          name="ReportItems"
          component={ReportItems}
          options={{ title: "Report items" }}
        />
        <Stack.Screen
          name="ReportItemForm"
          component={ReportItemForm}
          options={{ title: "Add new report item" }}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{ title: "Take Picture of Defect" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <PermissionContext.Provider value={askForMultiPermissions}>
      <ReportProvider>
        <ImageProvider>
          <Screens />
        </ImageProvider>
      </ReportProvider>
    </PermissionContext.Provider>
  );
}

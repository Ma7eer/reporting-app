import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PermissionContext from "./context/PermissionContext";
import { ReportProvider } from "./context/ReportContext";
import { ImageProvider } from "./context/ImageContext";

import { askForMultiPermissions } from "./context/PermissionContext";

import Home from "./screens/Home";
import ReportsList from "./screens/ReportsList";
import ReportForm from "./screens/ReportsForm";
import ReportDetails from "./screens/ReportDetails";
import DefectsList from "./screens/DefectsList";
import DefectsForm from "./screens/DefectsForm";
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
          name="ReportsList"
          component={ReportsList}
          options={{ title: "All Reports" }}
        />
        <Stack.Screen
          name="ReportsForm"
          component={ReportForm}
          options={{ title: "Add new report" }}
        />
        <Stack.Screen
          name="ReportDetails"
          component={ReportDetails}
          options={{ title: "Report Details" }}
        />
        <Stack.Screen
          name="DefectsList"
          component={DefectsList}
          options={{ title: "All defects" }}
        />
        <Stack.Screen
          name="DefectsForm"
          component={DefectsForm}
          options={{ title: "Add new defect" }}
        />
        {/* <Stack.Screen
          name="ReportItemForm"
          component={ReportItemForm}
          options={{ title: "Add new report item" }}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{ title: "Take Picture of Defect" }}
        /> */}
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

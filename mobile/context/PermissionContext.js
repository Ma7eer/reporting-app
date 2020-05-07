import * as React from "react";
import * as Permissions from "expo-permissions";

const PermissionContext = React.createContext();

export async function askForMultiPermissions() {
  const { status, expires, permissions } = await Permissions.getAsync(
    Permissions.LOCATION,
    Permissions.CAMERA,
    Permissions.CAMERA_ROLL
  );
  if (status !== "granted") {
    alert("Hey! You have not enabled selected permissions");
    await Permissions.askAsync(
      Permissions.LOCATION,
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );
  }
}

export default PermissionContext;

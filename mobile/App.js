import * as React from "react";
import {
  Platform,
  StyleSheet,
  View,
  Button,
  Alert,
  Text,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const FrontPage = ({ createTwoButtonAlert }) => (
  <View style={styles.container}>
    <Button
      title="Press to start camera"
      color="#f194ff"
      onPress={createTwoButtonAlert}
    />
  </View>
);

const CameraView = ({ goBackAlert }) => {
  const camera = React.useRef(null);
  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={camera}
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
        flashMode={Camera.Constants.FlashMode.auto}
      >
        <View
          style={{
            flex: 0,
            flexDirection: "row",
            justifyContent: "center",
            // flex: 1,
            // alignSelf: "center",
            // position: "absolute",
            // bottom: 0,
          }}
        >
          <TouchableOpacity
            onPress={async () => {
              if (camera.current) {
                console.log("snap snap");
                let photo = await camera.current.takePictureAsync({
                  // base64: true,
                });
                console.log(photo.base64);
                let location = await Location.getCurrentPositionAsync({});
                let lat = location.coords.latitude;
                let long = location.coords.longitude;

                // http request
                let header = new Headers();
                header.append("Accept", "application/json");

                let data = new FormData(photo);
                // data.append();

                let url = "";
                let req = new Request(url, {
                  method: "POST",
                  headers: header,
                  mode: "no-cors",
                  body: data,
                });
                let res = await fetch(req);
                console.log(res);
              }
            }}
            style={{
              flex: 0,
              backgroundColor: "#fff",
              borderRadius: 5,
              padding: 15,
              paddingHorizontal: 20,
              alignSelf: "center",
              margin: 20,
            }}
          >
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.2,
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={goBackAlert}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              Go Back
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default function App() {
  const [hasPermission, setHasPermission] = React.useState(null); // for cam
  const [camera, setCamera] = React.useState("OFF");

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();

    async function checkMultiPermissions() {
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
    checkMultiPermissions();
  }, []);

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Open Camera?",
      "Click YES to open camera",
      [
        {
          text: "YES",
          onPress: () => setCamera("ON"),
          style: "default",
        },
        {
          text: "Cancel",
          onPress: () => setCamera("OFF"),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );

  const goBackAlert = () =>
    Alert.alert(
      "Go back?",
      "Click YES to go back to front page",
      [
        {
          text: "YES",
          onPress: () => setCamera("OFF"),
          style: "cancel",
        },
        {
          text: "Cancel",
          onPress: () => setCamera("ON"),
          style: "default",
        },
      ],
      { cancelable: false }
    );

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      {camera === "OFF" ? (
        <FrontPage createTwoButtonAlert={createTwoButtonAlert} />
      ) : (
        <CameraView goBackAlert={goBackAlert} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 128,
    width: 128,
    borderRadius: 64,
  },
  image: {
    height: 128,
    width: 128,
    borderRadius: 64,
  },
});

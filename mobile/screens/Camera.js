import * as React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Camera } from "expo-camera";

import ImageContext from "../context/ImageContext";

const CameraScreen = ({ navigation }) => {
  const camera = React.useRef(null);
  const { imageUrl, setImageUrl } = React.useContext(ImageContext);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
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
          }}
        >
          <TouchableOpacity
            onPress={async () => {
              try {
                if (camera.current) {
                  let photo = await camera.current.takePictureAsync({
                    // base64: true,
                  });
                  setImageUrl(photo.uri);

                  let location = await Location.getCurrentPositionAsync({});
                  let lat = location.coords.latitude;
                  let long = location.coords.longitude;

                  // my network ip address
                  let url = "http://192.168.68.101:8000";

                  let res = await axios({
                    url: url,
                    method: "POST",
                    data: createFormData(photo, { lat, long }),
                  });
                  console.log("data: ", createFormData(photo, { lat, long }));
                  navigation.navigate("ReportDetails");
                }
              } catch (e) {
                console.log(e);
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
      </Camera>
    </View>
  );
};

export default CameraScreen;

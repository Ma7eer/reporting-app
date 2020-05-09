import * as React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Button, Input, Divider, Image } from "react-native-elements";

import ImageContext from "../context/ImageContext";

const ReportDetails = ({ navigation }) => {
  const { imageUrl, setImageUrl } = React.useContext(ImageContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Text>Enter report details</Text>
      <Divider style={{ backgroundColor: "blue" }} />

      {/* defect ID */}
      <Input
        label="Defect ID"
        placeholder="Defect ID"
        disabled={true}
        value="1"
      />
      {/* defect picture */}
      {/* <Image source={{ uri: "" }} style={{ width: 200, height: 200 }} /> */}
      {imageUrl.length > 0 ? (
        <>
          <Image
            source={{ uri: imageUrl }}
            style={{ width: 200, height: 200 }}
          />
          <Button
            title="Re-take picture?"
            onPress={() => {
              // setImageUrl("");
              navigation.navigate("Camera");
            }}
          />
        </>
      ) : (
        <Button
          title="Take defect picture"
          onPress={() => navigation.navigate("Camera")}
        />
      )}

      {/* defect type */}
      <Input label="Defect type" placeholder="Defect type" value="" />
      {/* defect location */}
      <Input label="Defect location" placeholder="Defect location" value="" />
      {/* defect width */}
      <Input label="Defect width" placeholder="Defect width" value="" />
      {/* defect length */}
      <Input label="Defect length" placeholder="Defect length" value="" />
      {/* defect thickness */}
      <Input label="Defect thickness" placeholder="Defect thickness" value="" />
      {/* defect notes */}
      <Input label="Notes" placeholder="Notes" value="" />
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Submit"
        touchSoundDisabled={false}
      />
    </View>
  );
};

export default ReportDetails;

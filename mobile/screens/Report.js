import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import { Button, Input } from "react-native-elements";

const Report = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Input label="Report ID" placeholder="Report ID" disabled={true} />
      <Input label="Report Name" placeholder="Enter Report name" />
      <Input label="Report Date" placeholder="Enter Report date" />
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Create New Report"
        touchSoundDisabled={false}
      />
    </View>
  );
};

export default Report;

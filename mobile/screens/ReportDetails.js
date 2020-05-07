import * as React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Button, Input } from "react-native-elements";

const ReportDetails = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Text>Report ID</Text>
      <Text>Report Name</Text>
      {/* defect ID */}
      {/* defect picture */}
      {/* defect type */}
      {/* defect location */}
      {/* defect width */}
      {/* defect length */}
      {/* defect thickness */}
      {/* defect notes */}
      <Input label="Report ID" placeholder="Report ID" disabled={true} />
      <Input label="Report Name" placeholder="Enter Report name" />
      <Input label="Report Date" placeholder="Enter Report date" />
      <Button
        onPress={() => navigation.navigate("Camera")}
        title="Create New Report"
        touchSoundDisabled={false}
      />
    </View>
  );
};

export default ReportDetails;

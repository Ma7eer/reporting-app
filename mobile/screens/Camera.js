import * as React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const Camera = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Text>Camera</Text>
    </View>
  );
};

export default Camera;

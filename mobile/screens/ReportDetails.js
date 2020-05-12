import * as React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

const ReportDetails = ({ route, navigation }) => {
  /* #region: routing parameter */
  const { rowData } = route.params;
  console.log(rowData);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 20,
      }}
    >
      <Text>
        ID: <Text>{rowData[0]}</Text>
      </Text>
      <Text>
        Name: <Text>{rowData[1]}</Text>
      </Text>
      <Text>
        Date: <Text>{rowData[2]}</Text>
      </Text>
      <Button
        title="See defect list"
        onPress={() => navigation.navigate("DefectsList", { id: rowData[0] })}
      />
      <Button
        title="Publish Report"
        onPress={() => console.log("Report is published!")}
        buttonStyle={{ backgroundColor: "green" }}
      />
    </View>
  );
};
export default ReportDetails;

import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import { Button, Input } from "react-native-elements";
// import DatePicker from "react-native-date-picker";

const Report = ({ navigation }) => {
  const [reportName, setReportName] = React.useState("");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Input
        label="Report ID"
        placeholder="Report ID"
        disabled={true}
        // value={() => "1"}
      />
      <Input
        label="Report Name"
        placeholder="Enter Report name"
        value={reportName}
        // onChange={(e) => setReportName(e.target.value)}
      />
      <Input
        label="Report Date"
        placeholder="Enter Report date"
        disabled={true}
        // value={() => Date.now()}
      />
      {/* <DatePicker date={date} onDateChange={setDate} /> */}
      <Button
        onPress={() => {
          console.log(reportName);
          navigation.navigate("Home");
        }}
        title="Create New Report"
        touchSoundDisabled={false}
      />
    </View>
  );
};

export default Report;

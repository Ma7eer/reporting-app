import * as React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

import TableElement from "../components/Table";

const ReportItems = ({ route, navigation }) => {
  const { id } = route.params;
  console.log(id);

  const tableHeaders = ["ID", "Type", "Notes", "coordinates", "Action"];
  const tableData = [
    ["1", "pothole", "many cracks", "24.0000, 11.0000", "Action"],
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Button
          onPress={() => navigation.navigate("DefectsForm")}
          title="Add New Defect"
          touchSoundDisabled={false}
        />
      </TouchableOpacity>
      <TableElement
        tableHeaders={tableHeaders}
        tableData={tableData}
        navigation={navigation}
        // page={page}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
  },
});

export default ReportItems;

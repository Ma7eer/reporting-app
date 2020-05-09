import * as React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

import TableElement from "../components/Table";

const ReportItems = ({ route, navigation }) => {
  const { page, rowData } = route.params;

  const tableHeaders = ["ID", "Name"];
  const tableData = [["1", "3"]];

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Button
          onPress={() => navigation.navigate("ReportForm", { page })}
          title="Add New Report item"
          touchSoundDisabled={false}
        />
      </TouchableOpacity>
      <TableElement
        tableHeaders={tableHeaders}
        tableData={tableData}
        navigation={navigation}
        page={page}
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

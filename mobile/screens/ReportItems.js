import * as React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";

const ReportItems = ({ navigation }) => {
  const tableHeaders = ["ID", "Name"];
  const tableData = [];
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Button
          onPress={() => navigation.navigate("ReportForm", { page })}
          title="Add New Report item"
          touchSoundDisabled={false}
        />
      </TouchableOpacity>

      <Table borderStyle={{ borderColor: "transparent" }}>
        <Row data={tableHeaders} style={styles.head} textStyle={styles.text} />
        {tableData.map((rowData, index) => (
          <TableWrapper key={index} style={styles.row}>
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={cellIndex === 3 ? Element(cellData, index) : cellData}
                textStyle={styles.text}
              />
            ))}
          </TableWrapper>
        ))}
      </Table>
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

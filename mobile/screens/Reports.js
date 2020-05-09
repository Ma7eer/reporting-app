import * as React from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";

import ReportContext from "../context/ReportContext";

const Reports = ({ route, navigation }) => {
  const { page } = route.params;

  const { potholeReportList, washoutReportList } = React.useContext(
    ReportContext
  );

  const [tableHeaders, setTableHeaders] = React.useState([
    "ID",
    "Name",
    "Date",
    "Action",
  ]);
  const [tableData, setTableData] = React.useState([]);

  React.useEffect(() => {
    if (page === "pothole") {
      setTableData(potholeReportList);
    } else if (page === "washout") {
      setTableData(washoutReportList);
    }
  }, [potholeReportList, washoutReportList]);

  const Element = (data, index) => (
    <View style={styles.btnContainer}>
      <Button
        style={styles.btn}
        onPress={() => navigation.navigate("ReportItems", { page })}
        title="View"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Button
          onPress={() => navigation.navigate("ReportForm", { page })}
          title="Add New Report"
          touchSoundDisabled={false}
        />
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <Button
          // onPress={() => navigation.navigate("Report")}
          title="Filter"
          touchSoundDisabled={false}
          disabled={true}
        />
      </TouchableOpacity> */}

      {/* table */}
      <ScrollView style={styles.dataWrapper}>
        <Table borderStyle={{ borderColor: "transparent" }}>
          <Row
            data={tableHeaders}
            style={styles.head}
            textStyle={styles.text}
          />

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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#808B97" },
  text: { margin: 6 },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
  btnContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  btn: {
    backgroundColor: "#78B7BB",
    borderRadius: 2,
    textAlign: "center",
  },
  dataWrapper: { marginTop: -1 },
});

export default Reports;

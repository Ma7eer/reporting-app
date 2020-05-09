import * as React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

import ReportContext from "../context/ReportContext";

import TableElement from "../components/Table";

const Reports = ({ route, navigation }) => {
  /* #region: routing parameter */
  const { page } = route.params;

  /* #region: react context */
  const { potholeReportList, washoutReportList } = React.useContext(
    ReportContext
  );

  /* #region: react state */
  const [tableData, setTableData] = React.useState([]);

  /* #region: react Effect */
  React.useEffect(() => {
    if (page === "pothole") {
      setTableData(potholeReportList);
    } else if (page === "washout") {
      setTableData(washoutReportList);
    }
  }, [potholeReportList, washoutReportList]);

  const tableHeaders = ["ID", "Name", "Date", "Action"];

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Button
          onPress={() => navigation.navigate("ReportForm", { page })}
          title="Add New Report"
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
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
});

export default Reports;

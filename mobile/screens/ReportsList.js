import * as React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

import ReportContext from "../context/ReportContext";

import TableElement from "../components/Table";

const ReportsList = ({ navigation }) => {
  /* #region: react context */
  const { reportList } = React.useContext(ReportContext);

  /* #region: react state */
  const [tableData, setTableData] = React.useState([]);

  /* #region: react Effect */
  React.useEffect(() => {
    setTableData(reportList);
  }, [reportList]);

  const tableHeaders = ["ID", "Name", "Date", "Action"];

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Button
          onPress={() => navigation.navigate("ReportsForm", { rowData: null })}
          title="Add New Report"
          touchSoundDisabled={false}
        />
      </TouchableOpacity>
      <TableElement
        tableHeaders={tableHeaders}
        tableData={tableData}
        navigation={navigation}
        nextRoute={"ReportsForm"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
});

ReportsList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ReportsList;

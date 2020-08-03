import * as React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import axios from "axios";

import ReportContext from "../context/ReportContext";

import TableElement from "../components/Table";

const ReportsList = ({ navigation }) => {
  /* #region: react context */
  const { reportList, setReportList } = React.useContext(ReportContext);

  /* #region: react state */
  const [tableData, setTableData] = React.useState([]);

  /* #region: react Effect */
  React.useEffect(() => {
    setTableData(reportList);
    axios({
      url: "http://192.168.68.101:3000/reports",
      method: "GET",
    }).then((res) => {
      // console.log(res.data.data);
      setReportList([...res.data.data]);
      setTableData([...res.data.data]);
    });
  }, []);

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

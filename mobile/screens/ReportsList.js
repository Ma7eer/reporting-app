import * as React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Button } from "react-native-elements";
import { useQuery } from "react-query";
import axios from "axios";

import ReportContext from "../context/ReportContext";

import TableElement from "../components/Table";

const fetchReports = () =>
  axios("http://192.168.68.117:3000/reports")
    .then((res) => res.data.data)
    .catch((e) => e);

const ReportsList = ({ navigation }) => {
  /* #region: react context */
  const { reportList, setReportList } = React.useContext(ReportContext);

  const { isLoading, isError, data, error } = useQuery("reports", fetchReports);

  /* #region: react Effect */
  React.useEffect(() => {
    setReportList(data);
  }, [reportList]);

  const tableHeaders = ["ID", "Name", "Date", "Action"];

  if (isLoading) return <Text>Loading...</Text>;

  if (error) return <Text>An error has occurred: {error.message}</Text>;

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
        tableData={reportList}
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

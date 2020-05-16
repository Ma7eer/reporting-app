import * as React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

import DefectContext from "../context/DefectContext";

import TableElement from "../components/Table";

const ReportItems = ({ route, navigation }) => {
  // const { id } = route.params;

  /* #region: react context */
  const { defectList } = React.useContext(DefectContext);

  /* #region: react state */
  const [tableData, setTableData] = React.useState([]);

  /* #region: react Effect */
  React.useEffect(() => {
    setTableData(defectList);
  }, [defectList]);

  const tableHeaders = ["ID", "Type", "Notes", "coordinates", "Action"];

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Button
          onPress={() => navigation.navigate("DefectsForm", { rowData: null })}
          title="Add New Defect"
          touchSoundDisabled={false}
        />
      </TouchableOpacity>
      <TableElement
        tableHeaders={tableHeaders}
        tableData={tableData}
        navigation={navigation}
        nextRoute={"DefectsForm"}
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

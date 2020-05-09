import * as React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { Button } from "react-native-elements";

// const Element = (data, index, rowData, navigation, page) => {
//   return (
//     <View style={styles.btnContainer}>
//       <Button
//         style={styles.btn}
//         onPress={() =>
//           navigation.navigate("ReportItems", {
//             page,
//             rowData: rowData,
//           })
//         }
//         title="View"
//       />
//     </View>
//   );
// };

const TableElement = ({ tableHeaders, tableData, navigation, page }) => (
  <ScrollView style={styles.dataWrapper}>
    <Table borderStyle={{ borderColor: "transparent" }}>
      <Row data={tableHeaders} style={styles.head} textStyle={styles.text} />

      {tableData.map((rowData, index) => (
        <TableWrapper key={index} style={styles.row}>
          {rowData.map((cellData, cellIndex) => (
            <Cell
              key={cellIndex}
              data={
                cellIndex === 3 ? (
                  <View style={styles.btnContainer}>
                    <Button
                      style={styles.btn}
                      onPress={() =>
                        navigation.navigate("ReportItems", {
                          page,
                          rowData: rowData,
                        })
                      }
                      title="View"
                    />
                  </View>
                ) : (
                  cellData
                )
              }
              textStyle={styles.text}
            />
          ))}
        </TableWrapper>
      ))}
    </Table>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
  },
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

export default TableElement;

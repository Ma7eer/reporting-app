import * as React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { Button } from "react-native-elements";

const TableElement = ({
  tableHeaders,
  tableData,
  navigation,
  page,
  nextRoute,
}) => {
  // convert array of object to array of arrays
  let output = tableData.map(function (obj) {
    // add an empty item to end of array so it can be the value rendered under the Action header
    obj[""] = "";
    return (
      Object.keys(obj)
        // .sort()
        .filter((key) => key !== "_id")
        .map(function (key) {
          return obj[key];
        })
    );
  });
  return (
    <ScrollView style={styles.dataWrapper}>
      <Table borderStyle={{ borderColor: "transparent" }}>
        <Row data={tableHeaders} style={styles.head} textStyle={styles.text} />

        {output.map((rowData, index) => (
          <TableWrapper key={index} style={styles.row}>
            {rowData.map((cellData, cellIndex) => {
              return (
                <Cell
                  key={cellIndex}
                  data={
                    // last item in array will be matched with Action Header
                    // which will render a button that navigates to another page
                    cellIndex === rowData.length - 1 ? (
                      <View style={styles.btnContainer}>
                        <Button
                          style={styles.btn}
                          onPress={() =>
                            navigation.navigate(nextRoute, {
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
              );
            })}
          </TableWrapper>
        ))}
      </Table>
    </ScrollView>
  );
};

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

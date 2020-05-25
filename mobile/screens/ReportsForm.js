import * as React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import { Button, Input } from "react-native-elements";

import ReportContext from "../context/ReportContext";

import { generateIndex, generateDate } from "../util/util";

const formSchema = {
  methods: {
    addNewReport: (prevState, { reportId, reportName, reportDate }) => {
      return [
        ...prevState,
        { reportId, reportName, reportDate, Action: "Action" },
      ];
    },
  },
};

const ReportsForm = ({ route, navigation }) => {
  /* #region: routing parameter */
  const { rowData } = route.params;

  /* #region: react context */
  const { setReportList } = React.useContext(ReportContext);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={
          rowData
            ? {
                reportName: rowData[1],
                reportId: rowData[0],
                reportDate: rowData[1],
                preparedBy: "Maher",
              }
            : {
                reportName: "",
                reportId: generateIndex(),
                reportDate: generateDate(),
                preparedBy: "Maher",
              }
        }
        onSubmit={async (values) => {
          await setReportList((prevState) =>
            formSchema.methods.addNewReport(prevState, values)
          );

          navigation.navigate("ReportsList");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          // resetForm,
        }) => (
          <>
            <Input
              label="Report Date"
              disabled={true}
              onChangeText={handleChange("reportId")}
              value={values.reportId}
            />
            <Input
              label="Enter Report Name"
              placeholder="Enter Report name"
              value={values.reportName}
              onBlur={handleBlur("reportName")}
              onChangeText={handleChange("reportName")}
              disabled={rowData ? true : false}
            />
            <Input
              label="Report Date"
              disabled={true}
              value={values.reportDate}
              onBlur={handleBlur("reportDate")}
              onChangeText={handleChange("reportDate")}
            />
            <Input
              label="Prepared By"
              disabled={true}
              value={values.preparedBy}
              onBlur={handleBlur("preparedBy")}
              onChangeText={handleChange("preparedBy")}
            />
            {rowData ? null : (
              <Button
                onPress={handleSubmit}
                title="Create New Report"
                touchSoundDisabled={false}
              />
            )}
          </>
        )}
      </Formik>
      {rowData ? (
        <View>
          <Button
            title="See defect list"
            onPress={() =>
              navigation.navigate("DefectsList", { id: rowData[0] })
            }
            style={styles.btn}
          />
          <Button
            title="Publish Report"
            onPress={() => console.log("Report is published!")}
            buttonStyle={{ backgroundColor: "green" }}
            style={styles.btn}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  btn: {
    margin: 10,
  },
});

ReportsForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ReportsForm;

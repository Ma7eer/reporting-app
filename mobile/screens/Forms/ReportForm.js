import * as React from "react";
import { View } from "react-native";
import { Button, Input } from "react-native-elements";
import { Formik } from "formik";

import ReportContext from "../../context/ReportContext";

import { generateIndex, generateDate } from "../../util/util";

const ReportForm = ({ route, navigation }) => {
  const { page } = route.params;
  const { setPotholeReportList, setWashoutReportList } = React.useContext(
    ReportContext
  );

  const addNewReport = (prevState, values) => {
    return [
      ...prevState,
      [values.reportId, values.reportName, values.reportDate, "Action"],
    ];
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Formik
        initialValues={{
          reportName: "",
          reportId: generateIndex(page),
          reportDate: generateDate(),
        }}
        onSubmit={async (values) => {
          if (page === "pothole") {
            await setPotholeReportList((prevState) =>
              addNewReport(prevState, values)
            );
          } else if (page === "washout") {
            await setWashoutReportList((prevState) =>
              addNewReport(prevState, values)
            );
          }
          navigation.navigate("Reports");
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
              label="Report Name"
              placeholder="Enter Report name"
              value={values.reportName}
              onBlur={handleBlur("reportName")}
              onChangeText={handleChange("reportName")}
            />
            <Input
              label="Report Date"
              disabled={true}
              value={values.reportDate}
              onBlur={handleBlur("reportDate")}
              onChangeText={handleChange("reportDate")}
            />
            <Button
              onPress={handleSubmit}
              title="Create New Report"
              touchSoundDisabled={false}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default ReportForm;

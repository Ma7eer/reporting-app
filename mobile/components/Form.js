import * as React from "react";
import { Formik } from "formik";
import { Button, Input } from "react-native-elements";

const ReportForm = ({
  form,
  initialValues,
  setReportList,
  methods,
  navigation,
}) => {
  if (form === "report") {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          await setReportList((prevState) =>
            methods.addNewReport(prevState, values)
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
    );
  }
};

export default ReportForm;

import * as React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";

import ReportContext from "../context/ReportContext";

import Form from "../components/Form";

import { generateIndex, generateDate } from "../util/util";

const formSchema = {
  initialValues: {
    reportName: "",
    reportId: generateIndex(),
    reportDate: generateDate(),
  },
  methods: {
    addNewReport: (prevState, values) => {
      return [
        ...prevState,
        [values.reportId, values.reportName, values.reportDate, "Action"],
      ];
    },
  },
};

const ReportsForm = ({ route, navigation }) => {
  /* #region: routing parameter */
  const { form } = route.params;

  /* #region: react context */
  const { setReportList } = React.useContext(ReportContext);

  return (
    <View style={styles.container}>
      <Form
        form={form}
        initialValues={formSchema.initialValues}
        setReportList={setReportList}
        methods={formSchema.methods}
        navigation={navigation}
      />
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
});

ReportsForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
};

export default ReportsForm;

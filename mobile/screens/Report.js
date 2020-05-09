import * as React from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { Button, Input } from "react-native-elements";
import { Formik } from "formik";

import ReportContext from "../context/ReportContext";

const Report = ({ navigation }) => {
  const { setReportList } = React.useContext(ReportContext);
  const [reportName, setReportName] = React.useState("");
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
        initialValues={{ reportName: "" }}
        onSubmit={async (values) => {
          await setReportList((prevState) => {
            return [
              {
                name: values.reportName,
                avatar:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
              },
              ...prevState,
            ];
          });
          await navigation.navigate("Home");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <>
            {/* <Input
              label="Report ID"
              placeholder="Report ID"
              disabled={true}
              value={() => "1"}
              onChange={handleChange}
            /> */}
            <Input
              label="Report Name"
              placeholder="Enter Report name"
              value={values.reportName}
              onBlur={handleBlur("reportName")}
              onChangeText={handleChange("reportName")}
            />
            {/* <Input
              label="Report Date"
              placeholder="Enter Report date"
              disabled={true}
              onChange={handleChange}
              value={() => Date.now()}
            /> */}
            {/* <DatePicker date={date} onDateChange={setDate} /> */}
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

export default Report;

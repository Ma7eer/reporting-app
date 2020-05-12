import * as React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { Formik } from "formik";

import ImageContext from "../../context/ImageContext";

import { generateIndex, generateDate } from "../util/util";

const ReportItemForm = ({ route, navigation }) => {
  /* #region: routing parameter */
  // const { page } = route.params;

  const { imageUrl, setImageUrl } = React.useContext(ImageContext);

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Formik
        initialValues={{
          defectId: generateIndex(),
          defectType: "",
          lat: "",
          long: "",
          width: "",
          length: "",
          thickness: "",
          notes: "",
        }}
        onSubmit={async (values) => {
          // if (page === "pothole") {
          //   await setPotholeReportList((prevState) =>
          //     addNewReport(prevState, values)
          //   );
          // } else if (page === "washout") {
          //   await setWashoutReportList((prevState) =>
          //     addNewReport(prevState, values)
          //   );
          // }
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
              label="Defect ID"
              disabled={true}
              onChangeText={handleChange("defectId")}
              value={values.defectId}
            />
            {imageUrl.length > 0 ? (
              <>
                <Image
                  source={{ uri: imageUrl }}
                  style={{ width: 200, height: 200 }}
                />
                <Button
                  title="Re-take picture?"
                  onPress={() => {
                    // setImageUrl("");
                    navigation.navigate("Camera");
                  }}
                />
              </>
            ) : (
              <Button
                title="Take defect picture"
                onPress={() => navigation.navigate("Camera")}
              />
            )}
            <Input
              label="Defect Type"
              placeholder="Enter Defect Type"
              value={values.defectType}
              onBlur={handleBlur("defectType")}
              onChangeText={handleChange("defectType")}
            />
            <View style={styles.multiInputRow}>
              <Input
                label="Latitude"
                disabled={true}
                onChangeText={handleChange("lat")}
                value={values.lat}
              />
              <Input
                label="Longitude"
                disabled={true}
                onChangeText={handleChange("long")}
                value={values.long}
              />
            </View>
            <View style={styles.multiInputRow}>
              <Input
                label="Width"
                placeholder="Enter width"
                value={values.width}
                onBlur={handleBlur("width")}
                onChangeText={handleChange("width")}
              />
              <Input
                label="Length"
                placeholder="Enter length"
                value={values.length}
                onBlur={handleBlur("length")}
                onChangeText={handleChange("length")}
              />
            </View>
            <Input
              label="Thickness"
              placeholder="Enter thickness"
              value={values.thickness}
              onBlur={handleBlur("thickness")}
              onChangeText={handleChange("thickness")}
            />
            <Input
              label="Notes"
              placeholder="Enter notes"
              value={values.notes}
              onBlur={handleBlur("notes")}
              onChangeText={handleChange("notes")}
            />

            <Button
              onPress={handleSubmit}
              title="Submit"
              touchSoundDisabled={false}
            />
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  multiInputRow: {
    flex: 0,
    flexDirection: "row",
    width: 200,
    // justifyContent: "center",
    // alignItems: "center",
    // alignSelf: "center",
    // alignContent: "center",
  },
});

export default ReportItemForm;

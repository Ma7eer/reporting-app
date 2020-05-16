import * as React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Picker,
} from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { Formik } from "formik";

import DefectContext from "../context/DefectContext";
import ImageContext from "../context/ImageContext";

import { generateIndex } from "../util/util";

const formSchema = {
  methods: {
    addNewDefect: (
      prevState,
      {
        defectId,
        reportId,
        lat,
        long,
        chainage,
        defectType,
        imageRef,
        length,
        width,
        depth,
        notes,
        date,
      }
    ) => {
      return [
        ...prevState,
        {
          defectId,
          reportId,
          lat,
          long,
          chainage,
          defectType,
          imageRef,
          length,
          width,
          depth,
          notes,
          date,
          Action: "Action",
        },
      ];
    },
  },
};

const ReportItemForm = ({ route, navigation }) => {
  /* #region: routing parameter */
  const { rowData } = route.params;
  console.log(rowData);

  /* #region: react context */
  const { setDefectList } = React.useContext(DefectContext);
  const { imageUrl, setImageUrl } = React.useContext(ImageContext);

  return (
    <SafeAreaView
      // contentContainerStyle
      style={{
        // flex: 1,
        // justifyContent: "flex-start",
        // alignItems: "center",
        margin: 20,
      }}
    >
      <ScrollView>
        <Formik
          initialValues={
            rowData
              ? {
                  defectId: rowData[0],
                  defectType: rowData[5],
                  lat: rowData[2],
                  long: rowData[3],
                  width: rowData[8],
                  length: rowData[7],
                  thickness: rowData[9],
                  notes: rowData[10],
                }
              : {
                  defectId: generateIndex(),
                  defectType: "",
                  lat: "",
                  long: "",
                  width: "",
                  length: "",
                  thickness: "",
                  notes: "",
                }
          }
          onSubmit={async (values) => {
            await setDefectList((prevState) =>
              formSchema.methods.addNewDefect(prevState, values)
            );

            navigation.navigate("DefectsList");
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
                disabled={rowData ? true : false}
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
                  disabled={rowData ? true : false}
                />
                <Picker
                  selectedValue={"km"}
                  style={{ height: 50, width: 150 }}
                  onValueChange={handleChange("widthUnit")}
                >
                  <Picker.Item label="km" value="km" />
                  <Picker.Item label="m" value="m" />
                </Picker>
                <Input
                  label="Length"
                  placeholder="Enter length"
                  value={values.length}
                  onBlur={handleBlur("length")}
                  onChangeText={handleChange("length")}
                  disabled={rowData ? true : false}
                />
                <Picker
                  selectedValue={"km"}
                  style={{ height: 50, width: 150 }}
                  onValueChange={handleChange("lengthUnit")}
                >
                  <Picker.Item label="km" value="km" />
                  <Picker.Item label="m" value="m" />
                </Picker>
              </View>
              <Input
                label="Thickness"
                placeholder="Enter thickness"
                value={values.thickness}
                onBlur={handleBlur("depth")}
                onChangeText={handleChange("depth")}
                disabled={rowData ? true : false}
              />
              <Picker
                selectedValue={"km"}
                style={{ height: 50, width: 150 }}
                onValueChange={handleChange("depthUnit")}
              >
                <Picker.Item label="km" value="km" />
                <Picker.Item label="m" value="m" />
              </Picker>
              <Input
                label="Notes"
                placeholder="Enter notes"
                value={values.notes}
                onBlur={handleBlur("notes")}
                onChangeText={handleChange("notes")}
                disabled={rowData ? true : false}
              />

              {rowData ? null : (
                <Button
                  onPress={handleSubmit}
                  title="Submit"
                  touchSoundDisabled={false}
                />
              )}
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
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

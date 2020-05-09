import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text h1 style={styles.header}>
        Select the report
      </Text>
      <Button
        title="Pothole reports"
        containerStyle={styles.button}
        titleStyle={styles.buttonTitle}
        onPress={() => navigation.navigate("Reports", { page: "pothole" })}
      />
      <Button
        title="Washout reports"
        containerStyle={styles.button}
        titleStyle={styles.buttonTitle}
        onPress={() => navigation.navigate("Reports", { page: "washout" })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    marginTop: 10,
  },
  button: {
    margin: 40,
  },
  buttonTitle: {
    fontSize: 40,
  },
});

export default Home;

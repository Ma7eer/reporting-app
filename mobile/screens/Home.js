import * as React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text h1 style={styles.header}>
        Inspection Report Application
      </Text>
      <Button
        title="Login"
        containerStyle={styles.button}
        titleStyle={styles.buttonTitle}
        onPress={() => navigation.navigate("ReportsList")}
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
    textAlign: "center",
  },
  button: {
    margin: 40,
  },
  buttonTitle: {
    fontSize: 40,
  },
});

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;

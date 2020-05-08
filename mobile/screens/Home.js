import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import { Button, ListItem } from "react-native-elements";

import ReportContext from "../context/ReportContext";

const Home = ({ navigation }) => {
  const { reportList, setReportList } = React.useContext(ReportContext);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <TouchableOpacity>
        <Button
          onPress={() => navigation.navigate("Report")}
          title="New Report"
          touchSoundDisabled={false}
        />
      </TouchableOpacity>

      <View style={{ padding: 0, width: 400, marginTop: 10 }}>
        {reportList.map((u, i) => {
          return (
            <TouchableOpacity key={i}>
              <ListItem
                roundAvatar
                title={u.name}
                // avatar={{ uri: u.avatar }}
                leftAvatar={{ source: { uri: u.avatar } }}
                bottomDivider
                containerStyle={{ margin: 6 }}
                onPress={() => navigation.navigate(`ReportDetails`)}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Home;

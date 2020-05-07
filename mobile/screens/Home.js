import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import { Button, Card, ListItem } from "react-native-elements";

const users = [
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
];

const Home = ({ navigation }) => {
  const [reports, setReports] = React.useState(users);
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
        {reports.map((u, i) => {
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

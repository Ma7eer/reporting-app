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

      {/* <Card
        containerStyle={{
          padding: 0,
          width: 300,
        }}
      > */}
      <View style={{ padding: 0, width: 400, marginTop: 10 }}>
        {users.map((u, i) => {
          return (
            <TouchableOpacity>
              <ListItem
                key={i}
                roundAvatar
                title={u.name}
                // avatar={{ uri: u.avatar }}
                leftAvatar={{ source: { uri: u.avatar } }}
                bottomDivider
                containerStyle={{ margin: 6 }}
              />
            </TouchableOpacity>
          );
        })}
      </View>

      {/* </Card> */}
    </View>
  );
};

export default Home;

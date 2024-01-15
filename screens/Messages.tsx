import { Avatar, Icon, Input, makeStyles } from "@rneui/themed";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import { messages } from "../constants/data";

const Messages = ({ navigation }) => {
  const styles = useStyles();
  const handleSwipRight = () => {
    navigation.navigate("TimeLine");
  };

  const renderMessages = ({ name, image, lastMessage, time }) => {
    return (
      <View style={styles.messageContainer}>
        <View style={styles.avtrContainer}>
          <View style={styles.imgContainer}>
            <Avatar size={65} rounded source={image} />
          </View>
          <View>
            <Text style={[styles.text, { fontWeight: "bold" }]}>{name}</Text>
            <Text style={[styles.text]}>{lastMessage}</Text>
          </View>
        </View>
        <View>
          <Text style={[styles.text]}>{time}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <View>
        <Input
          inputContainerStyle={styles.searchBar}
          placeholder="Search"
          leftIconContainerStyle={{
            marginLeft: 10,
            marginRight: 10,
          }}
          leftIcon={<Icon name="search" type="evilicon" />}
        />
        <FlatList
          data={messages}
          renderItem={({ item }) => renderMessages(item)}
        />
      </View>
    </SafeAreaView>
  );
};
export default Messages;

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: 40,
  },
  searchBar: {
    backgroundColor: theme.colors.grey4,
    borderRadius: 10,
    margin: 0,
    elevation: 0,
  },
  text: {
    color: theme.colors.black,
  },
  messageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  avtrContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imgContainer: {
    marginRight: 10,
  },
}));

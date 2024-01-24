import { Avatar, Icon, Input, makeStyles } from "@rneui/themed";
import { FlatList, Pressable, SafeAreaView, Text, View } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import { useContext } from "react";
import { AppContext } from "../../utils/store";

const Messages = ({ navigation }) => {
  const styles = useStyles();
  const { userData, setUserData } = useContext(AppContext);
  const handleClick = (withUser) => {
    console.log(withUser);
    navigation.navigate("Chat", {
      withUser: withUser,
    });
  };

  const renderMessages = ({ withUser, messages }) => {
    const user = userData.find((user) => user.username === withUser);
    const lastMessage = messages[messages.length - 1];
    return (
      <Pressable
        style={styles.messageContainer}
        onPress={() => handleClick(withUser)}
      >
        <View style={styles.avtrContainer}>
          <View style={styles.imgContainer}>
            <Avatar size={65} rounded source={user?.image} />
          </View>
          <View>
            <Text style={[styles.text, { fontWeight: "bold" }]}>
              {user?.name}
            </Text>
            <Text style={[styles.text]}>{lastMessage.message}</Text>
          </View>
        </View>
        <View>
          <Text style={[styles.text]}>{lastMessage.time}</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <GestureRecognizer>
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
            data={userData[0].conversations}
            renderItem={({ item }) => renderMessages(item)}
          />
        </View>
      </GestureRecognizer>
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

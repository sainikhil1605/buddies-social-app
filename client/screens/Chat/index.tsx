import { useContext, useEffect, useState } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import users from "../../constants/data";
import { Avatar, Icon, makeStyles } from "@rneui/themed";
import { useTheme } from "@rneui/themed";
import { Input } from "@rneui/themed";
import { Divider } from "@rneui/themed";
import { AppContext } from "../../utils/store";
import { formatTimeTo12Hr } from "../../utils/date";
import { useNavigation } from "@react-navigation/native";

const Chat = ({ navigation, route }) => {
  const { theme } = useTheme();
  const { userData, setUserData } = useContext(AppContext);
  const withUser = route?.params?.withUser;
  const styles = useStyles();
  const [text, setText] = useState("");
  // useEffect(() => {
  // navigation.getParent().setOptions({ tabBarStyle: { display: "none" } });
  //   return () => {
  //     navigation.getParent().setOptions({ tabBarStyle: { display: "flex" } });
  //   };
  // }, [navigation]);
  if (!withUser) return null;

  const messages = userData[0].conversations.find(
    (item) => item.withUser === withUser
  ).messages;

  const handleSend = () => {
    console.log(formatTimeTo12Hr(new Date()));
    const newMessages = messages.concat({
      message: text,
      from: "john_doe",
      time: formatTimeTo12Hr(new Date()),
    });
    const newConversations = userData[0].conversations.map((item) =>
      item.withUser === withUser
        ? { ...item, messages: newMessages, lastMessage: text }
        : item
    );
    // setUserData([{ ...userData[0], conversations: newConversations }]);
    userData[0].conversations = newConversations;

    setUserData([...userData]);
    setText("");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Avatar
          source={userData.find((user) => user.username === withUser).image}
          rounded
          size={50}
        />
        <Text style={styles.text}>{withUser}</Text>
      </View>
      <Divider color={theme.colors.grey0} />
      <View style={[styles.messagesContainer]}>
        <Input
          inputContainerStyle={[styles.msgInputContainer]}
          placeholder="Message..."
          value={text}
          onChangeText={(text) => setText(text)}
          rightIcon={
            text && (
              <Icon onPress={handleSend} name="send" type="feather" size={30} />
            )
          }
        />
        <View style={{ flexDirection: "column" }}>
          {messages.map(({ message, from }) => (
            <View
              style={{
                alignSelf: from === withUser ? "flex-start" : "flex-end",
              }}
            >
              <Text style={[styles.message]}>{message}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Chat;
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: 40,
  },
  text: {
    color: theme.colors.black,
    fontWeight: "bold",
    fontSize: 30,
  },
  messagesContainer: {
    flexDirection: "column-reverse",
    padding: 5,
    flex: 1,
  },
  msgInputContainer: {
    alignSelf: "flex-end",
    backgroundColor: theme.colors.grey4,
    padding: 10,
    fontSize: 20,
    color: theme.colors.black,
    borderRadius: 10,
    margin: 0,
    elevation: 0,
  },
  message: {
    backgroundColor: theme.colors.grey4,
    margin: 5,
    padding: 10,
    borderRadius: 20,
    maxWidth: "50%",
    color: theme.colors.black,
  },
}));

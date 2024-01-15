import { useContext } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  makeStyles,
  useThemeMode,
  useTheme,
  Avatar,
  Icon,
} from "@rneui/themed";
import { avatarData, postData } from "../constants/data";
import GestureRecognizer from "react-native-swipe-gestures";

const TimeLine = ({ navigation }) => {
  const styles = useStyles();
  const { theme } = useTheme();

  const Header = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Image
          resizeMode="contain"
          source={require("../assets/logo.png")}
          style={{
            width: 150,
            height: 40,
            backgroundColor: "none",
          }}
        />
        <Icon
          name="messenger"
          type="fontisto"
          size={30}
          color={theme.colors.black}
        />
      </View>
    );
  };
  const AvatarsContainer = () => {
    return (
      <View style={styles.avatarsContainer}>
        <FlatList
          horizontal
          alwaysBounceHorizontal
          data={avatarData}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Avatar
              size={70}
              containerStyle={{
                marginLeft: 5,
                marginRight: 5,
              }}
              imageProps={{ resizeMode: "contain", resizeMethod: "scale" }}
              rounded
              source={item.image}
            />
          )}
        />
      </View>
    );
  };
  const renderPosts = ({ name, image, profileImage }) => (
    <View>
      <View style={styles.heading}>
        <Avatar size={50} rounded source={profileImage} />
        <Text
          style={[
            styles.text,
            { fontSize: 15, fontWeight: "bold", paddingLeft: 10 },
          ]}
        >
          {name}
        </Text>
      </View>
      <Image
        resizeMode="contain"
        source={image}
        style={{
          width: "100%",
          height: 200,
          backgroundColor: "none",
        }}
      />
      <View style={styles.iconsContainer}>
        <View style={styles.innerIcnContainer}>
          <Icon
            name="heart-outline"
            type="ionicon"
            color={theme.colors.black}
            size={30}
          />
          <Icon
            name="comment"
            type="evilicon"
            color={theme.colors.black}
            size={40}
            style={{ transform: [{ scaleX: -1 }] }}
          />
          <Icon
            name="send"
            type="feather"
            color={theme.colors.black}
            size={30}
          />
        </View>
        <View>
          <Icon
            name="bookmark"
            type="feather"
            color={theme.colors.black}
            size={30}
          />
        </View>
      </View>
    </View>
  );
  const handleSwipeLeft = () => {
    navigation.navigate("Messages");
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <FlatList
        alwaysBounceVertical
        bounces
        alwaysBounceHorizontal={false}
        data={postData}
        renderItem={({ item }) => renderPosts(item)}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => (
          <>
            <Header />
            <AvatarsContainer />
          </>
        )}
      />
    </SafeAreaView>
  );
};
export default TimeLine;

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: 30,
  },
  text: {
    marginVertical: theme.spacing.lg,
  },
  heading: {
    color: theme.colors.black,
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.grey4,
  },
  avatarsContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  text: {
    color: theme.colors.black,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  innerIcnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "30%",
    alignContent: "center",
    alignItems: "center",
  },
}));

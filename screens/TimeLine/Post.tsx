import { Avatar, Icon, makeStyles, useTheme } from "@rneui/themed";
import { useState } from "react";
import { Image, Text, View } from "react-native";
import { avatarData } from "../../constants/data";

const Post = ({
  setPosts,
  id,
  name,
  image,
  profileImage,
  likes,
  caption,
  liked,
}) => {
  const styles = useStyles();
  const { theme } = useTheme();

  return (
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
            name={liked ? "heart" : "heart-outline"}
            type="ionicon"
            color={liked ? "red" : theme.colors.black}
            size={30}
            onPress={() =>
              setPosts((prev) => [
                ...prev.map((post) =>
                  post.id === id ? { ...post, liked: !post.liked } : post
                ),
              ])
            }
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
      <View style={{ padding: 10, paddingTop: 0 }}>
        <Text style={[styles.text, { paddingBottom: 0 }]}>
          liked by {likes}
        </Text>
        <View style={{ flexDirection: "row", paddingTop: 0 }}>
          <Text style={[styles.text, { fontWeight: "bold" }]}>{name}</Text>
          <Text style={[styles.text, { paddingLeft: 10 }]}>{caption}</Text>
        </View>
      </View>
    </View>
  );
};
export default Post;
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: 30,
  },

  heading: {
    color: theme.colors.black,
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: theme.colors.grey4,
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

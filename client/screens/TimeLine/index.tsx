import React, { memo, useContext, useState } from "react";

import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar
} from "react-native";
import {
  makeStyles,
  useThemeMode,
  useTheme,
  Avatar,
  Icon,
} from "@rneui/themed";
import { avatarData, postData } from "../../constants/data";
import GestureRecognizer from "react-native-swipe-gestures";
import Header from "./Header";
import AvatarsContainer from "./AvatarsContainer";
import Post from "./Post";
import { AppContext } from "../../utils/store";

const TimeLine = () => {
  const styles = useStyles();
  const { userData, setUserData,theme } = useContext(AppContext);
  const memoizedPosts = React.useMemo(() => userData, [userData]);
  
  return (
    <SafeAreaView style={[styles.container]}  >
      <StatusBar backgroundColor={theme==="black"?"black":"white"} barStyle={theme==="black"?"light-content":"dark-content"}/>
      <FlatList
        alwaysBounceVertical
        alwaysBounceHorizontal={false}
        data={memoizedPosts}
        renderItem={({ item }) =>
          item.posts.map((post) => (
            <Post
              setPosts={setUserData}
              name={item.name}
              profileImage={item.image}
              {...post}
              userId={item.id}
            />
          ))
        }
        keyExtractor={(item) => item.id}
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
    paddingTop: 0,
  },
}));

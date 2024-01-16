import React, { memo, useContext, useState } from "react";

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
import { avatarData, postData } from "../../constants/data";
import GestureRecognizer from "react-native-swipe-gestures";
import Header from "./Header";
import AvatarsContainer from "./AvatarsContainer";
import Post from "./Post";
import { AppContext } from "../../utils/store";

const TimeLine = () => {
  const styles = useStyles();
  const { posts, setPosts } = useContext(AppContext);
  const memoizedPosts = React.useMemo(() => posts, [posts]);
  return (
    <SafeAreaView style={[styles.container]}>
      <FlatList
        alwaysBounceVertical
        alwaysBounceHorizontal={false}
        data={memoizedPosts}
        renderItem={({ item }) => <Post setPosts={setPosts} {...item} />}
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
    paddingTop: 30,
  },
}));

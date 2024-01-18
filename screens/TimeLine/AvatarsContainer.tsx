import { Avatar, makeStyles } from "@rneui/themed";
import { FlatList, View } from "react-native";
import users from "../../constants/data";

const AvatarsContainer = () => {
  const styles = useStyles();
  return (
    <View style={styles.avatarsContainer}>
      <FlatList
        horizontal
        alwaysBounceHorizontal
        data={users}
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
export default AvatarsContainer;
const useStyles = makeStyles((theme) => ({
  avatarsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
}));

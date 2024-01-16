import { useNavigation } from "@react-navigation/native";
import { Icon, useTheme } from "@rneui/themed";
import { Image, View } from "react-native";

const Header = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
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
        source={require("../../assets/logo.png")}
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
        onPress={() => navigation.navigate("Messages")}
      />
    </View>
  );
};
export default Header;

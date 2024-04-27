import { Button, Input, useTheme } from "@rneui/themed";
import { MediaTypeOptions, launchImageLibraryAsync } from "expo-image-picker";
import { useContext, useEffect, useState } from "react";
import { Image, View } from "react-native";
import { AppContext } from "../../utils/store";

const Post = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const { userData, setUserDate } = useContext(AppContext);

  const { theme } = useTheme();
  const handlePress = async (type) => {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions[type],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      navigation.navigate("TimeLine");
      console.log("cancelled");
    }
  };
  useEffect(() => {
    const getImage = async () => await handlePress("photos");
    getImage();
  }, []);
  const handleSubmit = () => {
    // setuserDate((prev) => [
    //   ...prev,
    //   { id: posts.length + 1, name: "John Doe", likes: 0, image, caption },
    // ]);
    navigation.navigate("TimeLine");
  };
  const [caption, setCaption] = useState("");
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.white,
        paddingTop: 50,
        padding: 10,
      }}
    >
      <View style={{ alignItems: "flex-end" }}>
        <Button onPress={() => handleSubmit()} type="clear" title="Done" />
      </View>
      <Image source={{ uri: image }} style={{ height: 400 }} />
      <Input
        placeholder="Write a caption..."
        onChangeText={(e) => setCaption(e)}
      />
    </View>
  );
};
export default Post;

import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";
import IconButton from "./IconButton";

const ImagePicker = ({
  name,
  style,
  navigation,
  onTakeImage,
  setImage,
  size,
  type,
}) => {
  const handlePress = async (type) => {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions[type],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      onTakeImage();
    } else {
      console.log("cancelled");
    }
  };
};
export default ImagePicker;

import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";
import IconButton from "./IconButton";
import { useEffect } from "react";

const ImagePicker = ({
  name,
  style,
  navigation,
  onTakeImage,
  setImage,
  size,
  type,
}) => {
  useEffect(() => {
    handlePress(type);
  });
};
export default ImagePicker;

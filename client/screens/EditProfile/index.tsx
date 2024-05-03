import { Avatar, Button, Input, makeStyles } from "@rneui/themed";
import { Text, View } from "react-native";

const EditProfile = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ maxWidth: 100 }}>
          <Text>{`< Back`}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[styles.text, { textAlign: "center" }]}>
            Edit Profile
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Avatar
          size={64}
          rounded
          title="Fc"
          containerStyle={{ backgroundColor: "#3d4db7" }}
        />
        <Text style={[styles.text, { marginTop: 10 }]}>John Doe</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={styles.text}>Name</Text>
        <Input placeholder="Full Name" />
      </View>
    </View>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: theme.colors.white,
  },
  text: {
    color: theme.colors.black,
    fontSize: 15,
    fontWeight: "bold",
  },
}));
export default EditProfile;

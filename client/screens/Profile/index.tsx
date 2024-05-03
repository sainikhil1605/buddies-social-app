import { Button, makeStyles } from "@rneui/themed";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
const Profile = () => {
  const styles = useStyles();
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize: 20 }]}>username</Text>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Avatar
            size={64}
            rounded
            title="Fc"
            containerStyle={{ backgroundColor: "#3d4db7" }}
          />
          <Text style={[styles.text]}>John Doe</Text>
        </View>

        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={styles.text}>0</Text>
          <Text style={styles.text}>Posts</Text>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={styles.text}>0</Text>
          <Text style={styles.text}>Followers</Text>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={styles.text}>0</Text>
          <Text style={styles.text}>Following</Text>
        </View>
      </View>
      <View>
        <Button
          onPress={() => navigate.navigate("EditProfile")}
          buttonStyle={{ marginTop: 20, borderRadius: 5 }}
          title="Edit Profile"
        />
      </View>
    </View>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
    backgroundColor: theme.colors.white,
  },
  text: {
    color: theme.colors.black,
  },
}));
export default Profile;

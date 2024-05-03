import { Icon } from "@rneui/base";
import { Button, Card, makeStyles, useTheme } from "@rneui/themed";
import { Input } from "@rneui/themed";
import { useContext, useState } from "react";
import { SafeAreaView, Text, TextInput, View, Image } from "react-native";
import { AppContext } from "../../utils/store";
import axiosInstance from "../../utils/axiosInstance";

const Login = () => {
  const styles = useStyles();
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authenticate } = useContext(AppContext);
  const handleLogin = async () => {
    const user = { email, password };
    try {
      const data = await axiosInstance.post("/auth/login", user);
      if (data?.data.token) {
        authenticate(data.data.token);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <SafeAreaView style={styles.loginContainer}>
      <Card containerStyle={{ borderRadius: 10, padding: 20 }} theme={theme}>
        <View style={styles.loginLogo}>
          <Image
            resizeMode="center"
            source={
              theme.mode === "dark"
                ? require("../../assets/buddies-logo2.jpg")
                : require("../../assets/buddies-logo3.jpg")
            }
            style={{
              width: 150,
              height: 100,
              backgroundColor: "none",
              marginBottom: 10,
            }}
          />
        </View>

        <Input
          placeholder="Email"
          leftIcon={{
            type: "font-awesome",
            name: "user-circle",
            color: theme.colors.black,
          }}
          style={{ marginTop: 10 }}
          leftIconContainerStyle={{ marginRight: 10 }}
          onChangeText={(e) => setEmail(e)}
        />
        <Input
          placeholder="Password"
          leftIcon={
            <Icon
              name="eye-with-line"
              type="entypo"
              color={theme.colors.black}
              style={{ marginRight: 10 }}
            />
          }
          onChangeText={(e) => setPassword(e)}
          secureTextEntry={true}
        />
        <Button title="Login" onPress={handleLogin} />
      </Card>
    </SafeAreaView>
  );
};
const useStyles = makeStyles((theme) => ({
  loginContainer: {
    flex: 1,
    padding: 40,
    paddingTop: 20,
    backgroundColor: theme.colors.white,
    justifyContent: "center",
  },
  loginHeading: {
    color: theme.colors.black,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  loginLogo: {
    alignItems: "center",
  },
}));

export default Login;

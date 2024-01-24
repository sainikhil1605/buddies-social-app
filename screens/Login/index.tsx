import { Icon } from "@rneui/base";
import { Button, Card, makeStyles, useTheme } from "@rneui/themed";
import { Input } from "@rneui/themed";
import { useContext, useState } from "react";
import { SafeAreaView, Text, TextInput, View, Image } from "react-native";
import { AppContext } from "../../utils/store";

const Login = () => {
  const styles = useStyles();
  const { theme } = useTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLogged, setIsLogged } = useContext(AppContext);
  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      console.log("Logged in");
      setIsLogged(true);
    }
  };
  return (
    <SafeAreaView style={styles.loginContainer}>
      <Card containerStyle={{ borderRadius: 10, padding: 20 }} theme={theme}>
        <Card.Title style={styles.loginHeading}>
          <Image
            resizeMode="contain"
            source={require("../../assets/logo.png")}
            style={{ width: 150, height: 50 }}
          />
        </Card.Title>
        <Input
          placeholder="Username"
          leftIcon={{
            type: "font-awesome",
            name: "user-circle",
            color: theme.colors.black,
          }}
          leftIconContainerStyle={{ marginRight: 10 }}
          onChangeText={(e) => setUsername(e)}
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
}));

export default Login;

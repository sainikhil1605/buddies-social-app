import React, { useContext } from "react";
import { View, Platform, useColorScheme } from "react-native";
import { makeStyles, useThemeMode, useTheme } from "@rneui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppContext, AppProvider } from "../utils/store";
import TimeLine from "../screens/TimeLine";
import { Icon } from "@rneui/themed";
import Feed from "../screens/Feed";
import Messages from "../screens/Messages";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Post from "../screens/Post";
import Chat from "../screens/Chat";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function Navigation() {
  const { setMode, mode } = useThemeMode();
  const { isLogged } = useContext(AppContext);
  const ProfileStack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const MaterialTab = createMaterialTopTabNavigator();
  const { theme } = useTheme();
  console.log(isLogged, "isLogged");
  const handleOnPress = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
  const ProfileStackNavigator = () => {
    return (
      <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
        <ProfileStack.Screen name="Profile" component={Profile} />
        <ProfileStack.Screen name="EditProfile" component={EditProfile} />
      </ProfileStack.Navigator>
    );
  };
  const TabLineNavigator = () => {
    return (
      <MaterialTab.Navigator initialRouteName="TimeLine" tabBar={() => null}>
        <MaterialTab.Screen name="TimeLine" component={TimeLine} />
        <MaterialTab.Screen name="Messages" component={Messages} />
        <MaterialTab.Screen name="Chat" component={Chat} />
      </MaterialTab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.colors.background,
            borderTopWidth: 0,
          },
          headerShown: false,
        }}
      >
        {isLogged ? (
          <>
            <Tab.Screen
              name="TabLineNavigator"
              component={TabLineNavigator}
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Icon name="home" color={theme.colors.black} size={30} />
                ),
                tabBarLabel: () => null,
              }}
            />
            <Tab.Screen
              name="Feed"
              component={Feed}
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Icon
                    name="search"
                    type="evilicons"
                    color={theme.colors.black}
                    size={30}
                  />
                ),
                tabBarLabel: () => null,
              }}
            />

            <Tab.Screen
              name="Post"
              component={Post}
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Icon
                    name="diff-added"
                    type="octicon"
                    color={theme.colors.black}
                    size={30}
                  />
                ),

                tabBarLabel: () => null,
              }}
            />
            <Tab.Screen
              name="Reels"
              component={TimeLine}
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Icon
                    name="play-circle-outline"
                    type="ionicon"
                    color={theme.colors.black}
                    size={30}
                  />
                ),
                tabBarLabel: () => null,
              }}
            />
            <Tab.Screen
              name="ProfileNavigator"
              component={ProfileStackNavigator}
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Icon
                    name="user-circle"
                    type="font-awesome"
                    color={theme.colors.black}
                    size={30}
                  />
                ),
                tabBarLabel: () => null,
              }}
            />
          </>
        ) : (
          <Tab.Screen
            name="Login"
            component={Login}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Icon name="home" color={theme.colors.black} size={30} />
              ),
              tabBarLabel: () => null,
              tabBarShowLabel: false,
              tabBarIconStyle: { display: "none" },
            }}
          />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

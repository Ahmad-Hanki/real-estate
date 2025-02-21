import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const TabIcon = ({
  focused,
  title,
  icon,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => {
  return (
    <View className="flex-1  flex flex-col items-center">
      {icon}
      <Text
        className={`${
          focused
            ? "text-primary-300 font-rubik-medium"
            : "text-black-200 font-rubik"
        } text-xs w-full text-center mt-1`}
      >
       
        {title}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#006aFF1A",
          borderTopWidth: 1,
          minHeight: 70,

          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              focused={focused}
              title="Home"
              icon={
                <FontAwesome
                  name="home"
                  size={24}
                  color={focused ? "#0061ff" : "#666876"}
                />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              focused={focused}
              title="Explore"
              icon={
                <Feather
                  name="search"
                  size={24}
                  color={focused ? "#0061ff" : "#666876"}
                />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              focused={focused}
              title="Profile"
              icon={
                <MaterialCommunityIcons
                  name="account"
                  size={24}
                  color={focused ? "#0061ff" : "#666876"}
                />
              }
            />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({});

export default TabsLayout;

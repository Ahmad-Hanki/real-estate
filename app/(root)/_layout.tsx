import { Slot } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

const Layout = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    );
  }

  return <Slot />;
};

export default Layout;

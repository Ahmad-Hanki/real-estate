import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Properties = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Properties {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Properties;

import icons from "@/constants/icons";
import images from "@/constants/images";
import { login } from "@/lib/appwrite";
import React from "react";
import {
    Alert,
  Image,
  ImageProps,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SignIn = () => {
  const handleLogin = async () => {
    const result = await login();

    if (result) {
      console.log("Login Success", result);
    } else {
      Alert.alert('Error','An error occurred while logging in');
    }
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding as ImageProps}
          className="w-full h-4/6 "
          resizeMode="contain"
        />

        <View className="px-10 ">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to ReState
          </Text>

          <Text className="text-3xl font-rubik-bold text-black-300 text-center mb-2">
            Lets Get You Closer to {"\n"}{" "}
            <Text className="text-primary-300 ">your Ideal Home</Text>
          </Text>

          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Login to ReState with Google
          </Text>

          <TouchableOpacity
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5 flex-row justify-center items-center gap-2"
            onPress={handleLogin}
          >
            <Image
              source={icons.google as ImageProps}
              className="w-6 h-6 "
              resizeMode="contain"
            />
            <Text className="">Continue with Google</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SignIn;

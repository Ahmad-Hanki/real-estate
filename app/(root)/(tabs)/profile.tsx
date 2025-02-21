import { settings } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import {
  Image,
  ImageProps,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface SettingsItemProps {
  icon: ImageProps;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex-row items-center justify-between py-3"
  >
    <View className="flex-row items-center gap-3">
      <Image className="size-6" source={icon} />
      <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>
        {title}
      </Text>
    </View>

    {showArrow && (
      <Image source={icons.rightArrow as ImageProps} className="size-5" />
    )}
  </TouchableOpacity>
);

const Profile = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        contentContainerClassName="pb-32 px-7"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="text-xl font-rubik-bold ">Profile</Text>
          <Image source={icons.bell as ImageProps} className="size-5" />
        </View>
        <View className="flex-row justify-center mt-5">
          <View className="flex-col items-center relative mt-5">
            <Image
              source={images.avatar as ImageProps}
              className="size-44 relative rounded-full"
            />

            <TouchableOpacity className="absolute bottom-8 right-6">
              <Image source={icons.edit as ImageProps} className=" size-9" />
            </TouchableOpacity>

            <Text className="text-2xl font-rubik-bold mt-2">Ahmad</Text>
          </View>
        </View>
        <View className="flex-col mt-10">
          <SettingsItem
            title="My Bookings"
            icon={icons.calendar as ImageProps}
          />
          <SettingsItem title="Payments" icon={icons.wallet as ImageProps} />
        </View>

        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>

        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          <SettingsItem
            icon={icons.logout as ImageProps}
            title="Logout"
            textStyle="text-danger"
            showArrow={false}
            onPress={() => console.log("Logout")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Profile;

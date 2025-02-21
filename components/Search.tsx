import icons from "@/constants/icons";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const path = usePathname();
  const searchParams = useLocalSearchParams<{ query?: string }>();
  
  const [search, setSearch] = useState<string>(searchParams.query || "");
  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  const debouncedSearch = useDebouncedCallback((text: string) => {
    return router.setParams({ query: text }), 500;
  });

  return (
    <View className="flex flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 border border-primary-100 mt-5 py-2">
      <View className="flex-1 flex flex-row items-center justify-start z-50">
        <Image source={icons.search as ImageProps} className="size-5" />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search for anything"
          className="text-sm font-rubik text-black-300 ml-2 flex-1"
        />
      </View>

      <TouchableOpacity>
        <Image source={icons.filter as ImageProps} className="size-5" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Search;

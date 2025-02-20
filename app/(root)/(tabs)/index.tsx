import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold ">Welcome here</Text>
      <Link href={"/sign-in"}>
        <Text>Sign In</Text>
      </Link>
      <Link href={"/explore"}>
        <Text>Explore</Text>
      </Link>
      <Link href={"/profile"}>
        <Text>Profile</Text>
      </Link>
      <Link href={{ pathname: "/properties/[id]", params: { id: "1" } }}>
        <Text>Id</Text>
      </Link>
    </View>
  );
}

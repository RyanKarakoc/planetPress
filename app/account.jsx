import Header from "../components/common/Header";
import NavBar from "../components/common/NavBar/NavBar";
import { Text, View } from "react-native";

export default function Account() {
  return (
    <View>
      <Header />
      <Text>Account/sign out</Text>
      // signout and/or other functionality
      <NavBar />
    </View>
  );
}

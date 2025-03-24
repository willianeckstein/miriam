import { Text, View } from "react-native";
import NewTaskDialog from "~/features/homeScreen/NewTaskDialog";

export default function HomeScreen() {
  return (
    <View className="flex items-center justify-center h-full">
      <Text>Home</Text>
      <NewTaskDialog />
    </View>
  );
}

import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  return (
    <View className="bg-primary flex-1">
      <Image
        source={images.bg}
        className="w-full absolute top-0 left-0 z-0"
        resizeMode="cover"
      />

      <ScrollView
        className="flex-1 px-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <SafeAreaView>
          <Image source={icons.logo} className="w-12 h-10 mt-4 mb-8 mx-auto" />
          <View>
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder={"Search for movie"}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

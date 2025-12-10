import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="bg-primary flex-1">
      <Image
        source={images.bg}
        className="min-w-full absolute top-0 left-0 z-0"
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
            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Trending Movies
              </Text>

              <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

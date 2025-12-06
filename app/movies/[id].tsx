import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const details = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Movie id : {id}</Text>
    </View>
  );
};

export default details;

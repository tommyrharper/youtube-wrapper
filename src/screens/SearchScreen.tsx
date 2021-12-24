import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { CTAButton } from "../components/CTAButton";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../NavigationStack";
import { useStore } from "../zustandStore";
import { Heading } from "../components/Heading";

export const SearchScreen = () => {
  const noOfVideos = useStore((state) => state.noOfVideos);
  const setNoOfVideos = useStore((state) => state.setNoOfVideos);

  const { navigate, goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Heading>Search</Heading>
      <TextInput />
      <CTAButton onPress={() => navigate("Search")}>Go</CTAButton>
      <CTAButton onPress={goBack}>Back</CTAButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  picker: {
    width: "40%",
  },
});

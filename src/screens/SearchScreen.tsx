import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { CTAButton } from "../components/CTAButton";
import { useNavigation } from "@react-navigation/native";
import { Heading } from "../components/Heading";
import { DefaultContainer } from "../components/DefaultContainer";

export const SearchScreen = () => {
  const { navigate, goBack } = useNavigation();

  return (
    <DefaultContainer>
      <Heading>Search</Heading>
      <TextInput />
      <CTAButton onPress={() => navigate("Search")}>Go</CTAButton>
      <CTAButton onPress={goBack}>Back</CTAButton>
    </DefaultContainer>
  );
};

const styles = StyleSheet.create({});

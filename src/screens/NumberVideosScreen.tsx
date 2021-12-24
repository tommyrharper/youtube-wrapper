import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { CTAButton } from "../components/CTAButton";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../NavigationStack";

export const NumberVideosScreen = () => {
  const [noOfVideos, setNoOfVideos] = useState<number>(5);
  const {
    params: { lengthOfTime },
  } = useRoute<RouteProp<RootStackParamList, "NumberVideos">>();

  const { navigate, goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        How many videos would you like to watch?
      </Text>
      <Picker
        style={styles.picker}
        selectedValue={noOfVideos}
        onValueChange={setNoOfVideos}
      >
        <Picker.Item label="1 videos" value={1} />
        <Picker.Item label="2 videos" value={2} />
        <Picker.Item label="3 videos" value={3} />
      </Picker>
      <CTAButton onPress={() => {}}>Start</CTAButton>
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
  question: {
    fontSize: 40,
    textAlign: "center",
    padding: 30,
  },
  picker: {
    width: "40%",
  },
});

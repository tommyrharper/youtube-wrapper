import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { CTAButton } from '../components/CTAButton';
import { useNoOfVideosStore } from '../store';
import { Heading } from '../components/Heading';
import { DefaultContainer } from '../components/DefaultContainer';
import { StyledPicker } from '../components/StyledPicker';

export const NumberVideosScreen = () => {
  const { noOfVideos, setNoOfVideos } = useNoOfVideosStore();
  const { navigate, goBack } = useNavigation();

  return (
    <DefaultContainer>
      <Heading>How many videos would you like to watch?</Heading>
      <StyledPicker selectedValue={noOfVideos} onValueChange={setNoOfVideos}>
        <Picker.Item label="1 videos" value={1} />
        <Picker.Item label="2 videos" value={2} />
        <Picker.Item label="3 videos" value={3} />
      </StyledPicker>
      <CTAButton onPress={() => navigate('Search')}>Next</CTAButton>
      <CTAButton onPress={goBack}>Back</CTAButton>
    </DefaultContainer>
  );
};

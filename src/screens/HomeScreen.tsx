import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/core';
import { CTAButton } from '../components/CTAButton';
import { useStore } from '../zustandStore';
import { Heading } from '../components/Heading';
import { DefaultContainer } from '../components/DefaultContainer';
import { StyledPicker } from '../components/StyledPicker';

export const HomeScreen = () => {
  const { lengthOfTime, setLengthOfTime } = useStore();
  const { navigate } = useNavigation();

  return (
    <DefaultContainer>
      <Heading>How long would you like to watch for?</Heading>
      <StyledPicker
        selectedValue={lengthOfTime}
        onValueChange={setLengthOfTime}
      >
        <Picker.Item label="5 mins" value={5} />
        <Picker.Item label="10 mins" value={10} />
        <Picker.Item label="15 mins" value={15} />
        <Picker.Item label="20 mins" value={20} />
        <Picker.Item label="25 mins" value={25} />
        <Picker.Item label="30 mins" value={30} />
      </StyledPicker>
      <CTAButton onPress={() => navigate('NumberVideos')}>Next</CTAButton>
    </DefaultContainer>
  );
};

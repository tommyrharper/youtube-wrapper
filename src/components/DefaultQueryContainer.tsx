import { useNavigation } from '@react-navigation/core';
import React, { ReactNode } from 'react';
import { UseFetchResult } from '../hooks/useFetch';
import { CTAButton } from './CTAButton';
import { DefaultContainer } from './DefaultContainer';
import { ErrorMessage } from './ErrorMessage';
import { Heading } from './Heading';

interface DefaultQueryContainerProps {
  children: ReactNode;
  query: UseFetchResult;
}

export const DefaultQueryContainer = ({
  children,
  query,
}: DefaultQueryContainerProps) => {
  const { goBack } = useNavigation();
  const { loading, error } = query;
  return (
    <DefaultContainer>
      {loading && (
        <>
          <Heading>Loading...</Heading>
          <CTAButton onPress={goBack}>Back</CTAButton>
        </>
      )}
      {error && !loading && (
        <>
          <ErrorMessage>
            {query.errorMessage || 'There was an Error'}
          </ErrorMessage>
          <CTAButton onPress={goBack}>Back</CTAButton>
        </>
      )}
      {!error && !loading && children}
    </DefaultContainer>
  );
};

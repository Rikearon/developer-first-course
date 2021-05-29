import React from 'react';
import {Text} from 'react-native';

export const Header = ({name, date, description}) => {
  return (
    <Text>
      Hello {name}, today is {date} and I would like to welcome you to EVT's
      Developer First Course. {description}. Now I can:{' '}
    </Text>
  );
};

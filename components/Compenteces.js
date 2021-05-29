import React from 'react';
import {Text} from 'react-native';

const Competences = ({user}) => {
  return <Text>Competences: {user.competences.join(', ')}</Text>;
};

export default Competences;

import React from 'react';
import {Text, View} from 'react-native';

export const Curriculum = ({user}) => {
  return (
    <View>
      <Text>Na verdade, agora meu currículo no React Native é: </Text>

      <Text>Nome: {user.name}</Text>

      <Text>Date: {user.date}</Text>

      <Text>
        Competencias:{' '}
        {user.competences.map(item => '"' + item + '"').join(' e também ')}
      </Text>
    </View>
  );
};

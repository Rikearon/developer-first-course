/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const name = 'Henrique Aron Ferreira';

  console.log(name);

  const date = new Date().toLocaleDateString();

  console.log(date);

  const competences = ['How to handle variables on JS'];

  competences.push('const let and var');

  const user = {
    name,
    date,
    competences,
  };

  user.location = 'brasil';

  console.log(user);

  competences.push('handle objects');

  const returnName = () => {
    if (name == 'Henrique Aron Ferreira') return 'Mesmo nome';
    else return name;
  };

  return (
    <View>
      <Text>{returnName()}</Text>
      <Text>Date: {user.date}</Text>
      <Text>Competences: {user.competences.join(', ')}</Text>
    </View>
  );
};

export default App;

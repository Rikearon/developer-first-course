/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import Competences from './components/Compenteces';
import {Header} from './components/Header';
import {Curriculum} from './components/Curriculum';

const App = () => {
  const name = 'Henrique Aron';

  console.log(name);

  const date = new Date().toLocaleDateString();

  console.log(date);

  const description = 'I know how to use JSX';

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
      <Header name={name} date={date} description={description} />

      <Competences user={user} />

      <Curriculum user={user} />
    </View>
  );
};

export const returnName = () => {
  if (name == 'Henrique Aron Ferreira') return 'Mesmo nome';
  else return name;
};

export default App;

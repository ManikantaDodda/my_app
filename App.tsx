
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';

import FlatCard from './src/components/FlatCard';
import ElavatedCards from './src/components/ElavatedCards';
import FancyCard from './src/components/FancyCard';



function App() {

  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCard />
      <ElavatedCards/>
      <FancyCard/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

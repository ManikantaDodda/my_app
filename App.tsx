
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';

import FlatCard from './src/components/FlatCard';
import ElavatedCards from './src/components/ElavatedCards';
import FancyCard from './src/components/FancyCard';
import ActionCard from './src/components/ActionCard';
import ContactList from './src/components/ContactList';



function App() {

  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCard />
      <ElavatedCards/>
      <FancyCard/>
      <ActionCard/>
      </ScrollView>
      
      <ContactList/>
    </SafeAreaView>
  );
}

export default App;

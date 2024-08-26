import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const Data = [
       { id:1, title : 'Manikanta'},
       {id : 2, title : 'Naga Sai'},
       {id : 3, title : 'Dodda'}
    ];
    
type ItemProps = {title: string};
    const Item = ({title}: ItemProps) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
  return (
    <View>
        <FlatList
        data={Data}
        renderItem={({item}) => <Item title={item.title} />}
      />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
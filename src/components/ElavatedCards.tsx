import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElavatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElavatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>TAP</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>more ...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>###</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>$$</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container :{
        padding:8
    },
    card :{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width: 100,
        height : 100,
        margin : 6,
        borderRadius : 4,
        
        shadowOffset :{
            width:100,
            height:1
        },
        shadowColor : 'red',
        shadowOpacity : 0.6,
        shadowRadius:4
    },
    cardElevated:{
        backgroundColor : '#cad5e2',
        elevation : 4
    }
})
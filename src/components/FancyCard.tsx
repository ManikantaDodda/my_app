import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style = {[styles.card, styles.cardElevated]}>
        <Image style={styles.cardImage} source={{uri : 'https://picsum.photos/200/300.jpg'}}></Image>
        <View style = {styles.cardBody}>
            <Text style = {styles.cardTitle}>Hawa Mahal</Text>
            <Text style = {styles.cardLabel}>Pinc City, Jaipur</Text>
            <Text style = {styles.cardDescription}>Its ancient Place and its Buetiful place .It
            is the edge of city palace</Text>
            <Text style = {styles.cardFooter}>12 min Away</Text>
        </View>
      </View>
      <View style = {[styles.card, styles.cardElevated]}>
        <Image style={styles.cardImage} source={{uri : 'https://picsum.photos/200/400.jpg'}}></Image>
        <View style = {styles.cardBody}>
            <Text style = {styles.cardTitle}>Hawa Mahal</Text>
            <Text style = {styles.cardLabel}>Pinc City, Jaipur</Text>
            <Text style = {styles.cardDescription}>Its ancient Place and its Buetiful place .It
            is the edge of city palace</Text>
            <Text style = {styles.cardFooter}>12 min Away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card : {},
    cardElevated : {},
    cardImage :{
        //width : 50,
        height : 180
    },
    cardBody :{

    },
    cardTitle :{
        fontSize : 30,
        fontWeight : 'bold',
        margin : 4
    },
    cardLabel :{
        margin : 4,
    },
    cardDescription :{
        margin : 4,
    },
    cardFooter : {
        margin : 4,
    }
    
})
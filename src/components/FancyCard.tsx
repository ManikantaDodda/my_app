import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Treding Places</Text>
      <TouchableOpacity style = {[styles.card, styles.cardElevated]}>
        <Image style={styles.cardImage} source={{uri : 'https://picsum.photos/200/300.jpg'}}></Image>
        <View style = {styles.cardBody}>
            <Text style = {styles.cardTitle}>Hawa Mahal</Text>
            <Text style = {styles.cardLabel}>Pinc City, Jaipur</Text>
            <Text style = {styles.cardDescription}>Its ancient Place and its Buetiful place .It
            is the edge of city palace</Text>
            <Text style = {styles.cardFooter}>12 min Away</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style = {[styles.card, styles.cardElevated]}>
        <Image style={styles.cardImage} source={{uri : 'https://picsum.photos/200/400.jpg'}}></Image>
        <View style = {styles.cardBody}>
            <Text style = {styles.cardTitle}>Hawa Mahal</Text>
            <Text style = {styles.cardLabel}>Pinc City, Jaipur</Text>
            <Text style = {styles.cardDescription}>Its ancient Place and its Buetiful place .It
            is the edge of city palace</Text>
            <View style = {styles.cardFooterContainer}>
               <Text style = {styles.cardFooter}>12 min Away</Text>
            </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card : {
        width: 350,
        height : 360,
        borderRadius : 6,
        marginVertical:12,
        marginHorizontal:16
    },
    cardElevated : {
        backgroundColor : '#ffffff',
        elevation : 3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage :{
        height : 180,
        marginBottom : 8,
        borderTopRightRadius : 6,
        borderTopLeftRadius : 6
    },
    cardBody :{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12

    },
    cardTitle :{
        fontSize : 23,
        fontWeight : 'bold',
        marginBottom : 4,
        color:'#000000'
    },
    cardLabel :{
        marginBottom : 4,
        color:'#000000'
    },
    cardDescription :{
        marginBottom : 4,
        marginTop:4,
        color:'lightblue'
    },
    cardFooterContainer : {
        flex:1,
        flexDirection : 'row',
        justifyContent : 'flex-end',
        alignItems : 'flex-end'
    },
    cardFooter : {
        marginBottom : 4,
        color:'#000000',
        fontWeight:'bold'

        }
    
})
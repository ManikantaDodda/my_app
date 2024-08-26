import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink : string)
    {
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text style = {styles.headingText} >Blog Card</Text>
      <View  style = {[styles.card, styles.cardElavated]}>
           <View style = {styles.headingContainer}>
            <Text > What's   new in Javascript 21 - E12</Text>
          </View> 
          <Image style = {styles.cardImage} source={{uri :  'https://picsum.photos/200/203.jpg'}}/>
          <View style = {styles.headingContainer}>
            <Text > The srcset attribute accepts a pair of image URLs and width
             descriptors separated by space. We can provide multiple sources separated by commas.</Text>
          </View> 
          <View style = {styles.footerContainer}>
                <TouchableOpacity>
                    <Text style={styles.socialLinks}>Read More</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>openWebsite('https://instagram')}>
                    <Text style={styles.socialLinks}>Follow Me</Text>
                </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8
    },
    headingContainer : {
        height : 40,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems:'center',
        backgroundColor : 'lightpink'
    },
    card:{
        width: 350,
        height : 360,
        borderRadius : 6,
        marginVertical:12,
        marginHorizontal:16
    },
    cardElavated :{
        backgroundColor : '#ffffff',
        elevation : 3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor :'#333',
        shadowOpacity : 0.5
    },
    cardImage : {
        height : 180,
        marginBottom : 8,
        borderTopRightRadius : 6,
        borderTopLeftRadius : 6
    },
    footerContainer :{
        padding : 8,
        flexDirection:'row',
        alignItems : 'center',
        justifyContent : 'space-evenly',
        backgroundColor : 'lightpink'
    },
    socialLinks :{
        fontSize: 16,
        color:'#000000',
        backgroundColor:'#fff',
        paddingHorizontal:20,
        paddingVertical: 12
    }

})

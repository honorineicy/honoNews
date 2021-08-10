import React from 'react';
import { TextInput, StyleSheet, View, Text, ScrollView, Image, Button } from 'react-native';

type Props = { navigation: any }

const HomePage: React.FC<Props> = ({ navigation }) => {

    const onShowClick = () => {
        navigation.navigate('News')
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            padding: 20,
            justifyContent: 'center',
            backgroundColor: '#aabbcc',
        },
        quoteText: {
            fontWeight: 'bold'
          },
        authorText: {
            color: 'green'
          },

          button: {
             marginTop:50
          }

    })


    return (
        <>
            <View style={styles.container}>
                <Text style={styles.quoteText}>Our greatest glory is not in never failing, but in rising up every time we fail.</Text>
                <Text style={styles.authorText}>-Ralph Waldo Emerson</Text>
                <View style={styles.button}>
                   <Button  onPress = {onShowClick} title = "Show news!"   color = "green"/>
                </View>
              
               
            </View>
           
        </>



    );

}



export default HomePage;